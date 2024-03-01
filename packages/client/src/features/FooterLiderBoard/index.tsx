import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export default function FooterLiderBoard() {
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
