import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';
import { NavbarContext } from '../contexts/NavbarContext';

const Navbar = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const { navbar } = useContext(NavbarContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context API</h1>
      <div onClick={toggleAuth}>
        {isAuthenticated ? 'Logged In' : 'Logged Out'}
      </div>
      <ul>
        {navbar.map(n => (
          <li key={n.id}>{n.title}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
