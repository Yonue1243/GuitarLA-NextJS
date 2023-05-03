import Image from "next/image"
import Layout from "@/components/layout"
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <Layout
    title={'nosotros'}
    description={'GuitarLA - Venta de guitarras y blog de música'}
    >
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>
        <div className={styles.contenido}>
          <Image src="/img/nosotros.jpg" width={1000} height={800} alt="sobre nosotros"/>
            <div> 
            Aenean diam magna, varius et risus nec, fringilla finibus dolor. Sed in condimentum
            mi. Donec ac purus ullamcorper, dictum ex non, dictum nunc. Duis eu euismod metus, vel interdum nisi
            . Nulla mattis sapien sed orci fermentum dignissim. Praesent lacus sem, scelerisque eget molestie nec,
            </div>
        </div>
      </main>
    </Layout>
  )
}
