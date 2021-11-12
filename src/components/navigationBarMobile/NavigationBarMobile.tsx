import React, { FC } from 'react';
import FilteringTasksButtons from '@components/filteringTasksButtons/FilteringTasksButtons';

const NavigationBarMobile: FC<{
  filterActiveTasks: () => void;
  filterCompletedTasks: () => void;
  filterAllTasks: () => void;
}> = ({ filterActiveTasks, filterCompletedTasks, filterAllTasks }) => (
  <div
    className="flex sm:hidden items-center text-sm justify-evenly mt-4 mx-6 sm:mx-auto py-4 px-8 rounded-md shadow-lg max-w-screen-sm
        bg-lightTheme-veryLightGray dark:bg-darkTheme-veryDarkDesaturated
      "
  >
    <FilteringTasksButtons
      filterActiveTasks={filterActiveTasks}
      filterCompletedTasks={filterCompletedTasks}
      filterAllTasks={filterAllTasks}
    />
  </div>
);

export default NavigationBarMobile;
