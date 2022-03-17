import Link from 'next/link'
import styles from '/styles/AuthorCard.module.css'

function AuthorCard(props) {
  return (
    <Link href={`authors/${props._id}`}>
      <div className={styles['author--card']}>
        <a>{props.name}</a>
      </div>
    </Link>

  )
}

export default AuthorCard