import React from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';

import TaskCard from '@components/taskCard/TaskCard';
import NavigationBar from '@components/navigationBar/NavigationBar';
import NavigationBarMobile from '@components/navigationBarMobile/NavigationBarMobile';
import useTasks from '@hooks/useTasks';

const TasksList = () => {
  const { setTasksArr, taskArr, deleteCompletedTasks, changeTaskStatus, deleteSingleTask } =
    useTasks();

  const handleOnDragEnd = (result: DropResult) => {
    const items = Array.from(taskArr);
    const [reorderedItems] = items.splice(result.source.index, 1);
    if (result.destination) items.splice(result.destination.index, 0, reorderedItems);

    setTasksArr(items);
  };

  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <ul
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="mt-4 mx-6 rounded-md overflow-hidden shadow-lg max-w-screen-sm sm:mx-auto"
            >
              {taskArr.map((task, index) => (
                <TaskCard
                  task={task}
                  key={task.id}
                  index={index}
                  changeTaskStatus={changeTaskStatus}
                  deleteSingleTask={deleteSingleTask}
                />
              ))}
              {provided.placeholder}
              <NavigationBar taskArr={taskArr} deleteCompletedTasks={deleteCompletedTasks} />
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <NavigationBarMobile />
    </>
  );
};

export default TasksList;
