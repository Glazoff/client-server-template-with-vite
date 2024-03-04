import { useState } from 'react';
import { toggleFullScreen } from '@/shared/helperFunction/toggleFullScreen';

const FullScreen = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleClick = () => {
    const isFullScreen = toggleFullScreen();
    setIsFullScreen(isFullScreen);
  };

  return (
    <button onClick={handleClick}>
      {isFullScreen ? 'выход из полноэкранного режима' : 'полноэкраный режим'}
    </button>
  );
};

export default FullScreen;
