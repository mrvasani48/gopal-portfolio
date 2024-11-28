import * as Yup from "yup";

const contactMeSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters long")
    .max(50, "Name must not exceed 50 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Enter a valid email address"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]{10,12}$/, "Phone number must be between 10 and 12 digits"),
  subject: Yup.string()
    .required("Subject is required")
    .min(5, "Subject must be at least 5 characters long")
    .max(100, "Subject must not exceed 100 characters"),
  message: Yup.string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters long")
    .max(500, "Message must not exceed 500 characters"),
});

export default contactMeSchema;
