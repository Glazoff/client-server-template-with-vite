import AvatarLider from './components/Avatar';
import styles from './styles.module.scss';

type Lider = {
  name?: string;
  id?: number;
  position?: number;
  avatar: string;
  FrontWearRanking?: number | string;
  score?: number | string;
  userName?: string;
};

export default function LiderItem(props: Lider) {
  const { position, avatar, name, score } = props;

  return (
    <div className={styles.lider}>
      <p className={styles.position}> {position} </p>
      <AvatarLider src={avatar} />
      <p className={styles.nickname}>{name}</p>
      <p className={styles.score}>{score}</p>
    </div>
  );
}
