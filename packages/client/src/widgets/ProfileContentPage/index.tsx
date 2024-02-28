import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import { Box, Avatar } from '@mui/material';
import DefaultAvatarWolf from '../../assets/static/DefaultAvatar.png';
import PopupChangeAvatar from '@/features/PopupChangeAvatar';
import { useAppDispatch } from '@/store';
import { updateUser } from '@/store/user/userSlice';

export interface IUser {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  phone: string;
  login: string;
  avatar: string;
  email: string;
}

export default function ProfileContentPage() {
  const dispatch = useAppDispatch();
  const profileData: any = useLoaderData();
  const [openPopupAvatar, setOpenPopupAvatar] = React.useState(false);
  const [profile, setProfile] = React.useState<IUser>(profileData);

  React.useEffect(() => {
    dispatch(updateUser(profile));
  }, [dispatch]);
  const handleOpen = () => {
    setOpenPopupAvatar(true);
  };

  const handleClose = () => {
    setOpenPopupAvatar(false);
  };
  return (
    <>
      <PopupChangeAvatar
        open={openPopupAvatar}
        profile={profile}
        setProfile={setProfile}
        handleClose={handleClose}
      />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          jusctifyContent: 'center',
          gap: '30px',
          alignItems: 'center',
        }}
      >
        <Avatar
          sx={{ width: '120px', height: '120px' }}
          alt="аватар"
          src={
            profile.avatar
              ? `https://ya-praktikum.tech/api/v2/resources/${profile.avatar}`
              : DefaultAvatarWolf
          }
          onClick={() => handleOpen()}
        />
        <Outlet context={{ profileData: profileData }} />
      </Box>
    </>
  );
}
