import { createContext, FC, useContext, useState } from 'react';
import { DropResult } from 'react-beautiful-dnd';
import { collection, addDoc } from 'firebase/firestore';

import { TaskContextType } from '@root/@types/taskContextTypes';
import { TaskArray } from '@root/@types/tasksTypes';
import data from '@utils/taskData';
import { db } from '@root/firebase/clientApp';

const defaultValue: TaskContextType = {
  taskArr: [],
  addTask: (inputValue: string) => {},
  changeTaskStatus: (status: boolean, taskId: string) => {},
  deleteCompletedTasks: () => {},
  deleteSingleTask: (taskId: string) => {},
  filterAllTasks: () => {},
  filterActiveTasks: () => {},
  filterCompletedTasks: () => {},
  handleOnDragEnd: (result: DropResult) => {},
};

const TaskContext = createContext<TaskContextType>(defaultValue);

export const useTasks = () => {
  return useContext(TaskContext);
};

export const TasksProvider: FC = ({ children }) => {
  const [taskArr, setTasksArr] = useState<TaskArray>(data);

  const addTask = async (inputValue: string) => {
    setTasksArr([
      ...taskArr,
      { id: taskArr.length.toString(), name: inputValue, isCompleted: false },
    ]);

    const docRef = await addDoc(collection(db, 'tasks'), {
      name: inputValue,
      isCompleted: false,
    });
    console.log('Document written with ID: ', docRef.id);
  };

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

    setTasksArr(filteredArray);
  };

  const filterAllTasks = () => {
    setTasksArr(data);
  };

  const filterActiveTasks = () => {
    const filteredArray = taskArr.filter((task) => !task.isCompleted);

    setTasksArr(filteredArray);
  };

  const filterCompletedTasks = () => {
    const filteredArray = taskArr.filter((task) => task.isCompleted);

    setTasksArr(filteredArray);
  };

  const handleOnDragEnd = (result: DropResult) => {
    const items = Array.from(taskArr);
    const [reorderedItems] = items.splice(result.source.index, 1);
    if (result.destination) items.splice(result.destination.index, 0, reorderedItems);

    setTasksArr(items);
  };

  const value = {
    taskArr,
    addTask,
    deleteCompletedTasks,
    filterActiveTasks,
    filterAllTasks,
    changeTaskStatus,
    deleteSingleTask,
    filterCompletedTasks,
    handleOnDragEnd,
  };
  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
