import { Box, Button } from '@mui/material';

export default function ErrorPage() {
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
        <h1>Ошибка 500</h1>
        <Button type="submit" variant="orange" onClick={() => (window.location.href = '/')}>
          На главную страницу
        </Button>
      </Box>
    </Box>
  );
}
