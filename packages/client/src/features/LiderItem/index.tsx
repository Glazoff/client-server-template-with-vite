import AvatarLider from './components/Avatar';
import styles from './styles.module.scss';

type Lider = {
  name?: string;
  id?: number;
  position?: number;
  avatar: string;
  nickname?: string;
  score: number;
  userName?: string;
};

export default function LiderItem(props: Lider) {
  const { position, avatar, nickname, score, name, userName } = props;

  return (
    <div className={styles.lider}>
      <p className={styles.position}> {position} </p>
      <AvatarLider src={avatar} />
      <p className={styles.nikname}>
        {/* Студенты шлют, что попало в объект data в лидерборд. В итоге поля никнейм у всех разный */}
        {nickname} {name} {userName}
      </p>
      <p className={styles.score}> {score} </p>
    </div>
  );
}
