import React, { useEffect, useState } from 'react';
import IconSun from '@assets/icon-sun.svg';
import IconMoon from '@assets/icon-moon.svg';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!isMounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <button className="cursor-pointer" type="button" onClick={() => setTheme('light')}>
          <IconSun />
        </button>
      );
    }
    return (
      <button className="cursor-pointer" type="button" onClick={() => setTheme('dark')}>
        <IconMoon />
      </button>
    );
  };
  return (
    <nav className="mt-11 text-lightTheme-veryLightGray px-6 flex justify-between items-center">
      <h1 className="text-3xl font-bold tracking-widest">TODO</h1>
      {renderThemeChanger()}
    </nav>
  );
};

export default Navbar;
