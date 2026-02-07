export interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
  type: string;
}

type State = "idle" | "loading" | "success" | "error";

export interface InitialState {
  todos: Todo[] | null;
  fetchTodosState: State;
  addTodoState: State;
  deleteTodoState: State;
  updateTodoState: State;
  error: null | string;
}

export interface AddTodo {
  todo: string;
  completed: boolean;
  userId: number;
  type: string;
}
