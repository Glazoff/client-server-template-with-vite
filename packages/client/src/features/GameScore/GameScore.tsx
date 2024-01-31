import styles from './styles.module.scss'

interface Props {
  score: number | string
}

export default function GameScore(props: Props) {
  return (
    <div className={styles.score}>
      <p className={styles.score__text}>
        {`Ваш счет: ${props.score} очков`}
      </p>
    </div>
  )
}
