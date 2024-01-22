import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
interface Props {
  path: string;
  variant?: string;
  label?: string;
}

export default function LinkItem(props: Props) {
  return (
    <Link
      to={props.path}
      className={props.variant === 'blue' ? styles.link : `${styles.link_blue} ${styles.link}`}
    >
      {props.label}
    </Link>
  );
}
