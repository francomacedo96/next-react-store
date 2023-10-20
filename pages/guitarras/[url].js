import { useRouter } from "next/router"

export default function Producto({guitarra}) {
    const router = useRouter()
    console.log(guitarra)

  return (
    <div>
        
    </div>
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