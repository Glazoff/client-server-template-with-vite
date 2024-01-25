/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './styles.module.scss';
import CommentCard from '../../features/CommentCard';
import ForumFooterBtns from '../../features/ForumFooterBtns';
import Title from '../../shared/title';
import cards from '../../utils/forumCards';

export default function ForumTopicPage() {
  const { id } = useParams();
  const card = cards.find((card) => card.id.toString() === id);

  const [comments, setComments] = useState(card?.comments);
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue((e.target as HTMLInputElement).value);
  };

  return (
    <div className={styles.topic}>
      <Title
        label={cards.find((card) => card.id.toString() === id)?.text || ''}
        class={styles.topic__title}
      />
      <main className={styles.topic__main}>
        {comments?.map((comment) => {
          return (
            <CommentCard
              src={comment.scr}
              nikname={comment.nik}
              time={comment.time}
              comment={comment.text}
              key={comments.indexOf(comment)}
            />
          );
        })}
      </main>

      <footer className={styles.forum__footer}>
        <input className={styles.forum__input} value={value} onChange={handleChange} />
        <ForumFooterBtns
          onClick={() => {
            setComments([
              {
                scr: '../src/images/avatar.png',
                nik: 'Nikname',
                text: value,
                time: '10.05.2024 23:12',
              },
              ...comments!,
            ]);
            setValue('');
          }}
        />
      </footer>
    </div>
  );
}
