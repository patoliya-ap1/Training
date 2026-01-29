import * as Yup from "yup";

export const signupSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, "Enter 5 or more character")
    .max(10, "Enter 10 or less character")
    .required("Username is required"),
  email: Yup.string()
    .email("Enter valid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be between 8 to 10 character")
    .max(10, "Password must be between 8 to 10 character")
    .matches(/[a-z]/, "Please add at least one lowercase character")
    .matches(/[A-Z]/, "Please add at least one uppercase character")
    .matches(/[0-1]/, "Please add at least one number")
    .required("Password is required"),
  phoneNumber: Yup.string()
    .max(10, "Enter 10 digit phone number")
    .min(10, "Enter 10 digit phone number")
    .required("Phone number is required"),
  gender: Yup.string()
    .oneOf(["Male", "Female", "Other"], "Please select gender")
    .required("Gender is Required"),
  country: Yup.string()
    .oneOf(
      ["India", "USA", "China", "Russia"],
      "Country must be [India,USA,China,Russia]",
    )
    .required("Country is required"),
  skills: Yup.array()
    .min(3, "Select at least 3 skills")
    .of(Yup.string())
    .required("skill is required"),
});
