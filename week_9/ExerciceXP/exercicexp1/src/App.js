import './App.css';
import React, { useContext } from 'react';
import ThemeContext from './context/ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-topbar">
          <div className="App-themeLabel">Current theme: {theme}</div>
          <ThemeSwitcher />
        </div>
      </header>
    </div>
  );
}

export default App;
