import { Stack, Box, TextField, Button, Typography } from '@mui/material';
import { BUTTONS } from '../../shared/buttonsDict.ts';

export default function Registration() {
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
          <Typography>Регистрация</Typography>
          <TextField
            name="first_name"
            fullWidth={true}
            margin="normal"
            label="Имя"
            variant="outlined"
            placeholder="Введите ваше имя"
          />
          <TextField
            name="second_name"
            fullWidth={true}
            margin="normal"
            label="Фамилия"
            variant="outlined"
            placeholder="Введите вашу фамилию"
          />
          <TextField
            name="email"
            fullWidth={true}
            margin="normal"
            label="Email"
            variant="outlined"
            placeholder="Введите ваш email"
          />
          <TextField
            name="phone"
            fullWidth={true}
            margin="normal"
            label="Телефон"
            variant="outlined"
            placeholder="Введите ваш телефон"
          />
          <TextField
            name="login"
            fullWidth={true}
            margin="normal"
            label="Логин"
            variant="outlined"
            placeholder="Введите ваш логин"
          />
          <TextField
            name="password"
            type="password"
            fullWidth={true}
            margin="normal"
            label="Password"
            variant="outlined"
            placeholder="Введите ваш пароль"
          />
          <Stack display="flex" flexDirection={'row'} gap={'20px'} sx={{ width: '100%' }}>
            <Button sx={{ marginTop: 2, marginBottom: 2, width: '50%' }} variant="contained">
              {BUTTONS.enter.ru.text}
            </Button>
            <Button sx={{ marginTop: 2, marginBottom: 2, width: '50%' }} variant="orange">
              {BUTTONS.register.ru.text}
            </Button>
          </Stack>
        </Box>
      </form>
    </div>
  );
}
