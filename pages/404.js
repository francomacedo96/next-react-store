import Layout from "@/components/layout"
import Link from "next/link"

export default function Page404() {
  return (
    <Layout>
        
        <p>Pagina no encontrada</p>
        <Link href="/">Ir a inicio</Link>

    </Layout>
  )
}
