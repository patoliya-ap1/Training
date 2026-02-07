import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { InitialState, AddTodo, Todo } from "../../utility/Type/types";
import { apiRoot } from "../../services/api/apiRoot";

export const fetchTodos = createAsyncThunk("fetch/todos", async () => {
  try {
    const response = await apiRoot.get("/todos");
    const todos = response.data.todos;
    return todos;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return error.message;
    } else {
      return "unknown error while fetching";
    }
  }
});

export const addTodos = createAsyncThunk(
  "add/todos",
  async (newTodo: AddTodo) => {
    try {
      if (newTodo.type === "local") {
        return newTodo;
      } else {
        const response = await apiRoot.post("/todos/add", newTodo);

        return response.data;
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        return error.message;
      } else {
        return "unknown error while adding todo";
      }
    }
  },
);

export const updateTodo = createAsyncThunk(
  "update/todos",
  async ({
    todoId,
    completed,
    type,
    todo,userId
  }: {
    todoId: number;
    completed: boolean;
    type: string;
    todo:string,
    userId:number
  }) => {
    try {
      if (type === "local") {
        return { id: todoId, completed:!completed, type,todo,userId };
      } else {
        const response = await apiRoot.put(`/todos/${todoId}`, {
          completed: !completed,
        });
        return response.data;
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        return error.message;
      } else {
        return "unknown error while adding todo";
      }
    }
  },
);

export const deleteTodos = createAsyncThunk(
  "delete/todos",
  async ({ todoId, type }: { todoId: number; type: string }) => {
    try {
      if (type === "local") {
        return { id: todoId, type };
      } else {
        const response = await apiRoot.delete(`/todos/${todoId}`);
        return response.data;
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        return error.message;
      } else {
        return "unknown error while adding todo";
      }
    }
  },
);

const initialState: InitialState = {
  todos: [],
  fetchTodosState: "idle",
  addTodoState: "idle",
  deleteTodoState: "idle",
  updateTodoState: "idle",
  error: null,
};

const todosSlice = createSlice({
  name: "todosState",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.fetchTodosState = "loading";
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      const localTodos = localStorage.getItem("localTodos");
      state.fetchTodosState = "success";
      if (localTodos == null) {
        localStorage.setItem("localTodos", JSON.stringify([]));
      } else {
        state.todos?.push(...JSON.parse(localTodos));
      }
      state.todos?.push(
        ...action.payload.map((todo: Todo) => ({ ...todo, type: "api" })),
      );
    });
    builder.addCase(fetchTodos.rejected, (state) => {
      state.fetchTodosState = "error";
    });

    // add todo

    builder.addCase(addTodos.pending, (state) => {
      state.addTodoState = "loading";
    });
    builder.addCase(addTodos.fulfilled, (state, action) => {
      state.addTodoState = "success";

      const localTodos = JSON.parse(localStorage.getItem("localTodos") || '""');

      if (!localTodos) {
        localStorage.setItem("localTodos", JSON.stringify([]));
      }

      localTodos.push(action.payload);

      state.todos?.unshift(action.payload);
      localStorage.setItem("localTodos", JSON.stringify(localTodos));
    });
    builder.addCase(addTodos.rejected, (state) => {
      state.error = "error";
    });

    // delete Todos

    builder.addCase(deleteTodos.pending, (state) => {
      state.deleteTodoState = "loading";
    });
    builder.addCase(deleteTodos.fulfilled, (state, action) => {
      state.deleteTodoState = "success";
      if (action.payload.type === "local") {
        const localTodos = JSON.parse(
          localStorage.getItem("localTodos") || '""',
        );

        const updated = localTodos.filter(
          (todo: Todo) => todo.id !== action.payload.id,
        );

        localStorage.setItem("localTodos", JSON.stringify(updated));
      }
      const id = action.payload.id;
      console.log(action.payload.id);
      const index = state.todos?.findIndex((todo) => todo.id == id);
      console.log(index);
      if (typeof index === "number" && index >= 0) {
        state.todos?.splice(index, 1);
      }
    });
    builder.addCase(deleteTodos.rejected, (state) => {
      state.deleteTodoState = "error";
    });

    // update todos

    builder.addCase(updateTodo.pending, (state) => {
      state.updateTodoState = "loading";
    });
    builder.addCase(updateTodo.fulfilled, (state, action) => {
      state.updateTodoState = "success";

      const localTodos = JSON.parse(
        localStorage.getItem("localTodos") || '""',
      );
       if (action.payload.type === "local") {

        const updated = localTodos.map(
          (todo: Todo) => {
            if(todo.id===action.payload.id)
            {
                return {...todo,...action.payload}
            }
            else{
                return todo
            }
          }
        );

        localStorage.setItem("localTodos", JSON.stringify(updated));
      }
      const id = action.payload.id;
      const index = state.todos?.findIndex((todo) => todo.id == id);
      if (typeof index === "number" && index >= 0) {
        state.todos?.splice(index, 1, action.payload);
      }
    });
    builder.addCase(updateTodo.rejected, (state) => {
      state.updateTodoState = "error";
    });
  },
});

export default todosSlice.reducer;
