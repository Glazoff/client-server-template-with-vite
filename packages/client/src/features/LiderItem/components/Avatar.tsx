import { Avatar } from '@mui/material';

type AvatarLiderProps = {
  src: string;
};

export default function AvatarLider({ src }: AvatarLiderProps) {
  return <Avatar sx={{ width: '60px', height: '60px' }} src={src} />;
}
