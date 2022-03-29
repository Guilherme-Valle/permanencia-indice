import Link from 'next/link'
import styles from '/styles/Toolbar.module.css'
import Image from 'next/image'
import SearchInput from '../SearchInput/SearchInput'
import { useState } from 'react'

const Toolbar = (props) => {
  const [toggleClass, setToggleClass] = useState('');
  const [activeClass, setActiveClass] = useState('');
  const [animationClass, setAnimationClass] = useState('');

  const [siteHeader, setSiteHeader] = useState('Índice da Permanência');
  const [logoWidth, setLogoWidth] = useState('160');

  const onToggleBurger = (() => {
    if (!toggleClass) {
      setActiveClass(styles['nav--active']);
      setAnimationClass(styles['animation--class']);
      setToggleClass(styles['toggle']);
      setSiteHeader('');
      setLogoWidth('60');
    } else {
      setToggleClass('');
      setActiveClass('');
      setAnimationClass('');
      setSiteHeader('Índice da Permanência');
      setLogoWidth('160');
    }
  })

  return (
    <nav className={styles['nav--toolbar']}>
      <Link href='/'>
        <div className={styles['toolbar--logo']}>
          <Image src="/permanencia.jpg" height='0' width={logoWidth} className={styles['img--toolbar']}></Image>
          <h4 className={styles['site--title']}>{siteHeader} {props.subTitle ? ' – ' + props.subTitle : null}</h4>
        </div>
      </Link>

      {props.showSearch ? <SearchInput text={props.text} setText={props.setText} /> : null}

      <ul className={styles['toolbar--links'] + ' ' + activeClass}>
        <li className={animationClass}>
          <Link href='/authors'><a>Autores</a></Link>
        </li>
        <li className={animationClass}>
          <Link href='/tobedone'><a>Thesauri</a></Link>
        </li>
        <li className={animationClass}>
          <Link href='/tobedone'><a>Índice temático</a></Link>
        </li>
      </ul>
      <div className={styles['burger--toolbar'] + ' ' + toggleClass} onClick={onToggleBurger}>
        <div className={styles['burger--line--1']}></div>
        <div className={styles['burger--line--2']}></div>
        <div className={styles['burger--line--3']}></div>
      </div>
    </nav>
  )
}

export default Toolbar