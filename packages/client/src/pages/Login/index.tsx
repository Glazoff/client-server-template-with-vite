import { Box, TextField, Button, Typography } from '@mui/material';

export default function Login() {
  return (
    <div className="root">
      <form className="form" style={{ marginTop: 100 }}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          maxWidth={400}
          margin="auto"
          padding={5}
          borderRadius={15}
          border={'6px solid #00A3FF'}
        >
          <Typography>Авторизация</Typography>
          <TextField
            fullWidth={true}
            margin="normal"
            label="Логин"
            variant="outlined"
            placeholder="Введите ваш логин"
          />
          <TextField
            type="password"
            fullWidth={true}
            margin="normal"
            label="Пароль"
            variant="outlined"
            placeholder="Введите ваш пароль"
          />
          <Button sx={{ marginTop: 2, marginBottom: 2, width: '50%' }} variant="contained">
            Вход
          </Button>
          <Button sx={{ marginTop: 2, marginBottom: 2, width: '50%' }} variant="orange">
            Регистрация
          </Button>
        </Box>
      </form>
    </div>
  );
}
