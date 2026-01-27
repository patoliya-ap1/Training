import { Outlet } from "react-router-dom";
import GithubUserFinder from "./Component/GithubUserFinder";
import Header from "./Component/Header";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
