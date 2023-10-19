import Layout from '@/components/layout'
import ListadoGuitarras from '@/components/listado-guitarras'

export default function Tienda() {
    return (


        <Layout

            title={"Tienda"}
            description={"Tienda de música"}
        >

            <main className='contenedor'>

                <h1 className='heading'>Nuestras Guitarras</h1>

                <ListadoGuitarras
                
                />
            </main>


        </Layout>


    )
}

export async function getStaticProps() {
    const respuesta = await fetch(`http://127.0.0.1:1337/api/guitarras?populate=imagen`) 
    const resultado = await respuesta.json()
    console.log(resultado)

    return {
        props: {

        }
    }
}