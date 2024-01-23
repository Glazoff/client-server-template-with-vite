import { Outlet, useLoaderData } from 'react-router-dom';
import { Box } from '@mui/material';
import React from 'react';
import ProfileContentPage from '@/widgets/ProfileContentPage';

export default function Profile() {
  const profile = useLoaderData();

  return (
    <Box component={'section'} sx={{ display: 'flex', maxWidth: '1920px', height: '100vh' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <Box
          sx={{
            maxWidth: '850px',
            width: '100%',
            height: '620px',
            borderRadius: '12px',
            border: '3px solid #00A3FF',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* <Outlet context={{ profileData: profile }} /> */}

          <ProfileContentPage />
        </Box>
      </Box>
    </Box>
  );
}
