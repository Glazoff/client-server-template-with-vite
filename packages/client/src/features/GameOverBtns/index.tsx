import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import path from '@/App/Router/constants';
import Button from '@/shared/ui/button';

export default function GameOverBtns() {
  const navigate = useNavigate();

  return (
    <div className={styles.over__btns}>
      <Button
        class={styles.over__btn}
        label="Выйти в главное меню"
        variant="blue"
        onClick={() => {
          navigate(`${path.Main}`);
        }}
      />
      <Button
        class={styles.over__btn}
        label="Сыграть еще раз"
        onClick={() => {
          navigate(`${path.Game}`);
        }}
      />
    </div>
  );
}
