// AR Clothing - all products live here. No backend needed.
// All product photos are real photos: /public/products/real/
// To add a product: drop the photo in /public/products/real/ and add one more object below.
// Optional "mrp": original price shown crossed-out when the item is on sale.

export type Product = {
  id: number
  name: string
  category: "Graphic Tee" | "Plain Tee"
  price: number // PKR, current price
  mrp?: number // PKR, original price (shown crossed-out) - omit if not on sale
  color: string
  fabric: string
  sizes: string[]
  image: string
  description: string
}

export const categories = ["All", "Graphic Tee", "Plain Tee"] as const

export const products: Product[] = [
  {
    "name": "Porsche 911 GT3 RS Print Tee",
    "category": "Graphic Tee",
    "price": 1800,
    "mrp": 3000,
    "color": "White",
    "fabric": "220 GSM Cotton",
    "sizes": ["S", "M", "L", "XL"],
    "image": "/products/real/ar-r01.jpg",
    "description": "Oversized tee with a front-and-back motorsport print. Heavyweight cotton, drop-shoulder AR Store fit.",
    "id": 1
  },
  {
    "name": "Sabr Calligraphy Oversized Tee",
    "category": "Graphic Tee",
    "price": 1900,
    "mrp": 2999,
    "color": "Charcoal Black",
    "fabric": "220 GSM Cotton",
    "sizes": ["S", "M", "L", "XL"],
    "image": "/products/real/ar-r02.jpg",
    "description": "Minimal chest print in Arabic calligraphy. Heavyweight cotton, drop-shoulder AR Store fit.",
    "id": 2
  },
  {
    "name": "Sabr Rug Print Oversized Tee",
    "category": "Graphic Tee",
    "price": 1800,
    "mrp": 3000,
    "color": "Charcoal Black",
    "fabric": "220 GSM Cotton",
    "sizes": ["S", "M", "L", "XL"],
    "image": "/products/real/ar-r03.jpg",
    "description": "Large back print inspired by traditional rug patterns. Heavyweight cotton, drop-shoulder AR Store fit.",
    "id": 3
  },
  {
    "name": "Porsche Wordmark Tee",
    "category": "Graphic Tee",
    "price": 1900,
    "mrp": 2999,
    "color": "White",
    "fabric": "220 GSM Cotton",
    "sizes": ["S", "M", "L", "XL"],
    "image": "/products/real/ar-r04.jpg",
    "description": "Clean chest wordmark print on soft heavyweight cotton. Drop-shoulder AR Store fit.",
    "id": 4
  },
  {
    "name": "The Funniest Thing Tee",
    "category": "Graphic Tee",
    "price": 1800,
    "mrp": 3000,
    "color": "Black",
    "fabric": "220 GSM Cotton",
    "sizes": ["S", "M", "L", "XL"],
    "image": "/products/real/ar-r05.jpg",
    "description": "Bold full-front typography print with a witty one-liner. Heavyweight cotton, drop-shoulder AR Store fit.",
    "id": 5
  },
  {
    "name": "Ash Grey Essential Tee",
    "category": "Plain Tee",
    "price": 1900,
    "mrp": 2999,
    "color": "Ash Grey",
    "fabric": "220 GSM Cotton",
    "sizes": ["S", "M", "L", "XL"],
    "image": "/products/real/ar-r06.jpg",
    "description": "Oversized fit tee in soft heavyweight cotton. Drop-shoulder cut, ribbed crew neck, holds shape wash after wash.",
    "id": 6
  },
  ]
