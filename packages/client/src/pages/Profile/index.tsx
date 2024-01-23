import { Box } from '@mui/material';
import ProfileContentPage from '@/widgets/ProfileContentPage';

export default function Profile() {
  return (
    <Box component={'section'} sx={{ display: 'flex', maxWidth: '1920px', height: '100vh' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <Box
          sx={{
            maxWidth: '800px',
            width: '100%',
            height: '520px',
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
  );
}
