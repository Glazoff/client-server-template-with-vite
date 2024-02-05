import styles from './styles.module.scss';

interface PropsGameScore {
  score: number | string | null;
}

export default function GameScore(props: PropsGameScore) {
  return (
    <div className={styles.score}>
      <p className={styles.score__text}>{`Ваш счет: ${props.score} очков`}</p>
    </div>
  );
}
