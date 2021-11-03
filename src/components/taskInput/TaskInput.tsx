import React, { useState } from 'react';
import Checkbox from '@components/checkbox/Checkbox';
import { useAuth } from '@contextProviders/AuthContext';

const TaskInput = () => {
  const [isCheckboxChecked] = useState(false);
  const authCtx = useAuth();

  return (
    <div
      className={`
        ${!authCtx.user && 'cursor-not-allowed'}
        flex items-center
        mt-6 mx-6 sm:mt-9 sm:mx-auto py-4
        max-w-screen-sm
        rounded-md
        bg-lightTheme-veryLightGray dark:bg-darkTheme-veryDarkDesaturated`}
    >
      <Checkbox isDisabled isChecked={isCheckboxChecked} />
      <input
        type="text"
        className={`
          ${!authCtx.user && 'cursor-not-allowed'}
          outline-none text-lg mt-1 w-full mr-3 bg-transparent select-none
          placeholder-opacity-20 placeholder-gray-600 placeholder-opacity-50
          dark:placeholder-opacity-100 dark:placeholder-gray-500`}
        placeholder={`${!authCtx.user ? 'Login to create a new todo...' : 'Create a new todo...'}`}
        disabled={!authCtx.user}
      />
    </div>
  );
};

export default TaskInput;
