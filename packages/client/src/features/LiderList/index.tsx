import styles from './styles.module.scss';
import LiderItem from '@/features/LiderItem';

type Lider = {
  id: number;
  position: number;
  avatar: string;
  nikname: string;
  score: number;
};

type Liders = Lider[];

const mockLiders: Liders = [
  {
    id: 1,
    position: 1,
    avatar: '/',
    nikname: 'Bob',
    score: 233,
  },
  {
    id: 2,
    position: 2,
    avatar: '/',
    nikname: 'Mike',
    score: 2331,
  },
  {
    id: 1,
    position: 1,
    avatar: '/',
    nikname: 'Bob',
    score: 233,
  },
  {
    id: 2,
    position: 2,
    avatar: '/',
    nikname: 'Mike',
    score: 2331,
  },
  {
    id: 1,
    position: 1,
    avatar: '/',
    nikname: 'Bob',
    score: 233,
  },
  {
    id: 2,
    position: 2,
    avatar: '/',
    nikname: 'Mike',
    score: 2331,
  },
  {
    id: 1,
    position: 1,
    avatar: '/',
    nikname: 'Bob',
    score: 233,
  },
  {
    id: 2,
    position: 2,
    avatar: '/',
    nikname: 'Mike',
    score: 2331,
  },
  {
    id: 1,
    position: 1,
    avatar: '/',
    nikname: 'Bob',
    score: 233,
  },
  {
    id: 2,
    position: 2,
    avatar: '/',
    nikname: 'Mike',
    score: 2331,
  },
];

export default function LiderList() {
  return <div className={styles.lider_list}>{mockLiders.map((item) => LiderItem(item))}</div>;
}
