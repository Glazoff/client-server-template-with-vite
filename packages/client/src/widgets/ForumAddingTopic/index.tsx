import styles from './styles.module.scss';
import ForumAddTopicMain from '../../features/ForumAddTopicMain';
import Title from '../../shared/ui/title';

export default function AddingTopicPage() {
  return (
    <div className={styles.add}>
      <Title label="Создать новый топик" class={styles.add__title} />

      <ForumAddTopicMain />
    </div>
  );
}
