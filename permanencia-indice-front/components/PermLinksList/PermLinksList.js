import PermLink from '../PermLink/PermLink'
import styles from '/styles/PermLinks.module.css'

function PermLinksList({ links }) {
  return (
    <div className={styles['perm--links--list']}>
      <ul>
        {links.sort((a, b) => {
          const titleA = a.title.toLowerCase(), titleB = b.title.toLowerCase();
          return titleB > titleA ? -1 : 1
        })
        .map((link) => {
          return <PermLink {...link} />
        })}
      </ul>

    </div>
  )
}

export default PermLinksList