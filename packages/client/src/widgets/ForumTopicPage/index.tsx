/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './styles.module.scss';
import CommentCard from '../../features/CommentCard';
import ForumFooterBtns from '../../features/ForumFooterBtns';
import Title from '../../shared/ui/title';
import cards from '../../utils/forumCards';

export default function ForumTopicPage() {
  const { id } = useParams();
  const card = cards.find((card) => card.id.toString() === id);

  const [comments, setComments] = useState(card?.comments);
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const addComment = () => {
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
  };

  const label = card?.text || '';

  return (
    <div className={styles.topic}>
      <Title label={label} class={styles.topic__title} />
      <main className={styles.topic__main}>
        {comments?.map((comment, index) => {
          return (
            <CommentCard
              avatarUrl={comment.scr}
              nikname={comment.nik}
              time={comment.time}
              comment={comment.text}
              //сейчас не получится использовать время и никнейм, так как они все одинаковые у всех комментов,
              //react выдает ошибку одинаковых ключей, но когда появится настоящая бд, сделаю так
              key={/* `${comment.time}-${comment.nik}` */index}
            />
          );
        })}
      </main>

      <footer className={styles.forum__footer}>
        <input className={styles.forum__input} value={value} onChange={handleChange} />
        <ForumFooterBtns onClick={addComment} />
      </footer>
    </div>
  );
}
