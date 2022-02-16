import { ThemeContext } from './ThemeContext';
import React, { useState, FC } from 'react';
import { themeData } from './themeData';

export const ThemeProvider: FC = ({ children }) => {
  let themeLocalStorage = localStorage.getItem('theme');
  if (themeLocalStorage == null || (themeLocalStorage != themeData.lightColor && themeLocalStorage != themeData.purpleColor))
    themeLocalStorage = themeData.lightColor;

  const [theme, setTheme] = useState(themeLocalStorage);

  const changeTheme = () => {
    let newTheme = theme == themeData.lightColor ? themeData.purpleColor : themeData.lightColor;
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
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