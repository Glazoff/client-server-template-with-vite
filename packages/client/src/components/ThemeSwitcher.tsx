import * as React from 'react';
import { useDispatch } from 'react-redux';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import { updateTheme } from '@/store/theme/themeSlice.js';

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleTheme: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  React.useEffect(() => {
    dispatch(updateTheme(mode));
  }, [mode]);

  return (
    <IconButton onClick={colorMode.toggleTheme} color="inherit">
      {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

export default ThemeSwitcher;
