import { ErrorBoundary } from "react-error-boundary";
import AddTodos from "../features/Todos/AddTodos";
import TodosList from "../features/Todos/TodosList";
import RenderErrorComponent from "./RenderErrorComponent";

const Todos = () => {
  return (
    <div>
      <div className="flex justify-center mt-4">
        <ErrorBoundary FallbackComponent={RenderErrorComponent}>
          <AddTodos />
        </ErrorBoundary>
      </div>
      <div className="flex justify-center">
        <ErrorBoundary FallbackComponent={RenderErrorComponent}>
          <TodosList />
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default Todos;
