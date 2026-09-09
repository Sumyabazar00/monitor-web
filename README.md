# monitor-web

Service monitor-ийн **frontend**. Backend-ээс өгөгдөл аваад дэлгэцэн дээр харуулна.
Өөрөө юу ч тооцоолохгүй, database руу ч хандахгүй — зөвхөн `monitor-api`-аас асууна.

Backend нь тусдаа repo: `monitor-api`. Энэ хоёр тусдаа програм гэдгийг санаж яв.

## Юу хэрэгтэй вэ

- Node.js 18-аас дээш
- `monitor-api` ажиллаж байх ёстой. Тэрийг эхлээд асаа.

## Тохиргоо

    npm install
    cp .env.example .env

## Ажиллуулах

    npm run dev

Дараа нь browser дээр http://localhost:5173 нээ.

Хоёр terminal зэрэг ажиллаж байх ёстой:

| Terminal | Юу ажиллаж байна | Хаяг |
|---|---|---|
| 1 | monitor-api | http://localhost:3001 |
| 2 | monitor-web | http://localhost:5173 |

## Файлууд

| Файл | Юу хийдэг вэ |
|---|---|
| `src/App.jsx` | Үндсэн хуудас. Backend-ээс service-үүдийг татаж, 10 секунд тутам шинэчилнэ |
| `src/ServiceCard.jsx` | Жагсаалтын нэг мөр |
| `src/ServiceDetail.jsx` | Нэг service дээр дарахад гарч ирэх сүүлийн шалгалтууд |
| `src/api.js` | Backend рүү хийх бүх `fetch` энд байна |
| `src/format.js` | Цаг, хугацааг харагдах хэлбэрт оруулна |
| `src/styles.css` | Бүх CSS. Framework байхгүй, бүгд гараар бичигдсэн |

## Browser-ийн Network tab

F12 дараад **Network** таб руу ор, хуудсаа refresh хий. `services` гэсэн хүсэлт харагдана.
Дарж үзвэл яг ямар хаяг руу очсон, ямар status code ирсэн, ямар JSON буцаж ирснийг харна.
Энэ бол frontend болон backend хоёр яг хаана уулздаг газар.
