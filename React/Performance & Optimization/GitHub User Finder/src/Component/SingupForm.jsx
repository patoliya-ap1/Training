import { signupSchema } from "../Schema/signupSchema";

import { Formik, Form, ErrorMessage, Field } from "formik";
import { FcLeave } from "react-icons/fc";
import { useGLobalContext } from "../GlobalContext/GlobalContextProvider";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const {
    reducerValues: { isLoggedIn },
  } = useGLobalContext();
  const signupHandler = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  const navigate = useNavigate();

  const handleLoginRoute = () => {
    navigate("/login");
  };

  return (
    <div className="w-80 sm:w-100 shadow-md p-8 rounded-md dark:bg-gray-800">
      <h2 className="mb-4 text-sky-600">Singup</h2>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          phoneNumber: "",
          country: "",
          gender: "",
          skills: [],
        }}
        validationSchema={signupSchema}
        onSubmit={signupHandler}
      >
        {({ isSubmitting }) => (
          <Form>
            {/* username */}
            <div className="mb-4">
              <label
                htmlFor="username"
                className="text-gray-700 mb-2 dark:text-gray-400"
              >
                Username
              </label>
              <br />
              <Field
                type="text"
                name="username"
                placeholder="Enter Username"
                id="username"
                className="shadow-md py-2 px-3 w-full rounded-md dark:bg-gray-800 dark:placeholder-gray-500 focus:outline-0 dark:focus:bg-gray-900"
              />
              <ErrorMessage
                component="p"
                name="username"
                className="text-red-400 mt-1"
              />
            </div>
            {/* email */}
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
            {/* password */}
            <div className="mb-4">
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
            {/* phone number */}

            <div className="mb-4">
              <label
                htmlFor="phoneNumber"
                className="text-gray-700 mb-2 dark:text-gray-400"
              >
                Phone Number
              </label>
              <br />
              <Field
                type="number"
                name="phoneNumber"
                placeholder="Enter Password"
                id="phoneNumber"
                className="shadow-md py-2 px-3 w-full rounded-md dark:bg-gray-800 focus:outline-0 dark:focus:bg-gray-900 dark:placeholder-gray-500"
              />
              <ErrorMessage
                component="p"
                name="phoneNumber"
                className="text-red-400 mt-1"
              />
            </div>

            {/* Country */}

            <div className="mb-4">
              <label
                htmlFor="country"
                className="text-gray-700 mb-2 dark:text-gray-400"
              >
                Country
              </label>
              <br />
              <Field
                as="select"
                name="country"
                placeholder="Enter Password"
                id="country"
                className="shadow-md py-2 px-3 w-full rounded-md dark:bg-gray-800 focus:outline-0 dark:focus:bg-gray-900 dark:placeholder-gray-500"
              >
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="China">China</option>
                <option value="Russia">Russia</option>
              </Field>

              <ErrorMessage
                component="p"
                name="country"
                className="text-red-400 mt-1"
              />
            </div>

            {/* gender */}

            <div className="mb-4 space-x-2">
              <label className="text-gray-700 mb-3 dark:text-gray-400">
                Gender
              </label>
              <br />
              <label>
                <Field type="radio" name="gender" value="Male" />
                <span className="ms-2">Male</span>
              </label>

              <label>
                <Field type="radio" name="gender" value="Female" />
                <span className="ms-2">Female</span>
              </label>

              <label>
                <Field type="radio" name="gender" value="Other" />
                <span className="ms-2">Other</span>
              </label>

              <ErrorMessage
                component="p"
                name="gender"
                className="text-red-400 mt-1"
              />
            </div>

            {/* skills */}

            {/* ["Html", "css", "javaScript", "nodejs", "python", "bootstrap"] */}

            <div className="mb-4 flex flex-col">
              <label className="text-gray-700 mb-3 dark:text-gray-400">
                Skills
              </label>
              <br />
              <label>
                <Field type="checkbox" name="skills" value="Html" />
                <span className="ms-2">HTML</span>
              </label>

              <label>
                <Field type="checkbox" name="skills" value="css" />
                <span className="ms-2">CSS</span>
              </label>

              <label>
                <Field type="checkbox" name="skills" value="javaScript" />
                <span className="ms-2">JavaScript</span>
              </label>

              <label>
                <Field type="checkbox" name="skills" value="nodejs" />
                <span className="ms-2">Node js</span>
              </label>

              <label>
                <Field type="checkbox" name="skills" value="python" />
                <span className="ms-2">Python</span>
              </label>

              <label>
                <Field type="checkbox" name="skills" value="bootstrap" />
                <span className="ms-2">Bootstrap</span>
              </label>

              <ErrorMessage
                component="p"
                name="skills"
                className="text-red-400 mt-1"
              />
            </div>

            <div className="space-x-3">
              <button
                disabled={isSubmitting}
                type="submit"
                className="px-3 py-2 bg-sky-800 rounded-md text-slate-200 mt-5 cursor-pointer hover:bg-sky-600"
              >
                Signup
              </button>
              <button
                onClick={handleLoginRoute}
                type="button"
                className="px-3 py-2 bg-gray-700 rounded-md text-slate-200 mt-5 cursor-pointer hover:bg-gray-600"
              >
                Login
              </button>
            </div>
            {isLoggedIn && <p className="text-green-500 mt-3">Login Success</p>}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;
