import { FaPlusCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";
import { LuTimer } from "react-icons/lu";

import store from "../app/store";
import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(store.getState().count);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setCount(store.getState().count);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleIncrease = () => {
    store.dispatch({ type: "increase" });
  };
  const handleDecrease = () => {
    store.dispatch({ type: "decrease" });
  };

  // console.log(store.getState());

  return (
    <div className="w-100 shadow-md h-80 p-4 flex justify-center items-center bg-slate-800 rounded-md shadow-slate-950">
      <div>
        <h2 className="text-2xl text-slate-400 mb-3 flex space-x-2">
          <span>Redux Counter App</span> <LuTimer />
        </h2>
        <h5 className="text-5xl text-slate-200 text-center mb-5">{count}</h5>
        <button
          className="p-2 bg-slate-700 w-full text-slate-200 rounded-md mb-2 shadow-md cursor-pointer flex items-center space-x-2 shadow-slate-950 justify-center hover:bg-slate-900"
          onClick={handleIncrease}
        >
          <span>Increase</span>
          <FaPlusCircle />
        </button>
        <button
          className="p-2 bg-slate-700 w-full text-slate-200 rounded-md shadow-md cursor-pointer flex items-center space-x-2 justify-center shadow-slate-950 hover:bg-slate-900"
          onClick={handleDecrease}
        >
          <span>Decrease</span> <FaCircleMinus />
        </button>
      </div>
    </div>
  );
};
export default Counter;
