import { ThemeContext } from './ThemeContext';
import React, { useState, FC } from 'react';
import { themeData } from './themeData';

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState(themeData.lightColor);

  const changeTheme = () => {
    setTheme(theme == themeData.lightColor ? themeData.purpleColor : themeData.lightColor);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};