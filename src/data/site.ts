export const site = {
  name: 'AR Clothing',
  phoneDisplay: '0326 5632847',
  phoneTel: '+923265632847',
  whatsapp: '923265632847', // country code + number, no + or 0
  minPrice: 899,
  maxPrice: 2000,
}

export const easypaisa = {
  accountName: 'Abdur Rehman',
  qrImage: '/payment/easypaisa-qr.jpg',
  note: 'Order confirm hone ke baad Easypaisa par advance payment bhej kar screenshot WhatsApp par send kar dein.',
}

export type PaymentMethod = 'cod' | 'easypaisa'
export const paymentMethods: { id: PaymentMethod; label: string; desc: string }[] = [
  { id: 'cod', label: 'Cash on Delivery', desc: 'Cash dein jab order pahunche' },
  { id: 'easypaisa', label: 'Easypaisa Advance', desc: 'QR scan kar ke advance payment' },
]

export const pkr = (n: number) => 'Rs ' + String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',')

export const waLink = (text: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`
