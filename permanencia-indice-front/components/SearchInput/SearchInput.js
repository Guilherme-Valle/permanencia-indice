import styles from '/styles/Toolbar.module.css'
import { config } from '@fortawesome/fontawesome-svg-core' // 👈
import '@fortawesome/fontawesome-svg-core/styles.css' // 👈
config.autoAddCss = false // 👈

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' // 👈
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function SearchInput({ text, setText }) {
  return (<div className={styles['toolbar--input--container']}>
    <input className={styles['toolbar--input']} type='text' value={text} onChange={e => setText(e.target.value)} />
    <FontAwesomeIcon icon={faMagnifyingGlass} />
  </div>)
}

export default SearchInput