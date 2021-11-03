import React, { FC } from 'react';
import { TaskArray } from '@root/@types/tasksTypes';

const NavigationBar: FC<{ deleteCompletedTasks: () => void; taskArr: TaskArray }> = ({
  deleteCompletedTasks,
  taskArr,
}) => {
  return (
    <div
      className="flex items-center justify-between py-4 pl-6 pr-4
        text-lightTheme-blue-darkGrayish dark:text-darkTheme-darkGrayish
        bg-lightTheme-veryLightGray dark:bg-darkTheme-veryDarkDesaturated"
    >
      <p className="text-sm">{taskArr.length} items left</p>
      <div
        className="hidden sm:flex items-center justify-evenly
          w-1/2
         text-sm text-lightTheme-blue-darkGrayish font-bold dark:text-darkTheme-darkGrayish"
      >
        <p>All</p>
        <p>Active</p>
        <p>Completed</p>
      </div>
      <button type="button" className="text-sm" onClick={deleteCompletedTasks}>
        Clear Completed
      </button>
    </div>
  );
};

export default NavigationBar;
