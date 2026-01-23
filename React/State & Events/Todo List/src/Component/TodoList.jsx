import { useState } from "react";

const TodoList = () => {
  const todoList = [
    { id: 1, title: "Walking" },
    { id: 2, title: "Coding" },
    { id: 3, title: "Meditation" },
    { id: 4, title: "Running" },
    { id: 5, title: "Light Bill" },
    { id: 6, title: "Fix Bug" },
  ];

  const [todoInput, setTodosInput] = useState("");
  const [todos, setTodos] = useState(todoList);
  const [message, setMessage] = useState({ type: null, value: null });

  const inputHandler = (e) => {
    const value = e.target.value;
    setTodosInput(value);
    if (message.type !== null) {
      setMessage({ type: null, value: null });
    }
  };

  const handleDelete = (todoId) => {
    setTodos((prev) => prev.filter(({ id }) => id !== todoId));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (todoInput.trim() === "") {
      setMessage({ type: "error", value: "Please add todo" });
    } else {
      const todo = { id: Date.now(), title: todoInput };

      setTodos((prev) => [todo, ...prev]);
      setTodosInput("");
      setMessage({ type: "message", value: "Todo added successfully." });
    }
  };

  return (
    <div className="border border-slate-500 p-5 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] rounded-2xl">
      <h1 className="text-center mb-4">Todos</h1>
      <div className="flex justify-center mb-5">
        <form onSubmit={submitHandler} className="space-x-3">
          <input
            className="border border-slate-300 rounded-md p-2"
            value={todoInput}
            placeholder="Add Todo"
            onChange={inputHandler}
          />
          <button className="bg-sky-500 p-2 rounded-md text-slate-100 cursor-pointer">
            Add Todo
          </button>
          {message.value && (
            <p
              className={`${message.type == "message" && "text-green-500"} ${message.type == "error" && "text-red-500"} mt-2`}
            >
              {message.value}
            </p>
          )}
        </form>
      </div>
      <div className="flex justify-center h-80">
        {todos.length > 0 && (
          <ul className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] border border-slate-300 space-y-3 p-4 rounded-2xl overflow-auto">
            {todos.map(({ id, title }) => {
              return (
                <li
                  key={id}
                  className="border border-slate-300 p-2 rounded-2xl transition-transform duration-300 ease-in hover:scale-95 cursor-pointer hover:bg-slate-200"
                >
                  <div className="flex items-center justify-between space-x-3">
                    <p>{title}</p>
                    <button
                      className="bg-red-500 p-2 rounded-md cursor-pointer text-slate-200 text-sm"
                      onClick={() => handleDelete(id)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};
export default TodoList;
