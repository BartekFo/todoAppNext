import { createContext, FC, useContext, useEffect, useState } from 'react';
import { DropResult } from 'react-beautiful-dnd';
import {
  collection,
  addDoc,
  doc,
  onSnapshot,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
} from 'firebase/firestore';

import { TaskContextType } from '@root/@types/taskContextTypes';
import { TaskArray } from '@root/@types/tasksTypes';
import { db } from '@root/firebase/clientApp';
import { useAuth } from '@contextProviders/AuthContext';

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
  const [taskArr, setTasksArr] = useState<TaskArray>([]);
  const { user } = useAuth();

  const getTasks = () => {
    if (user) {
      const q = query(collection(db, user.uid), orderBy('order', 'asc'));
      return onSnapshot(q, (querySnapshot) => {
        const taskArr: TaskArray = [];
        querySnapshot.forEach((doc) => {
          taskArr.push({
            id: doc.id,
            name: doc.data().name,
            isCompleted: doc.data().isCompleted,
            order: doc.data().order,
          });
        });
        setTasksArr(taskArr);
      });
    }
    return () => {};
  };

  const getActiveTasks = () => {
    if (user) {
      const q = query(collection(db, user.uid), where('isCompleted', '==', false));
      onSnapshot(q, (querySnapshot) => {
        const taskArr: TaskArray = [];
        querySnapshot.forEach((doc) => {
          taskArr.push({
            id: doc.id,
            name: doc.data().name,
            isCompleted: doc.data().isCompleted,
            order: doc.data().order,
          });
        });
        setTasksArr(taskArr);
      });
    }
  };

  const getCompletedTasks = () => {
    if (user) {
      const q = query(collection(db, user.uid), where('isCompleted', '==', true));
      onSnapshot(q, (querySnapshot) => {
        const taskArr: TaskArray = [];
        querySnapshot.forEach((doc) => {
          taskArr.push({
            id: doc.id,
            name: doc.data().name,
            isCompleted: doc.data().isCompleted,
            order: doc.data().order,
          });
        });
        setTasksArr(taskArr);
      });
    }
  };

  useEffect(() => {
    const unsubscribe = getTasks();
    setTasksArr([]);
    return () => {
      unsubscribe();
    };
  }, [user]);

  const addTask = async (inputValue: string) => {
    if (user) {
      await addDoc(collection(db, user.uid), {
        name: inputValue,
        isCompleted: false,
        order: taskArr.length,
      });
    }
  };

  const changeTaskStatus = async (status: boolean, taskId: string) => {
    if (user) {
      const docRef = doc(db, user.uid, taskId);
      await updateDoc(docRef, {
        isCompleted: status,
      });
    }
  };

  const deleteCompletedTasks = () => {
    if (user) {
      taskArr.map((task) => {
        if (task.isCompleted) {
          deleteDoc(doc(db, user.uid, task.id));
        }
      });
    }
  };

  const deleteSingleTask = async (taskId: string) => {
    if (user) {
      await deleteDoc(doc(db, user.uid, taskId));
    }
  };

  const filterAllTasks = () => {
    getTasks();
  };

  const filterActiveTasks = () => {
    getActiveTasks();
  };

  const filterCompletedTasks = () => {
    getCompletedTasks();
  };

  const handleOnDragEnd = async (result: DropResult) => {
    const items = Array.from(taskArr);
    const [reorderedItem] = items.splice(result.source.index, 1);
    if (result.destination && user) {
      items.splice(result.destination.index, 0, reorderedItem);
      items.forEach((item) => {
        if (
          item.order <= result.destination!.index &&
          result.destination!.index > result.source.index &&
          item.order > result.source.index
        ) {
          updateDoc(doc(db, user.uid, item.id), {
            order: item.order - 1,
          });
        } else if (
          result.destination!.index < result.source.index &&
          item.order >= result.destination!.index
        ) {
          updateDoc(doc(db, user.uid, item.id), {
            order: item.order + 1,
          });
        }
      });
      const docRef = doc(db, user.uid, reorderedItem.id);
      await updateDoc(docRef, {
        order: result.destination.index,
      });
    }
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
