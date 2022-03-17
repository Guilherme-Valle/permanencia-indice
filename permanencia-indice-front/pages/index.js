import Head from 'next/head'
import Link from 'next/link'
import Toolbar from '../components/Toolbar/Toolbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Índice da Permanência</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toolbar />

      <main className={styles['main--page']}>

        <h2>Este projeto é uma iniciativa pessoal,
          sem vinculação com o <a href='https://permanencia.org.br' target='_blank'>site</a> da Permanência ou com qualquer objetivo financeiro,
          que tem por fim exibir índices dos artigos do site de uma forma mais organizada do que os do website (acredito que o índice mais organizado do website é o da sessão "Revista Permanência"). </h2>

        <br />

        <h2>Também fiz isso para adquirir novos conhecimentos em programação web e scrapping. </h2>

        <br />
        <br />
        <h2>
          Para mais informações, não deixe de visitar o <a href='https://github.com/Guilherme-Valle/permanencia-indice'
            target='_blank'>repositório deste site</a>.</h2>

        <h2>Salve Maria!</h2>

      </main>
    </div>

  )
}
