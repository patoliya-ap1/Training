import { useState } from "react";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [validateError, setValidateError] = useState({});

  const handleFormInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  function validate() {
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let errorObj = {};

    if (formData.name.trim() === "" || formData.name.length < 5) {
      errorObj = { name: "enter name five or more character" };
    }
    if (
      formData.email.trim() === "" ||
      formData.email.length < 6 ||
      !emailPattern.test(formData.email)
    ) {
      errorObj = { ...errorObj, email: "enter correct email" };
    }
    if (formData.password.trim() === "" || formData.password.length < 8) {
      errorObj = {
        ...errorObj,
        password: "enter password 8 or more character",
      };
    }

    setValidateError(errorObj);

    return Object.values(errorObj).length > 0;
  }

  const handleSignup = (e) => {
    e.preventDefault();
    if (validate()) return;
    console.log("submit");
  };

  return (
    <div className="border border-slate-300 p-4 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] rounded-md bg-gray-800">
      <h1 className="text-center text-2xl">Signup</h1>
      <form onSubmit={handleSignup}>
        {/* Name */}

        <div className="mb-3">
          <label>Name</label>
          <br />
          <input
            className="w-full p-2 rounded-md border border-slate-400 mt-1"
            type="text"
            value={formData.name}
            name="name"
            placeholder="Name"
            onChange={handleFormInput}
          />
          {validateError.name && (
            <p className="text-red-500">{validateError.name}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-3">
          <label>Email</label>
          <br />
          <input
            className="w-full p-2 rounded-md border border-slate-400 mt-1"
            value={formData.email}
            name="email"
            placeholder="Email"
            onChange={handleFormInput}
          />
          {validateError.email && (
            <p className="text-red-500">{validateError.email}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-3">
          <label>Password</label>
          <br />
          <input
            className="w-full p-2 rounded-md border border-slate-400 mt-1"
            type="password"
            value={formData.password}
            name="password"
            placeholder="Password"
            onChange={handleFormInput}
          />
          {validateError.password && (
            <p className="text-red-500">{validateError.password}</p>
          )}
        </div>

        <button className="bg-sky-700 p-2 rounded-md">Sign Up</button>
      </form>
    </div>
  );
};
export default SignupForm;
