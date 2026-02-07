import { useEffect } from "react";
import { useAppDispatch } from "./app/hooks";
import { fetchUsers } from "./features/users/users.slice";
import Header from "./Component/Header";
import { Outlet } from "react-router-dom";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="flex justify-center mt-5">
        <div className="w-[90%]">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
