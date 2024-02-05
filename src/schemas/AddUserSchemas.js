import * as Yup from "yup";

export const userSchema = Yup.object({
  firstname: Yup.string()
    .min(3)
    .max(25)
    .required("please enter your firstName"),
  lastname: Yup.string().min(3).max(25).required("please enter your lastname"),
  email: Yup.string().email().required("please enter your email."),
  contact: Yup.string()
    .min(10)
    .max(10)
    .required("please enter your contact."),
  address: Yup.string().min(3).max(25).required("please enter your address"),
  status: Yup.string().required("select status correct"),
  role: Yup.string().required("select Your role"),
});
