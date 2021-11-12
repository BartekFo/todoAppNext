import React, { FC, useState } from 'react';

const FilteringTasksButtons: FC<{
  filterActiveTasks: () => void;
  filterCompletedTasks: () => void;
  filterAllTasks: () => void;
}> = ({ filterCompletedTasks, filterActiveTasks, filterAllTasks }) => {
  const [activeBtn, setActiveBtn] = useState('all');

  const showAllTasks = () => {
    setActiveBtn('all');
    filterAllTasks();
  };

  const showActiveTasks = () => {
    setActiveBtn('active');
    filterActiveTasks();
  };

  const showCompletedTasks = () => {
    setActiveBtn('completed');
    filterCompletedTasks();
  };

  return (
    <>
      <button
        type="button"
        className={`${
          activeBtn === 'all'
            ? 'text-primary'
            : 'text-lightTheme-blue-darkGrayish dark:text-darkTheme-darkerGrayish'
        } font-bold`}
        onClick={showAllTasks}
      >
        All
      </button>
      <button
        type="button"
        className={`${
          activeBtn === 'active'
            ? 'text-primary'
            : 'text-lightTheme-blue-darkGrayish dark:text-darkTheme-darkerGrayish'
        } font-bold`}
        onClick={showActiveTasks}
      >
        Active
      </button>
      <button
        type="button"
        className={`${
          activeBtn === 'completed'
            ? 'text-primary'
            : 'text-lightTheme-blue-darkGrayish dark:text-darkTheme-darkerGrayish'
        } font-bold`}
        onClick={showCompletedTasks}
      >
        Completed
      </button>
    </>
  );
};

export default FilteringTasksButtons;
