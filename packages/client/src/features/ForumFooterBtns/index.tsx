import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import path from '../../App/Router/constants';
import Button from '../../shared/button';

interface Props {
  onClick?: () => void;
}

export default function ForumFooterBtns(props: Props) {
  const navigate = useNavigate();

  // не совсем понял зачем выносить, вроде бы читаемости не мешает, кода меньше не стало
  const navigation = () => {
    navigate(`${path.Forum}`);
  }

  return (
    <div className={styles.forum__btns}>
      <Button
        variant="blue"
        class={styles.forum__link}
        label="На главную форума"
        onClick={navigation}
      />
      <Button class={styles.forum__btn} label="Отправить" onClick={props.onClick} />
    </div>
  );
}
