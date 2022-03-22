import Link from 'next/link'
import styles from '/styles/Toolbar.module.css'
import Image from 'next/image'
import SearchInput from '../SearchInput/SearchInput'

const Toolbar = (props) => {
  return (
    <nav className={styles['nav--toolbar']}>
      <Link href='/'>
        <div className={styles['toolbar--logo']}>
          <Image src="/permanencia.jpg" height='0' width='160' />
          <h4>Índice da Permanência {props.subTitle ?' – ' + props.subTitle : null}</h4>
        </div>
      </Link>

      {props.showSearch ? <SearchInput text={props.text} setText={props.setText} /> : null}

      <ul className={styles['toolbar--links']}>
        <li>
          <Link href='/authors'><a>Autores</a></Link>
        </li>
        <li>
          <Link href='/tobedone'><a>Thesauri</a></Link>
        </li>
        <li>
          <Link href='/tobedone'><a>Índice temático</a></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Toolbar