import { useRouter } from "next/router"
import Image from "next/image"
import styles from "../../styles/guitarras.module.css"
import Layout from "@/components/layout"

export default function Producto({guitarra}) {
    const router = useRouter()
    const {nombre, descripcion, imagen, precio} = guitarra[0].attributes

  return (

    <Layout
      title={`Guitarra ${nombre} `}
    >
    <div className={styles.guitarra}>
      <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`Imagen guitarra ${nombre}`} />
        <div className={styles.contenido}>
          <h3> {nombre} </h3>
          <p className={styles.descripcion}> {descripcion} </p>
          <p className={styles.precio}> $ {precio} </p>
        </div>
    </div>
    </Layout>
  )
}

export async function getServerSideProps({query: {url}}) {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
  const {data: guitarra} = await respuesta.json()
  console.log(guitarra)

  return {
      props: {
        guitarra
      }
  }
}


/*
export async function getServerPaths() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras`)
  const {data} = await respuesta.json()

  const paths = data.map(guitarra => ({
    params: {
      url: guitarra.attributes.url
    }
  }))

  return {
      paths,
      fallback: false
  }
}

export async function getStaticProps({params: {url}}) {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
    const {data: guitarra} = await respuesta.json()

    return {
        props: {
          guitarra
        }
    }
}*/