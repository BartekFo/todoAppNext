import React from 'react';
import Checkbox from '@components/checkbox/Checkbox';

const TaskInput = () => {
  return (
    <div
      className="flex items-center
      mt-6 mx-6 sm:mt-9 sm:mx-auto py-4
      max-w-screen-sm
      rounded-md
      bg-lightTheme-veryLightGray dark:bg-darkTheme-veryDarkDesaturated"
    >
      <Checkbox isDisabled />
      <input
        type="text"
        className="outline-none text-lg mt-1 w-full mr-3 bg-transparent
        placeholder-opacity-20 placeholder-gray-600 placeholder-opacity-50
        dark:placeholder-opacity-100 dark:placeholder-gray-500"
        placeholder="Create a new todo..."
      />
    </div>
  );
};

export default TaskInput;
