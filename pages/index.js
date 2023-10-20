import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/layout'
import Guitarra from '@/components/guitarra'
import styles from "../styles/grid.module.css"

const inter = Inter({ subsets: ['latin'] })

export default function Home({ guitarras, posts }) {

  return (
    <>
      <Layout
        title={"Inicio"}
        description={"Blog de música, venta de guitarras y más"}
      >
        <main className='contenedor'>
          <h1 className='heading'>Nuestra colección</h1>
          <div className={styles.grid}>                
                    {guitarras.map(guitarra => (
                    <Guitarra
                        key={guitarra.id}
                        guitarra={guitarra.attributes}
                    />
                ))}
                </div>
        </main>

        <section>

        </section>

      </Layout>
    </>
  )
}


export async function getStaticProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`
  const urlPosts = `${process.env.API_URL}/posts?populate=imagen`

  const [resGuitarras, resPosts] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPosts)
  ])

  const [{ data: guitarras }, { data: posts }] = await Promise.all([
    resGuitarras.json(),
    resPosts.json()
  ])

  return {
    props: {
      guitarras,
      posts
    }
  }


}