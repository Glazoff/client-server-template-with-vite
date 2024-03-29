import React from 'react';
import { Stack, Typography, Button, Input, Avatar, Box } from '@mui/material';
import DefaultAvatarWolf from '../../assets/static/DefaultAvatar.png';
import { changeAvatarProfile } from '@/shared/api/apiProfile';
import { yandexResourcesUrl } from '@/shared/constants/apiConstants';
import PopupWrapper from '@/shared/ui/popupWrapper';
import { IUser } from '@/widgets/ProfileContentPage';

type PopupAvatarProps = {
  open: boolean;
  handleClose: () => void;
  profile: IUser;
  setProfile: React.Dispatch<React.SetStateAction<IUser>>;
};

export default function PopupChangeAvatar({
  open,
  handleClose,
  profile,
  setProfile,
}: PopupAvatarProps) {
  const [downloadImage, setDownloadImage] = React.useState<File | null>(null);

  function handlePhoto(evt: React.ChangeEvent<HTMLInputElement>) {
    evt.preventDefault();
    if (evt.target.files) {
      setDownloadImage(evt.target.files[0]);
    }
  }

  const submitPhoto = async () => {
    setProfile(await changeAvatarProfile(downloadImage));
    handleClose();
  };

  return (
    <>
      <PopupWrapper open={open} handleClose={handleClose}>
        <Stack
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'space-between'}
          alignItems={'center'}
          gap="16px"
          sx={{ width: '600px', height: '400px' }}
        >
          <Stack
            component={'form'}
            display={'flex'}
            flexDirection={'column'}
            gap={'20px'}
            alignItems={'center'}
            justifyContent={'space-between'}
            sx={{ height: '100%' }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <Avatar
                sx={{ width: '150px', height: '150px' }}
                alt="аватар"
                src={profile.avatar ? `${yandexResourcesUrl}/${profile.avatar}` : DefaultAvatarWolf}
              />
            </Box>

            <Typography variant="h2">Загрузите свой аватар</Typography>
            <Input id="avatar" type="file" onChange={(event: any) => handlePhoto(event)} />

            <Stack display="flex" flexDirection={'row'} gap={'20px'} sx={{ width: '100%' }}>
              <Button sx={{ width: '100%' }} variant="default" onClick={() => handleClose()}>
                Назад
              </Button>
              <Button sx={{ width: '100%' }} variant="orange" onClick={submitPhoto}>
                Сменить
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </PopupWrapper>
    </>
  );
}
