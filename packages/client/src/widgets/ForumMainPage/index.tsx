import styles from './styles.module.scss';
import ForumContainer from '../../features/ForumContainer';
import Title from '../../shared/title';

export default function ForumMainPage() {
  return (
    <div className={styles.forum}>
      <Title label="Форум" class={styles.forum__title} />
      <ForumContainer />
    </div>
  );
}
