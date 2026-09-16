// Average response time across a list of checks.
//
// TODO: not implemented. It returns 0 no matter what you give it, which is why
// the detail panel always shows "0 ms".
//
// Things to decide before you write it:
//   - What should it return when the list is empty?
//   - A check that never got a response still has a response_ms (how long we
//     waited before giving up). Should that count towards the average?
//   - How many decimal places does anyone actually want to read?
export function averageResponseMs(checks) {
  return 0;
}

// How many checks in the list did not come back healthy.
//
// TODO: not implemented. It returns 0 no matter what, which is why the detail
// panel says nothing failed, even for a server that is switched off.
export function countFailed(checks) {
  return 0;
}
