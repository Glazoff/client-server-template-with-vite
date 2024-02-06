import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import styles from './style.module.scss';
import styleLidert from './styleLider.module.scss';
import styleLiderList from './styleLiderList.module.scss';

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

function HeaderLiderBoard() {
  return (
    <div>
      <h1>ТОП 10</h1>
    </div>
  );
}

function FooterLiderBoard() {
  const navigator = useNavigate();

  return (
    <Button
      variant="default"
      onClick={() => {
        navigator(-1);
      }}
    >
      Назад
    </Button>
  );
}

function LiderItem(props: Lider) {
  const { id, position, avatar, nikname, score } = props;

  return <div className={styleLidert.lider} />;
}

function LiderList() {
  return (
    <div className={styleLiderList.lider_list}>{mockLiders.map((item) => LiderItem(item))}</div>
  );
}

export default function LiderBoard() {
  return (
    <div className={styles.lider_board}>
      <HeaderLiderBoard />
      <LiderList />
      <FooterLiderBoard />
    </div>
  );
}
