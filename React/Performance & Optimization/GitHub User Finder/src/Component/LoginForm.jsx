import { loginSchema } from "../Schema/loginSchema";

import { Formik, Form, ErrorMessage, Field } from "formik";
import { FcLeave } from "react-icons/fc";
import { useGLobalContext } from "../GlobalContext/GlobalContextProvider";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const {
    reducerValues: { isLoggedIn },
    handleLogin,
  } = useGLobalContext();
  const loginHandler = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
    handleLogin("login");
  };

  const navigate = useNavigate();

  const handleSignupRoute = () => {
    navigate("/singup", {});
  };

  return (
    <div className="w-80 sm:w-100 shadow-md p-8 rounded-md dark:bg-gray-800">
      <h2 className="mb-4 text-sky-600">Login</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={loginHandler}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="text-gray-700 mb-2 dark:text-gray-400"
              >
                Email
              </label>
              <br />
              <Field
                type="email"
                name="email"
                placeholder="Enter Email"
                id="email"
                className="shadow-md py-2 px-3 w-full rounded-md dark:bg-gray-800 dark:placeholder-gray-500 focus:outline-0 dark:focus:bg-gray-900"
              />
              <ErrorMessage
                component="p"
                name="email"
                className="text-red-400 mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-gray-700 mb-2 dark:text-gray-400"
              >
                Password
              </label>
              <br />
              <Field
                type="password"
                name="password"
                placeholder="Enter Password"
                id="password"
                className="shadow-md py-2 px-3 w-full rounded-md dark:bg-gray-800 focus:outline-0 dark:focus:bg-gray-900 dark:placeholder-gray-500"
              />
              <ErrorMessage
                component="p"
                name="password"
                className="text-red-400 mt-1"
              />
            </div>
            <div className="space-x-3">
              <button
                disabled={isSubmitting}
                type="submit"
                className="px-3 py-2 bg-sky-800 rounded-md text-slate-200 mt-5 cursor-pointer hover:bg-sky-600"
              >
                login
              </button>
              <button
                type="button"
                onClick={handleSignupRoute}
                className="px-3 py-2 bg-gray-700 rounded-md text-slate-200 mt-5 cursor-pointer hover:bg-gray-600"
              >
                Signup
              </button>
            </div>
            {isLoggedIn && <p className="text-green-500 mt-3">Login Success</p>}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
