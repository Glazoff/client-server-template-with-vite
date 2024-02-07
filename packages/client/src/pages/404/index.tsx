import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import path from '@/App/Router/constants';

export default function NotFoundPage() {
  const navigator = useNavigate();

  return (
    <Box
      component={'section'}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '1920px',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          width: '400px',
          borderRadius: '12px',
          border: '3px solid #00A3FF',
          height: '200px',
        }}
      >
        <h1>Ошибка 404</h1>
        <Button type="submit" variant="orange" onClick={() => navigator(path.Main)}>
          На главную страницу
        </Button>
      </Box>
    </Box>
  );
}
