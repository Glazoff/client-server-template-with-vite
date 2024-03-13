import { Stack, Box, TextField, Button, Typography, styled } from '@mui/material';
import BUTTONS from '@/shared/buttonDict';

const BackgroundDiv = styled('section')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function Registration() {
  return (
    <BackgroundDiv>
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
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10px',
              }}
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
    </BackgroundDiv>
  );
}
