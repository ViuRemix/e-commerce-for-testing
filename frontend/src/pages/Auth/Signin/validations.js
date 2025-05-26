import * as yup from "yup";

const validations = yup.object().shape({
  email: yup
    .string()
    .email("Email không hợp lệ")
    .required("Email là bắt buộc"),
  password: yup
    .string()
    .min(5, "Mật khẩu phải có ít nhất 5 ký tự.")
    .required("Mật khẩu là bắt buộc"),
});

export default validations;
