import { Link } from 'react-router-dom';
import styles from './style.module.scss';

interface Props {
  text?: string;
  counter?: number;
  path: string;
}

export default function ForumTopicCard(props: Props) {
  return (
    <Link to={props.path} className={styles.card__container}>
      <div className={styles.card}>
        <p className={styles.card__text}>{props.text}</p>
        <p className={styles.card__counter}>Кол-во сообщений - {props.counter}</p>
      </div>
    </Link>
  );
}
