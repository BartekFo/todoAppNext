import { TaskArray } from '@root/@types/tasksTypes';
import { DropResult } from 'react-beautiful-dnd';

export type TaskContextType = {
  taskArr: TaskArray;
  addTask: (inputValue: string) => void;
  changeTaskStatus: (status: boolean, taskId: string) => void;
  deleteCompletedTasks: () => void;
  deleteSingleTask: (taskId: string) => void;
  filterAllTasks: () => void;
  filterActiveTasks: () => void;
  filterCompletedTasks: () => void;
  handleOnDragEnd: (result: DropResult) => void;
};
