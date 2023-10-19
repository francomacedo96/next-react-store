import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import Layout from '@/components/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout
        title={"Inicio"}
        description={"Blog de música, venta de guitarras y más"}
      >
        <h1>Hola Mundo en Next</h1>

      </Layout>
    </>
  )
}
