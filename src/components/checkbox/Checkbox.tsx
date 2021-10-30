import React, { FC, useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const Checkbox: FC<{ isDisabled?: boolean }> = ({ isDisabled = false }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked((prevState) => !prevState);
  };

  return (
    <div
      className={`pl-6 pr-4 flex justify-center items-center ${!isDisabled && 'cursor-pointer'}`}
    >
      <label htmlFor="checkbox" className="relative select-none flex justify-center items-center">
        <input
          type="checkbox"
          id="checkbox"
          className={`appearance-none h-6 w-6 border border-lightTheme-blue-lightGrayish  rounded-full select-none 
           ${!isDisabled && 'cursor-pointer'} 
           ${isChecked && 'bg-gradient-to-br from-gradientOne to-gradientTwo'} 
           dark:border-darkTheme-veryDarkGrayish`}
          onChange={handleChange}
          disabled={isDisabled}
        />
        <FaCheck
          className={`text-xs absolute text-white left-1.5 top-1.5 pointer-events-none ${
            isChecked ? 'opacity-100' : 'opacity-0'
          } check-1 transition select-none`}
        />
      </label>
    </div>
  );
};

export default Checkbox;
