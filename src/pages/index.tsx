import React from 'react';

import BackgroundImage from '@components/backgroundImage/BackgroundImage';
import Navbar from '@components/navbar/Navbar';
import TaskInput from '@components/taskInput/TaskInput';
import TasksList from '@components/tasksList/TasksList';

const HomePage = () => (
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

export default HomePage;
