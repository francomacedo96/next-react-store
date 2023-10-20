import Image from "next/image"
import Link from "next/link"
import styles from "../styles/blog.module.css"
import { fromatearFecha } from "../utils/helpers" 

export default function Post({ post }) {

    const { titulo, contenido, imagen, url, publishedAt } = post

    return (
        <article>
            <Image src={imagen.data.attributes.formats.medium.url} alt="imagen blog" width={600} height={400} />

            <div className={styles.contenido}>

                <h3> {titulo} </h3>
                <p className={styles.fecha}>  {fromatearFecha(publishedAt)} </p>
                <p className={styles.resumen}> {contenido} </p>
                <Link className={styles.enlace} href={`/blog/${url}`}>Ver posts</Link>

            </div>

        </article>
    )
}
