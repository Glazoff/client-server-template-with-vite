import { useFormContext } from 'react-hook-form';
import { Box } from '@mui/material';
import Button from '@/shared/button';
import { FormProfileType } from '@/widgets/ProfileContentPage';

export default function ProfileButtonsForm() {
  const {
    trigger,
    formState: { isValid },
  } = useFormContext<FormProfileType>();
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: '35px', justifyContent: 'center' }}>
        {' '}
        <Button label="Назад" type="button" />
        <Button
          disabled={!isValid}
          label="Редактировать"
          variant="blue"
          onClick={async () => {
            const isValid = await trigger();
            console.log(isValid);
            if (isValid) {
              console.log('valid');
            }
          }}
        />
      </Box>
    </>
  );
}
