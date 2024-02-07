import styles from './styles.module.scss';

type Lider = {
  id: number;
  position: number;
  avatar: string;
  nikname: string;
  score: number;
};

export default function LiderItem(props: Lider) {
  const { id, position, avatar, nikname, score } = props;

  return <div className={styles.lider} />;
}
