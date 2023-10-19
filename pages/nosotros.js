import Layout from '@/components/layout'
import Image from 'next/image'
import styles from "../styles/nosotros.module.css"

export default function Nosotros() {
    return (


        <Layout
            title={"Nosotros"}
            description={"Sobre nosotros, GuitarLA tienda de música"}
        >

            <main className='contenedor'>
                <h2 className='heading'>Nosotros</h2>
                
                <div className={styles.contenido}>
                    <Image
                        src="/img/nosotros.jpg"
                        alt='Imagen'
                        width={1000}
                        height={800}
                    />

                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus viverra risus vitae augue tristique feugiat. Phasellus auctor massa sapien, at imperdiet neque tincidunt a. Mauris vehicula nibh ante, eu congue erat ornare non. Quisque convallis at purus vitae luctus. Suspendisse tincidunt eros nibh, quis elementum elit maximus et. Vivamus suscipit pharetra lorem, eu consectetur nunc ultrices sed. In ut faucibus quam, et pharetra magna. Morbi a rutrum sem, eget efficitur libero. Phasellus fringilla vehicula massa, id interdum turpis lacinia aliquam. Integer varius tincidunt massa eget aliquam.

                            Pellentesque feugiat erat quis tellus pretium suscipit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec varius tellus eros, at semper purus tristique quis. Nulla vitae molestie dui. Duis vitae ullamcorper metus. Donec cursus porta mollis. Phasellus aliquam ut ligula non rutrum. Quisque vel nisl quis ipsum eleifend varius a ut justo. Etiam nibh tellus, consequat ut interdum vitae, hendrerit non mi. Etiam dapibus lectus ut ligula gravida, nec tempor libero feugiat. Vestibulum imperdiet mauris ac erat finibus, vitae fringilla sem luctus.
                        </p>

                        <p>
                            Mauris tempor mi pulvinar, ullamcorper metus id, porta libero. Donec ut orci aliquam, sagittis lectus in, interdum quam. Phasellus scelerisque venenatis erat, sit amet maximus mi tincidunt at. Sed vel tristique magna, id aliquet lectus. Donec feugiat, justo ac ultrices iaculis, elit magna ullamcorper augue, non euismod ligula dolor eu nulla. Integer velit quam, fermentum id erat cursus, varius consequat risus. Sed urna tortor, consectetur sit amet maximus vitae, dapibus feugiat enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque malesuada tellus pretium risus feugiat, quis condimentum lectus elementum. Morbi sed sollicitudin eros. Phasellus at nibh mollis, commodo ante vitae, blandit nisl. Curabitur et accumsan quam. Vivamus a mauris a purus ullamcorper luctus in non justo. Morbi sed nulla elementum, posuere ante a, vulputate magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer velit mi, maximus vel tortor venenatis, rutrum tempor nibh.


                        </p>
                    </div>

                </div>
            </main>


        </Layout>


    )
}
