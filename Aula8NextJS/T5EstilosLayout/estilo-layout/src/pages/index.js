import styles from '../styles/Home.module.css'

import Head from 'next/head'

import Image from 'next/image'

export default function Home() {
    return (
        <>
            <Head>
                <title>Página principal</title>
                <meta name='keywords' content='Notebook, celular, relório'></meta>
                <meta name='description' content='Os melhores eletrônicos perto de você' ></meta>
            </Head>
            <div>
                <h1 className={styles.title}>Página Home</h1>
                <Image 
                    src={'/images/imagem1.jpg'} 
                    width='300' 
                    height='300' 
                    alt='Paisagem com praia' 
                />
            </div>
        </>
    )
}
