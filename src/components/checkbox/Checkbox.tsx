import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked((prevState) => !prevState);
  };

  return (
    <div className="px-6">
      <label htmlFor="checkbox" className="cursor-pointer relative select-none">
        <input
          type="checkbox"
          id="checkbox"
          className={`appearance-none h-6 w-6 border rounded-full select-none ${
            isChecked && 'bg-gradient-to-br from-gradientOne to-gradientTwo'
          }`}
          onChange={handleChange}
        />
        <FaCheck
          className={`text-xs absolute text-white left-1.5 -top-1.5 ${
            isChecked ? 'opacity-100' : 'opacity-0'
          } check-1 transition select-none`}
        />
      </label>
    </div>
  );
};

export default Checkbox;
