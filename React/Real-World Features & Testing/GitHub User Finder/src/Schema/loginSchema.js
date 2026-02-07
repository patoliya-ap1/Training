import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Enter Correct Email Format")
    .required("Email is Required"),
  password: Yup.string()
    .min(8, "Enter 8 or More Character for Password")
    .max(10, "Enter 10 or Less Character for Password")
    .matches(/[a-z]/, "Enter At Least One Lowercase Latter")
    .matches(/[A-Z]/, "Enter At Least One Uppercase Latter")
    .matches(/[0-9]/, "Enter At Least One Number")
    .required("Password is Required!"),
});
