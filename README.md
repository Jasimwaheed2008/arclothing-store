# AR Clothing – frontend only (Next.js)

Koi backend / database nahi. Sab kuch `src/data/products.ts` mein hai.

    npm install
    npm run dev      # http://localhost:3000
    npm run build && npm start

## Products
- Real photos: `public/products/real/` (4 actual AR Store tees)
- Studio mockups: `public/products/gen/` (24 designs — swap these for real photos as they come in)
- Prices: Rs 899 – Rs 1,999

## Naya product add karna
1. Photo `public/products/` mein daalo (jpg / png / webp).
2. `src/data/products.ts` mein ek object aur add kar do (id, name, category, price, image ...).

## Contact number / Easypaisa badalna
`src/data/site.ts` — phone number aur Easypaisa QR (`public/payment/easypaisa-qr.jpg`) yahin hain.

## Payment
- Cash on Delivery (COD) — default option in cart.
- Easypaisa advance — QR in `public/payment/easypaisa-qr.jpg`, details in `src/data/site.ts`.
- Sale items (crossed-out MRP): set `mrp` on a product in `src/data/products.ts`; the discount % shows automatically.
