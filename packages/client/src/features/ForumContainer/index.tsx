import { useNavigate } from 'react-router-dom';
import styles from './style.module.scss';
import path from '../../App/Router/constants';
import Button from '../../shared/button';
import ForumCards from '../ForumCards';

export default function ForumContainer() {
  const navigate = useNavigate();

  return (
    <main className={styles.forum__container}>
      <ForumCards />
      <div className={styles.forum__buttons}>
        <Button
          class={styles.forum__btn}
          label="Создать тему для обсуждения"
          onClick={() => {
            navigate(`${path.AddTopicPage}`);
          }}
        />
        <Button
          class={styles.forum__btn}
          variant="blue"
          label="Выйти в главное меню"
          onClick={() => {
            navigate(`${path.Main}`);
          }}
        />
      </div>
    </main>
  );
}
