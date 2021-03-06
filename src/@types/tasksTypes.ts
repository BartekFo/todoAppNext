export type TaskArray = {
  id: string;
  name: string;
  isCompleted: boolean;
  order: number;
}[];

export type TaskCardType = {
  task: {
    id: string;
    name: string;
    isCompleted: boolean;
  };
  index: number;
  changeTaskStatus: (status: boolean, taskId: string) => void;
  deleteSingleTask: (taskId: string) => void;
};
