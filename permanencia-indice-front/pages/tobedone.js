import Head from "next/head";
import Toolbar from "../components/Toolbar/Toolbar";
import styles from '../styles/Home.module.css'

function ToBeDone(){
  return (
    <div>
      <Head>

      </Head>
      <Toolbar />
      <main className={styles['main--page']}>
        <h2>Esta página ainda não foi feita!</h2>
        <h2>Toda ajuda é bem-vinda.</h2> 
      </main>
    </div>
  )
}

export default ToBeDone