import { useAppDispatch } from "../../app/hooks";
import { addTodos } from "./todos.slice";
import { IoMdAddCircle } from "react-icons/io";
import { ErrorMessage, Field, Form, Formik, type FormikHelpers } from "formik";
import { todoSchema } from "../../Schema/todoSchema";
import { toast } from "react-toastify";

interface TodoValues {
  todo: string;
}

const AddTodos = () => {
  const dispatch = useAppDispatch();

  const handleAddTodo = async (
    values: TodoValues,
    { resetForm }: FormikHelpers<{ todo: string }>,
  ) => {
    if (!isNaN(Number(values.todo))) {
      toast.error("Only numbers in not valid for Todo input");
      return;
    }

    const newTodo = {
      id: Date.now(),
      userId: 1,
      todo: values.todo,
      completed: false,
      type: "local",
    };
    await dispatch(addTodos(newTodo)).unwrap();
    toast.success("Todo added successfully.");
    resetForm();
  };

  return (
    <div className="w-full p-3">
      <div className="flex justify-center">
        <div className="grow">
          <Formik
            initialValues={{ todo: "" }}
            validationSchema={todoSchema}
            onSubmit={handleAddTodo}
          >
            {() => (
              <Form className="">
                <div className="flex space-x-3">
                  <div className="grow">
                    <Field
                      className="p-3 outline-0 shadow-md w-full grow text-2xl rounded-md flex-5"
                      type="text"
                      placeholder="Add Todo"
                      name="todo"
                      id="todo"
                    />
                  </div>

                  <div className="justify-items-center">
                    <button
                      type="submit"
                      className="bg-blue-800 p-3 text-slate-200 rounded-full shadow-sm shadow-blue-900 w-15 h-15 flex justify-center items-center text-2xl cursor-pointer hover:bg-blue-950 "
                    >
                      <IoMdAddCircle />
                    </button>
                  </div>
                </div>
                <div className="h-3">
                  <ErrorMessage
                    component="p"
                    name="todo"
                    className="text-red-500"
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>

        {/* <input
          className="p-3 outline-0 shadow-md w-[85%] text-2xl rounded-md"
          type="text"
          placeholder="Add Todo"
          value={todoInput}
          onChange={handleTodoInput}
        />
        <button
          className="bg-blue-800 p-3 text-slate-200 rounded-full shadow-sm shadow-blue-900 w-15 h-15 flex justify-center items-center text-2xl cursor-pointer hover:bg-blue-950"
          onClick={handleAddTodo}
        >
          <IoMdAddCircle />
        </button> */}
      </div>
    </div>
  );
};

export default AddTodos;
