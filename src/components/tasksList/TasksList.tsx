import React, { useState } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';

import TaskCard from '@components/taskCard/TaskCard';

const data = [
  {
    id: '0',
    name: 'Visit grandma',
  },
  {
    id: '1',
    name: 'Buy milk',
  },
  {
    id: '2',
    name: 'Do homework',
  },
  {
    id: '3',
    name: 'Clean house',
  },
];

const TasksList = () => {
  const [taskArr, setTasksArr] = useState(data);

  const handleOnDragEnd = (result: DropResult) => {
    const items = Array.from(taskArr);
    const [reorderedItems] = items.splice(result.source.index, 1);
    if (result.destination) items.splice(result.destination.index, 0, reorderedItems);

    setTasksArr(items);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="tasks">
        {(provided) => (
          <ul
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="mt-4 mx-6 rounded-md overflow-hidden shadow-lg max-w-screen-sm sm:mx-auto"
          >
            {taskArr.map((task, index) => (
              <TaskCard task={task} key={task.id} index={index} />
            ))}
            {provided.placeholder}
            <div
              className="flex items-center justify-between py-4 pl-6 pr-4
        text-lightTheme-blue-darkGrayish dark:text-darkTheme-darkGrayish
        bg-lightTheme-veryLightGray dark:bg-darkTheme-veryDarkDesaturated"
            >
              <p className="text-sm">5 items left</p>
              <div
                className="hidden sm:flex items-center justify-evenly
          w-1/2
         text-sm text-lightTheme-blue-darkGrayish font-bold dark:text-darkTheme-darkGrayish"
              >
                <p>All</p>
                <p>Active</p>
                <p>Completed</p>
              </div>
              <button type="button" className="text-sm">
                Clear Completed
              </button>
            </div>
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TasksList;
