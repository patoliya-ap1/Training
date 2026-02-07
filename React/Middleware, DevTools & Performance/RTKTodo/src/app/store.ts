import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/Todos/todos.slice";
import logger from "redux-logger";

const store = configureStore({
  reducer: { todosState: todosReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type AppStore = typeof store;

export type RootState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];

export default store;
