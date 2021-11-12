import React, { FC } from 'react';
import { TaskArray } from '@root/@types/tasksTypes';
import FilteringTasksButtons from '@components/filteringTasksButtons/FilteringTasksButtons';

const NavigationBar: FC<{
  deleteCompletedTasks: () => void;
  taskArr: TaskArray;
  filterActiveTasks: () => void;
  filterCompletedTasks: () => void;
  filterAllTasks: () => void;
}> = ({
  deleteCompletedTasks,
  taskArr,
  filterCompletedTasks,
  filterAllTasks,
  filterActiveTasks,
}) => (
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
      <FilteringTasksButtons
        filterActiveTasks={filterActiveTasks}
        filterCompletedTasks={filterCompletedTasks}
        filterAllTasks={filterAllTasks}
      />
    </div>
    <button type="button" className="text-sm" onClick={deleteCompletedTasks}>
      Clear Completed
    </button>
  </div>
);

export default NavigationBar;
