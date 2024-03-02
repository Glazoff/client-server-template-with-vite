import { useState } from 'react';

const FullScreen = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleClick = () => {
    const isFullScreen = toggleFullScreen();
    setIsFullScreen(isFullScreen);
  };

  const toggleFullScreen = () => {
    const elem = document.documentElement;
    if (
      !document.fullscreenElement &&
      !document.mozFullScreenElement &&
      !document.webkitFullscreenElement &&
      !document.msFullscreenElement
    ) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
      return true;
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
      return false;
    }
  };

  return (
    <button id="buttonFullScreen" onClick={handleClick}>
      {isFullScreen ? 'выход из полноэкранного режима' : 'полноэкраный режим'}
    </button>
  );
};

export default FullScreen;
