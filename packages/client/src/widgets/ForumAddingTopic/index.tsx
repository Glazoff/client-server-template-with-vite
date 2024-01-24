import Title from "../../shared/title"
import styles from "./styles.module.scss"
import ForumAddTopicMain from '../../features/ForumAddTopicMain';

export default function AddingTopicPage () {
  return (
    <div className={styles.add}>
      <Title label="Создать новый топик" class={styles.add__title}/>
      
      <ForumAddTopicMain />
    </div>
  )
}
