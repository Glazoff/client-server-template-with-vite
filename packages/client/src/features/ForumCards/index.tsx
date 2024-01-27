import styles from './styles.module.scss';
import path from '../../App/Router/constants';
import cards from '../../utils/forumCards';
import ForumTopicCard from '../ForumTopicCard';

export default function ForumCards() {
  return (
    <div className={styles.forum__cards}>
      {cards.map((card) => {
        return (
          <ForumTopicCard
            path={`${path.TopicPage}/${card.id}`}
            text={card.text}
            counter={card.comments.length}
            key={card.id}
          />
        );
      })}
    </div>
  );
}
