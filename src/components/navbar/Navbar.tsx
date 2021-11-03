import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FaGoogle } from 'react-icons/fa';

import IconSun from '@assets/icon-sun.svg';
import IconMoon from '@assets/icon-moon.svg';
import { useAuth } from '@contextProviders/AuthContext';

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const authCtx = useAuth();

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

  const handleGoogleAuthClick = () => {
    if (authCtx.user) {
      authCtx.logout();
    } else {
      authCtx.login();
    }
  };

  return (
    <nav
      className="mt-11 mx-auto sm:mt-16 px-6 sm:px-0
      flex justify-between items-center
      text-lightTheme-veryLightGray
      max-w-screen-sm"
    >
      <h1 className="text-3xl font-bold tracking-widest">TODO</h1>
      <button
        type="button"
        onClick={handleGoogleAuthClick}
        className="py-3 px-6 rounded-md shadow-md
          flex items-center
          text-lightTheme-blue-veryDarkGrayish dark:text-darkTheme-darkGrayish
          bg-lightTheme-veryLightGray dark:bg-darkTheme-veryDarkDesaturated
        "
      >
        <FaGoogle className="mr-3" />
        {!authCtx.user ? (
          <p className="mt-0.5">Login to use TODO</p>
        ) : (
          <p className="mt-0.5">Logout</p>
        )}
      </button>
      {renderThemeChanger()}
    </nav>
  );
};

export default Navbar;
