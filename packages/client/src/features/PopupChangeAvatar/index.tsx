import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { Stack, Typography, Button, Input, Avatar, Box } from '@mui/material';
import DefaultAvatarWolf from '../../assets/static/DefaultAvatar.png';
import { baseUrl } from '@/shared/loadersApi/loaderProfile';
import PopupWrapper from '@/shared/ui/popupWrapper';

type PopupAvatarProps = {
  open: boolean;
  handleClose: () => void;
  handleOpen?: () => void;
};

export default function PopupChangeAvatar({ open, handleClose }: PopupAvatarProps) {
  const navigate = useNavigate();
  const profile: any = useLoaderData();
  console.log('PROFILE', profile);
  const [downloadImage, setDownloadImage] = React.useState<File | null>(null);

  function handlePhoto(evt: React.ChangeEvent<HTMLInputElement>) {
    evt.preventDefault();
    if (evt.target.files) {
      setDownloadImage(evt.target.files[0]);
    }
  }

  const submitPhoto = async () => {
    if (downloadImage) {
      const formData = new FormData();
      formData.append('file', downloadImage);
      console.log(downloadImage);

      try {
        const request = await fetch(`${baseUrl}/user/profile/avatar`, {
          method: 'PUT',
          credentials: 'include',
          body: formData,
        });
        const data = await request.json();

        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <PopupWrapper open={open} handleClose={handleClose}>
        <Stack
          display={'flex'}
          flexDirection={'column'}
          justifyContent="space-between"
          alignItems={'center'}
          gap="16px"
          sx={{ width: '600px', height: '400px' }}
        >
          <Stack
            component="form"
            // onSubmit={(event) => submitPhoto(event)}
            display={'flex'}
            flexDirection={'column'}
            gap={'20px'}
            alignItems={'center'}
            justifyContent="space-between"
            sx={{ height: '100%' }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <Avatar
                sx={{ width: '150px', height: '150px' }}
                alt="аватар"
                src={
                  profile.avatar
                    ? `https://ya-praktikum.tech/api/v2/resources/${profile.avatar}`
                    : DefaultAvatarWolf
                }
              />
            </Box>

            <Typography variant="h6">Загрузите свой аватар</Typography>
            {/* <input
              id="file"
              type="file"
              onChange={(event) => handlePhoto(event)}
              accept="image/png, image/gif, image/jpeg"
            /> */}
            <Input type="file" onChange={(event: any) => handlePhoto(event)} />

            <Stack display="flex" flexDirection={'row'} gap={'20px'} sx={{ width: '100%' }}>
              <Button sx={{ width: '100%' }} variant="default" onClick={() => navigate(-1)}>
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
