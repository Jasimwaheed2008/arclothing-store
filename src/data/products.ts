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
    "price": 1600,
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
    "price": 1500,
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
    "price": 1600,
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
    "price": 1500,
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
    "price": 1600,
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
    "price": 1500,
    "mrp": 2999,
    "color": "Ash Grey",
    "fabric": "220 GSM Cotton",
    "sizes": ["S", "M", "L", "XL"],
    "image": "/products/real/ar-r06.jpg",
    "description": "Oversized fit tee in soft heavyweight cotton. Drop-shoulder cut, ribbed crew neck, holds shape wash after wash.",
    "id": 6
  },
  {
    "name": "It Is What It Is Tee",
    "category": "Graphic Tee",
    "price": 1600,
    "mrp": 3000,
    "color": "Black",
    "fabric": "220 GSM Cotton",
    "sizes": ["S", "M", "L", "XL"],
    "image": "/products/real/ar-r07.jpg",
    "description": "Minimal chest typography print with a laid-back message. Heavyweight cotton, drop-shoulder AR Store fit.",
    "id": 7
  },
  {
    "name": "Signal Red Essential Tee",
    "category": "Plain Tee",
    "price": 1500,
    "mrp": 2999,
    "color": "Red",
    "fabric": "220 GSM Cotton",
    "sizes": ["S", "M", "L", "XL"],
    "image": "/products/real/ar-r08.jpg",
    "description": "Oversized fit tee in soft heavyweight cotton. Drop-shoulder cut, ribbed crew neck, holds shape wash after wash.",
    "id": 8
  },
  {
    "name": "Sunset Palms Graphic Tee",
    "category": "Graphic Tee",
    "price": 1600,
    "mrp": 3000,
    "color": "Black",
    "fabric": "220 GSM Cotton",
    "sizes": ["S", "M", "L", "XL"],
    "image": "/products/real/ar-r09.jpg",
    "description": "Front chest print of a sunset and palm trees. Heavyweight cotton, drop-shoulder AR Store fit.",
    "id": 9
  },
  {
    "name": "Paris Skyline Tee",
    "category": "Graphic Tee",
    "price": 1500,
    "mrp": 2999,
    "color": "White",
    "fabric": "220 GSM Cotton",
    "sizes": ["S", "M", "L", "XL"],
    "image": "/products/real/ar-r10.jpg",
    "description": "Paris-inspired typography and skyline print on soft heavyweight cotton. Drop-shoulder AR Store fit.",
    "id": 10
  },
  {
    "name": "Take It Easy Tee",
    "category": "Graphic Tee",
    "price": 1600,
    "mrp": 3000,
    "color": "White",
    "fabric": "220 GSM Cotton",
    "sizes": ["S", "M", "L", "XL"],
    "image": "/products/real/ar-r11.jpg",
    "description": "Bold back typography print with a relaxed message. Heavyweight cotton, drop-shoulder AR Store fit.",
    "id": 11
  },
  {
    "name": "Smiley Minimal Tee",
    "category": "Graphic Tee",
    "price": 1500,
    "mrp": 2999,
    "color": "White",
    "fabric": "220 GSM Cotton",
    "sizes": ["S", "M", "L", "XL"],
    "image": "/products/real/ar-r12.jpg",
    "description": "Small minimal smiley chest print. Heavyweight cotton, drop-shoulder AR Store fit.",
    "id": 12
  },
  {
    "name": "Smile Bear Graphic Tee",
    "category": "Graphic Tee",
    "price": 1600,
    "mrp": 3000,
    "color": "Black",
    "fabric": "220 GSM Cotton",
    "sizes": ["S", "M", "L", "XL"],
    "image": "/products/real/ar-r13.jpg",
    "description": "Playful bear graphic with front typography print. Heavyweight cotton, drop-shoulder AR Store fit.",
    "id": 13
  },
  {
    "name": "Need Coffee Tee",
    "category": "Graphic Tee",
    "price": 1500,
    "mrp": 2999,
    "color": "Black",
    "fabric": "220 GSM Cotton",
    "sizes": ["S", "M", "L", "XL"],
    "image": "/products/real/ar-r14.jpg",
    "description": "Fun low-battery icon print with a coffee-lover's line. Heavyweight cotton, drop-shoulder AR Store fit.",
    "id": 14
  },
  {
    "name": "Music Makes Me High Tee",
    "category": "Graphic Tee",
    "price": 1600,
    "mrp": 3000,
    "color": "White",
    "fabric": "220 GSM Cotton",
    "sizes": ["S", "M", "L", "XL"],
    "image": "/products/real/ar-r15.jpg",
    "description": "Headphone graphic with bold front typography. Heavyweight cotton, drop-shoulder AR Store fit.",
    "id": 15
  },
  {
    "name": "Worst Nightmare Tee",
    "category": "Graphic Tee",
    "price": 1500,
    "mrp": 2999,
    "color": "Black",
    "fabric": "220 GSM Cotton",
    "sizes": ["S", "M", "L", "XL"],
    "image": "/products/real/ar-r16.jpg",
    "description": "Icon-based front print with a bold statement. Heavyweight cotton, drop-shoulder AR Store fit.",
    "id": 16
  },
  {
    "name": "Believe Graphic Tee",
    "category": "Graphic Tee",
    "price": 1600,
    "mrp": 3000,
    "color": "Black",
    "fabric": "220 GSM Cotton",
    "sizes": ["S", "M", "L", "XL"],
    "image": "/products/real/ar-r17.jpg",
    "description": "Clean chest wordmark print. Heavyweight cotton, drop-shoulder AR Store fit.",
    "id": 17
  },
  {
    "name": "Minimal Line Art Tee",
    "category": "Graphic Tee",
    "price": 1500,
    "mrp": 2999,
    "color": "White",
    "fabric": "220 GSM Cotton",
    "sizes": ["S", "M", "L", "XL"],
    "image": "/products/real/ar-r18.jpg",
    "description": "Small minimal line-art chest print. Heavyweight cotton, drop-shoulder AR Store fit.",
    "id": 18
  },
  {
    "name": "Dog Walking Shirt",
    "category": "Graphic Tee",
    "price": 1600,
    "mrp": 3000,
    "color": "Grey",
    "fabric": "220 GSM Cotton",
    "sizes": ["S", "M", "L", "XL"],
    "image": "/products/real/ar-r19.jpg",
    "description": "Fun dog-lover graphic print with bold typography. Heavyweight cotton, drop-shoulder AR Store fit.",
    "id": 19
  },
  {
    "name": "Mono Line Graphic Tee",
    "category": "Graphic Tee",
    "price": 1500,
    "mrp": 2999,
    "color": "Black",
    "fabric": "220 GSM Cotton",
    "sizes": ["S", "M", "L", "XL"],
    "image": "/products/real/ar-r20.jpg",
    "description": "Bold back line-art print. Heavyweight cotton, drop-shoulder AR Store fit.",
    "id": 20
  },
  {
    "name": "Wolf Portrait Tee",
    "category": "Graphic Tee",
    "price": 1600,
    "mrp": 3000,
    "color": "Slate Blue",
    "fabric": "220 GSM Cotton",
    "sizes": ["S", "M", "L", "XL"],
    "image": "/products/real/ar-r21.jpg",
    "description": "Detailed wolf portrait chest print. Heavyweight cotton, drop-shoulder AR Store fit.",
    "id": 21
  },
  {
    "name": "Beer Call Tee",
    "category": "Graphic Tee",
    "price": 1500,
    "mrp": 2999,
    "color": "Black",
    "fabric": "220 GSM Cotton",
    "sizes": ["S", "M", "L", "XL"],
    "image": "/products/real/ar-r22.jpg",
    "description": "Playful phone-call themed graphic print. Heavyweight cotton, drop-shoulder AR Store fit.",
    "id": 22
  },
  {
    "name": "Vintage Threads Tee",
    "category": "Graphic Tee",
    "price": 1600,
    "mrp": 3000,
    "color": "Olive",
    "fabric": "220 GSM Cotton",
    "sizes": ["S", "M", "L", "XL"],
    "image": "/products/real/ar-r23.jpg",
    "description": "Small chest logo print on soft heavyweight cotton. Drop-shoulder AR Store fit.",
    "id": 23
  },
  {
    "name": "Heartbeat Monogram Tee",
    "category": "Graphic Tee",
    "price": 1500,
    "mrp": 2999,
    "color": "Black",
    "fabric": "220 GSM Cotton",
    "sizes": ["S", "M", "L", "XL"],
    "image": "/products/real/ar-r24.jpg",
    "description": "Front heartbeat-pulse monogram print. Heavyweight cotton, drop-shoulder AR Store fit.",
    "id": 24
  }
]
