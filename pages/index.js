import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

      <h1>Hola Mundo en Next</h1>

      <Link href="/nosotros">Nosotros</Link>

    </>
  )
}
