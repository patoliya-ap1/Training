import { ToastContainer } from "react-toastify";
import Header from "./Component/Header";
import Todos from "./Component/Todos";
import { ErrorBoundary } from "react-error-boundary";
import RenderErrorComponent from "./Component/RenderErrorComponent";

function App() {
  return (
    <>
      <Header />
      <div className="flex justify-center">
        <div className="w-[90%]">
          <ErrorBoundary FallbackComponent={RenderErrorComponent}>
          <Todos />
          </ErrorBoundary>
        </div>
      </div>
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
