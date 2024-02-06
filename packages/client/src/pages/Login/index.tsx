import { Stack, Box, TextField, Button, Typography } from '@mui/material';
import BUTTONS from '@/shared/buttonDict';

const Login = () => {
  return (
    <Box component={'section'} sx={{ display: 'flex', height: '100vh' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <form>
          <Box
            sx={{
              borderRadius: '15px',
              border: '6px solid #00A3FF',
              width: '400px',
              height: '300px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '10px',
            }}
          >
            <Typography>Авторизация</Typography>
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
              label="Пароль"
              variant="outlined"
              placeholder="Введите ваш пароль"
            />
            <Stack
              display="flex"
              flexDirection={'row'}
              gap={'10px'}
              width={'100%'}
              marginBottom={'10px'}
              marginTop={'10px'}
            >
              <Button sx={{ width: '50%' }} variant="default">
                {BUTTONS.enter.ru.text}
              </Button>
              <Button sx={{ width: '50%' }} variant="orange">
                {BUTTONS.register.ru.text}
              </Button>
            </Stack>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
