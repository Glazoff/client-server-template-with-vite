import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import path from '@/App/Router/constants';
import { FormProfileType } from '@/widgets/ProfileContentPage/FormMainContent';

export default function ProfileButtonsForm() {
  const navigate = useNavigate();
  const {
    trigger,
    formState: { isValid },
  } = useFormContext<FormProfileType>();
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: '35px', justifyContent: 'center' }}>
        <Button
          variant="default"
          onClick={() => {
            navigate(`${path.Main}`);
          }}
        >
          Назад
        </Button>
        <Button
          disabled={!isValid}
          type="submit"
          variant="orange"
          onClick={async () => {
            const isValid = await trigger();
            console.log(isValid);
            if (isValid) {
              console.log('valid');
            }
          }}
        >
          Редактировать
        </Button>
        <Button
          variant="orange"
          onClick={() => {
            navigate(`${path.ProfileChangePassword}`);
          }}
        >
          Сменить пароль
        </Button>
      </Box>
    </>
  );
}
