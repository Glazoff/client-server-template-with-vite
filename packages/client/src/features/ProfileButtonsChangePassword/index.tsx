import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import path from '@/App/Router/constants';
import { FormProfileType } from '@/widgets/ProfileContentPage/FormMainContent';

export default function ProfileButtonsChangePassword() {
  const navigate = useNavigate();
  const {
    trigger,
    formState: { isValid },
  } = useFormContext<FormProfileType>();
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: '35px', justifyContent: 'center' }}>
        {' '}
        <Button
          variant="default"
          onClick={() => {
            navigate(`${path.Profile}`);
          }}
        >
          Назад{' '}
        </Button>
        <Button
          type="submit"
          disabled={!isValid}
          variant="orange"
          onClick={async () => {
            const isValid = await trigger();
            console.log(isValid);
            if (isValid) {
              console.log('valid');
            }
          }}
        >
          Сменить пароль
        </Button>
      </Box>
    </>
  );
}
