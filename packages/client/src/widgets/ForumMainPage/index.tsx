import styles from './styles.module.scss';
import ForumContainer from '../../features/ForumContainer';
import Title from '../../shared/ui/title';

export default function ForumMainPage() {
  return (
    <div className={styles.forum}>
      <Title label="Форум" class={styles.forum__title} />
      <ForumContainer />
    </div>
  );
}
