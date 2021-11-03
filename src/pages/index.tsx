import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import BackgroundImage from '@components/backgroundImage/BackgroundImage';
import Navbar from '@components/navbar/Navbar';
import TaskInput from '@components/taskInput/TaskInput';
import TasksList from '@components/tasksList/TasksList';
import NavigationBarMobile from '@components/navigationBarMobile/NavigationBarMobile';
import { useAuth } from '@contextProviders/AuthContext';

const HomePage = () => {
  const router = useRouter();
  const authCtx = useAuth();

  return (
    <>
      <BackgroundImage />
      <Navbar />
      <TaskInput />
      <TasksList />
      <p className="text-center mt-12 text-lightTheme-blue-darkGrayish dark:text-darkTheme-darkerGrayish">
        Drag and drop to reorder list
      </p>
    </>
  );
};

export default HomePage;
