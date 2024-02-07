import AvatarLider from './components/Avatar';
import styles from './styles.module.scss';

type Lider = {
  id: number;
  position: number;
  avatar: string;
  nikname: string;
  score: number;
};

export default function LiderItem(props: Lider) {
  const { position, avatar, nikname, score } = props;

  return (
    <div className={styles.lider}>
      <p className={styles.position}> {position} </p>
      <AvatarLider src={avatar} />
      <p className={styles.nikname}> {nikname} </p>
      <p className={styles.score}> {score} </p>
    </div>
  );
}
