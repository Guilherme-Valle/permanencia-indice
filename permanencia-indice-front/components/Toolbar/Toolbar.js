import Link from 'next/link'
import styles from '/styles/Toolbar.module.css'
import Image from 'next/image'

const Toolbar = () => {
  return (
    <nav className={styles['nav--toolbar']}>
      <Link href='/'>
        <div className={styles['toolbar--logo']}>
          <Image src="/permanencia.jpg" height='0' width='160' />
          <h4>Índice da Permanência</h4>
        </div>
      </Link>
      <ul className={styles['toolbar--links']}>
        <li>
          <Link href='/authors'><a>Autores</a></Link>
        </li>
        <li>
          <Link href='/'><a>Thesauri</a></Link>
        </li>
        <li>
          <Link href='/'><a>Índice temático</a></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Toolbar