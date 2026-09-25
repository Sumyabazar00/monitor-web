// Average response time across a list of checks.
//
// TODO: dundaj hugatsaag oldog functioniig zassan 
//
// Things to decide before you write it:
//   - What should it return when the list is empty?
//   - A check that never got a response still has a response_ms (how long we
//     waited before giving up). Should that count towards the average?
//   - How many decimal places does anyone actually want to read?
export function averageResponseMs(checks) {
  if (checks.length === 0) {
    return null;
  }
  let sum = 0;
  let count = 0;

  for (const check of checks) {
    if (check.status_code !== null) {
      sum += check.response_ms;
      count++;
    }
  }
  if (count === 0) {
    return null; 
  }
  let average = sum /count ;
  return Math.round(average);
}

// How many checks in the list did not come back healthy.
//
// TODO: not implemented. It returns 0 no matter what, which is why the detail
// panel says nothing failed, even for a server that is switched off.
export function countFailed(checks) {
  let count = 0;
  
  for (const check of checks) {
    if (!check.ok) {
      count = count + 1;
    }
  }
  return count;
}

// The single slowest check in the list, returned whole so the panel can show both
// how long it took and when it happened.
//
// TODO: not implemented. It always returns null, so the panel shows "-".
export function slowestCheck(checks) {
  let highest = checks[0].response_ms;
  let highestItem = {};
  for (let i = 1; i < checks.length; i++) {
    if (checks[i].response_ms > highest ) {
        highestItem = checks[i];
    }
  }
  return highestItem;
}
