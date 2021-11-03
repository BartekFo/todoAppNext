import React, { ChangeEvent, FC, useState } from 'react';
import Checkbox from '@components/checkbox/Checkbox';
import { VscChromeClose } from 'react-icons/vsc';
import { Draggable, resetServerContext } from 'react-beautiful-dnd';
import { TaskCardType } from '@root/@types/tasksTypes';

const TaskCard: FC<TaskCardType> = ({
  task: { id, name },
  index,
  changeTaskStatus,
  deleteSingleTask,
}) => {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsCheckboxChecked((prevState) => !prevState);
    changeTaskStatus(event.target.checked, id);
  };

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="flex items-center justify-between py-4
      border-b border-lightTheme-blue-lightGrayish  dark:border-darkTheme-veryDarkGrayish
      bg-lightTheme-veryLightGray dark:bg-darkTheme-veryDarkDesaturated"
        >
          {resetServerContext()}
          <Checkbox isChecked={isCheckboxChecked} handleChange={handleCheckboxChange} />
          <p className="prose text-lightTheme-blue-darkGrayish text-lg w-full ">{name}</p>
          <button type="button" className="cursor-pointer" onClick={() => deleteSingleTask(id)}>
            <VscChromeClose
              className="text-2xl opacity-40 mr-4 ml-2
        text-lightTheme-blue-veryDarkGrayish
        dark:text-darkTheme-darkerGrayish dark:bg-opacity-100"
            />
          </button>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
