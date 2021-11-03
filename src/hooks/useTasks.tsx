import { TaskArray } from '@root/@types/tasksTypes';
import { useState } from 'react';
import data from '@utils/taskData';

const useTasks = () => {
  const [taskArr, setTasksArr] = useState<TaskArray>(data);
  console.log('rerender');

  const changeTaskStatus = (status: boolean, taskId: string) => {
    const changedTaskArr = taskArr.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: status,
        };
      }
      return task;
    });

    setTasksArr(changedTaskArr);
  };

  const deleteCompletedTasks = () => {
    const filteredArray = taskArr.filter((task) => !task.isCompleted);

    setTasksArr(filteredArray);
  };

  const deleteSingleTask = (taskId: string) => {
    const filteredArray = taskArr.filter((task) => task.id !== taskId);
    console.log(filteredArray);

    setTasksArr(filteredArray);
  };

  return {
    taskArr,
    setTasksArr,
    changeTaskStatus,
    deleteCompletedTasks,
    deleteSingleTask,
  };
};

export default useTasks;
