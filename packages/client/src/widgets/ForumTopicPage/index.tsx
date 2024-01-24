import { useParams } from "react-router-dom";
import CommentCard from "../../features/CommentCard";
import ForumFooter from "../../features/ForumFooter";
import Title from "../../shared/title";
import cards from "../../utils/forumCards";
import styles from "./styles.module.scss"

export default function ForumTopicPage () {
  const { id } = useParams()

  const card = cards.find(card => card.id.toString() === id)

  return (
    <div className={styles.topic}>
      <Title 
        label={cards.find(card => card.id.toString() === id)?.text || ""} 
        class={styles.topic__title}
      />
      <main className={styles.topic__main}>
        {card?.comments.map(comment => {
              return <CommentCard
                src={comment.scr}
                nikname={comment.nik}
                time={comment.time}
                comment={comment.text}
                key={card.comments.indexOf(comment)}
              />
            })}
      </main>
      <ForumFooter />
    </div>
  )
}
