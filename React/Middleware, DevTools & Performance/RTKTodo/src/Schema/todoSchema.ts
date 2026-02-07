import * as Yup from "yup";

export const todoSchema = Yup.object().shape({
  todo: Yup.string()
    .min(5, "Todo must be 5 or more character")
    .required("Todo is required"),
});
