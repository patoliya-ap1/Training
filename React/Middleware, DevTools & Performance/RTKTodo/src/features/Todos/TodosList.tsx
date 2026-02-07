import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { deleteTodos, fetchTodos, updateTodo } from "./todos.slice";
import type { Todo } from "../../utility/Type/types";
import Loading from "../../Component/Loading";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import { FaRegFile } from "react-icons/fa6";
import { IoIosLink } from "react-icons/io";
import MessageComponent from "../../Component/MessageComponent";

const TodosList = () => {
  const dispatch = useAppDispatch();

  const [btnId, setBtnId] = useState<null | number>(null);
  const [updateId, setUpdateId] = useState<null | number>(null);
  const [filter, setFilter] = useState<string>("");

  const todos = useAppSelector((state) => state.todosState.todos);

  const todosState = useAppSelector(
    (state) => state.todosState.fetchTodosState,
  );

  const deleteTodoState = useAppSelector(
    (state) => state.todosState.deleteTodoState,
  );

  const updateTodoState = useAppSelector(
    (state) => state.todosState.updateTodoState,
  );

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleDelete = async (id: number, type: string) => {
    setBtnId(id);
    await dispatch(deleteTodos({ todoId: id, type })).unwrap();
    setBtnId(null);
    toast.info("Todo deleted Successfully");
  };

  const handleUpdate = async (
    id: number,
    completed: boolean,
    type: string,
    todo: string,
    userId: number,
  ) => {
    setUpdateId(id);
    await dispatch(
      updateTodo({ todoId: id, completed, type, todo, userId }),
    ).unwrap();
    setUpdateId(null);
    toast.success("Todo updated Successfully");
  };

  // Memoized Filter

  const filteredItems = useMemo(() => {
    return filter
      ? todos?.filter((todo) => {
          if (filter === "Completed") {
            return todo.completed === true;
          } else {
            return todo.completed === false;
          }
        })
      : todos;
  }, [filter, todos]);

  return (
    <div className="w-[90%]">
      <div className="flex justify-between items-center p-3 mb-3">
        <h2 className="text-lg  text-slate-600">Todo List</h2>
        <div>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="shadow-md p-2 outline-0 rounded-md"
          >
            <option value="">Select Filter</option>
            <option value="Completed">Completed</option>
            <option value="NotCompleted">Not Completed</option>
          </select>
        </div>
      </div>
      {todosState === "loading" && <Loading />}

      {todos && todos.length == 0 && todosState !== "loading" && (
        <MessageComponent
          message="Please add at least one todo"
          type="message"
        />
      )}

      <div>
        <ul>
          {todos &&
            todos.length > 0 &&
            todosState !== "loading" &&
            filteredItems?.map(
              ({
                id,
                todo,
                completed,
                type,
                userId,
              }: Pick<
                Todo,
                "id" | "todo" | "completed" | "type" | "userId"
              >) => (
                <li key={id}>
                  <div className="flex shadow-md p-3 mb-4 gap-2">
                    <div className="flex-1 flex justify-center">
                      <input
                        disabled={
                          updateTodoState === "loading" && updateId == id
                        }
                        className="w-6 cursor-pointer"
                        type="checkbox"
                        checked={completed}
                        onChange={() =>
                          handleUpdate(id, completed, type, todo, userId)
                        }
                      />
                    </div>
                    <div className="flex-4 p-3">
                      <h5
                        className={`col-span-1 text-wrap  ${completed ? "line-through decoration-green-500 text-green-500" : "text-slate-700"}`}
                      >
                        {todo}
                      </h5>
                      <span className="flex no-underline items-center text-gray-500">
                        Type:{" "}
                        <span
                          className={`flex items-center ms-2 ${type == "local" ? "text-sky-800" : "text-sky-600"}`}
                        >
                          {type}
                          {type === "local" ? <FaRegFile /> : <IoIosLink />}
                        </span>
                      </span>
                    </div>

                    <div className="flex-1 flex justify-center items-center">
                      {" "}
                      <button
                        disabled={deleteTodoState === "loading" && btnId == id}
                        className={`text-2xl cursor-pointer text-slate-200 p-3 w-10 h-10  rounded-full shadow-sm shadow-red-950 flex justify-center items-center  ${deleteTodoState === "loading" && btnId == id ? "bg-green-800 hover:bg-gray-600" : "bg-red-500 hover:bg-red-700"}`}
                        onClick={() => handleDelete(id, type)}
                      >
                        {deleteTodoState === "loading" && btnId == id ? (
                          "..."
                        ) : (
                          <MdDelete />
                        )}
                      </button>
                    </div>
                  </div>
                </li>
              ),
            )}
        </ul>
      </div>
    </div>
  );
};
export default TodosList;
