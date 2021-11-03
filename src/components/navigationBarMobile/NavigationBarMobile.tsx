import React from 'react';

const NavigationBarMobile = () => {
  return (
    <div
      className="flex sm:hidden items-center text-sm justify-evenly mt-4 mx-6 sm:mx-auto py-4 px-8 rounded-md shadow-lg max-w-screen-sm
        text-lightTheme-blue-darkGrayish font-bold dark:text-darkTheme-darkGrayish
        bg-lightTheme-veryLightGray dark:bg-darkTheme-veryDarkDesaturated
      "
    >
      <p>All</p>
      <p>Active</p>
      <p>Completed</p>
    </div>
  );
};

export default NavigationBarMobile;
