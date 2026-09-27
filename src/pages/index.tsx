import Head from 'next/head'
import { useState } from 'react'
import { Product } from '@/data/products'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Shop from '@/components/Shop'
import ProductModal from '@/components/ProductModal'
import CartDrawer from '@/components/CartDrawer'
import PaymentModal from '@/components/PaymentModal'
import { Marquee, HowToOrder, PaymentStrip, Footer, WhatsAppFloat } from '@/components/Sections'

export default function Home() {
  const [selected, setSelected] = useState<Product | null>(null)
  return (
    <>
      <Head>
        <title>AR Clothing | Oversized Printed Tees, Rs 899 to Rs 2,000</title>
        <meta
          name="description"
          content="AR Clothing - oversized graphic and plain tees. Rs 1899 to Rs 2,000. Order on WhatsApp 0326 5632847, pay advance via Easypaisa."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Shop onOpen={setSelected} />
        <HowToOrder />
        <PaymentStrip />
      </main>
      <Footer />
      <WhatsAppFloat />
      {selected && <ProductModal key={selected.id} p={selected} onClose={() => setSelected(null)} />}
      <CartDrawer />
      <PaymentModal />
    </>
  )
}
