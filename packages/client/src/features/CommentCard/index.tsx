import Imagine from "../../shared/imagine"
import styles from "./styles.module.scss"

interface Props {
  src: string
  nikname: string
  comment: string
  time: string
}

export default function CommentCard (props: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.card__img_info}>
        <Imagine src={props.src} class={styles.card__img}/>
        <p className={styles.card__nikname}>{props.nikname}</p>
      </div>
      <div className={styles.card__text}>
        <p className={styles.card__comment}>{props.comment}</p>
        <span className={styles.card__time}>{props.time}</span>
      </div>
    </div>
  )
}
