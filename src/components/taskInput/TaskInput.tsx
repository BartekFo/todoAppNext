import React, { ChangeEvent, useState } from 'react';
import Checkbox from '@components/checkbox/Checkbox';
import { useAuth } from '@contextProviders/AuthContext';
import { useId } from 'react-id-generator';
import { useTasks } from '@contextProviders/TaskContext';

const TaskInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [isCheckboxChecked] = useState(false);
  const authCtx = useAuth();
  const { addTask } = useTasks();
  const [id1] = useId();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTask(inputValue);
    setInputValue('');
  };

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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className={`
          ${!authCtx.user && 'cursor-not-allowed'}
          outline-none text-lg mt-1 w-full mr-3 bg-transparent select-none
          placeholder-opacity-20 placeholder-gray-600 placeholder-opacity-50
          dark:placeholder-opacity-100 dark:placeholder-gray-500`}
          placeholder={`${
            !authCtx.user ? 'Login to create a new todo...' : 'Create a new todo...'
          }`}
          disabled={!authCtx.user}
          value={inputValue}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};

export default TaskInput;
