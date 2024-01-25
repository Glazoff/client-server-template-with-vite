import { Button } from '@mui/material';

export default function Login() {
  return (
    <h1>
      Страница авторизации
      <Button variant={'default'}>default</Button>
      <Button variant="orange">orange</Button>
      <Button variant="hollow">hollow</Button>
      <Button variant="link">link</Button>
    </h1>
  );
}
