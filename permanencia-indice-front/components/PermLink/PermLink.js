import styles from '/styles/PermLinks.module.css'

function PermLink(props) {
  return (
    <a href={props.link} target="_blank">
      <li className={styles['perm--link']}>
        {props.title}
      </li>
    </a>
  )
}

export default PermLink