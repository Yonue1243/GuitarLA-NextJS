import Layout from "@/components/layout"
import Image from "next/image"
import styles from '../../styles/blog.module.css'
import { formatearFecha } from "@/utils/helpers"
export default function Post({post}) {

    const {Titulo, Contenido, imagen, publishedAt} = post[0].attributes


  return (
    <Layout
        title={`${Titulo}`}
    >
    <article    className={`${styles.post} ${styles['mt-3']} `}>
        <Image src={imagen.data.attributes.url} width={1000} height={400}
        alt={`imagen blog ${Titulo}`}/>

        <div className={styles.contenido}>
            <h3>{Titulo}</h3>
            <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
            <p className={styles.texto}>{Contenido}</p>
        
        </div>

    </article>
    </Layout>
  )
}


export async function getServerSideProps({query: {url}}){
    const respuesta = await fetch(`${process.env.API_URL}/blogs?filters[url]=${url}&populate=imagen`)
    const {data: post} = await respuesta.json()

    return{
        props:{
            post

        }
    }
}
