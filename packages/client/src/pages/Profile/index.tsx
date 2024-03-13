import { Box, styled } from '@mui/material';
import ProfileContentPage from '@/widgets/ProfileContentPage';

const BackgroundDiv = styled('section')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function Profile() {
  return (
    <BackgroundDiv>
      <Box component={'section'} sx={{ display: 'flex', maxWidth: '1920px', height: '100vh' }}>
        <Box
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}
        >
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
            <ProfileContentPage />
          </Box>
        </Box>
      </Box>
    </BackgroundDiv>
  );
}
