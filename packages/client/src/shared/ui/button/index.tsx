import styles from './style.module.scss';

interface Props {
  variant?: string;
  label: string;
  class?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'reset' | 'submit';
}

export default function Button(props: Props) {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled ? props.disabled : false}
      type={props.type && 'button'}
      className={
        props.class +
        ' ' +
        (props.variant === 'blue' ? `${styles.button_blue} ${styles.button}` : styles.button)
      }
    >
      {props.label}
    </button>
  );
}
