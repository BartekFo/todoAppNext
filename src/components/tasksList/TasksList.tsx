import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import TaskCard from '@components/taskCard/TaskCard';
import NavigationBar from '@components/navigationBar/NavigationBar';
import NavigationBarMobile from '@components/navigationBarMobile/NavigationBarMobile';
import { useTasks } from '@contextProviders/TaskContext';

const TasksList = () => {
  const {
    handleOnDragEnd,
    taskArr,
    deleteCompletedTasks,
    changeTaskStatus,
    deleteSingleTask,
    filterActiveTasks,
    filterCompletedTasks,
    filterAllTasks,
  } = useTasks();

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
              <NavigationBar
                taskArr={taskArr}
                deleteCompletedTasks={deleteCompletedTasks}
                filterAllTasks={filterAllTasks}
                filterActiveTasks={filterActiveTasks}
                filterCompletedTasks={filterCompletedTasks}
              />
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <NavigationBarMobile
        filterAllTasks={filterAllTasks}
        filterActiveTasks={filterActiveTasks}
        filterCompletedTasks={filterCompletedTasks}
      />
    </>
  );
};

export default TasksList;
