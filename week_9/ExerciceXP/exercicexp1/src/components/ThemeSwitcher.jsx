import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="ThemeSwitcher" type="button" onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'dark' : 'light'} mode
    </button>
  );
}

