import { useFormik } from "formik";
import { validateSignUp } from "../utils/validateSignUp";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseContext } from "../context/context";
import { useContext, useState } from "react";
import Toast from "../components/Toast";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      mobile: "",
      password: "",
      rePassword: "",
    },
    validate: validateSignUp,
    onSubmit: ({ userName, email, password, mobile }) => {
      setIsSubmitting(true);
      //  Creating user in firebase
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((result) => {
          result.user.updateProfile({ displayName: userName }).then(() => {
            firebase
              .firestore()
              .collection("users")
              .add({
                id: result.user.uid,
                userName: userName,
                mobile: mobile,
              })
              .then(() => {
                navigate("/login");
              })
              .catch((err) => console.log("error in firestrore", err));
          });
        })
        .catch((error) => {
          setIsSubmitting(false);
          toast.error(error.message, {
            toastStyle: {
              background: "red",
              color: "white",
              minWidth: "300px",
            },
            position: "top-center",
          });
          console.log(error);
        });
    },
  });

  const style =
    "shadow-sm  border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white";

  return (
    <div className="flex flex-col  justify-center items-center  bg-slate-50 ">
      <Toast />
      <div className="p-10 pb-2 bg-white shadow-lg rounded-lg  m-5">
        <form className="max-w-sm mx-auto" onSubmit={formik.handleSubmit}>
          <div className="mb-5 ml-12">
            <p className="text-2xl font-bold">Create account</p>
          </div>
          <div className="mb-5 ">
            <input
              type="text"
              name="userName"
              className={style}
              placeholder="User Name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.userName && formik.errors.userName ? (
              <p className="text-sm font-medium text-red-700 mb-0">
                {formik.errors.userName}
              </p>
            ) : null}
          </div>
          <div className="mb-5">
            <input
              type="text"
              name="email"
              className={style}
              placeholder="jhondoe@gmail.com"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="text-sm font-medium text-red-700 mb-0">
                {formik.errors.email}
              </p>
            ) : null}
          </div>
          <div className="mb-5">
            <input
              type="mobile"
              name="mobile"
              className={style}
              placeholder="Enter mobile number"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.mobile && formik.errors.mobile ? (
              <p className="text-sm font-medium text-red-700 mb-0">
                {formik.errors.mobile}
              </p>
            ) : null}
          </div>
          <div className="mb-5 ">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className={style}
            />
            {formik.touched.password && formik.errors.password ? (
              <p className="text-sm font-medium text-red-700 mb-0 ">
                {formik.errors.password}
              </p>
            ) : null}
          </div>
          <div className="mb-5">
            <input
              type="password"
              name="rePassword"
              placeholder="Re-enter passoword"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className={style}
            />
            {formik.touched.rePassword && formik.errors.rePassword ? (
              <p className="text-sm font-medium text-red-700 mb-0">
                {formik.errors.rePassword}
              </p>
            ) : null}
          </div>
          <button
            type="submit"
            className="text-white  border-2 border-black mb-2 bg-black hover:bg-white hover:text-black focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-16 py-2.5 text-center"
            disabled={isSubmitting}
          >
            Register new account
          </button>
          <div className="flex items-start mb-5">
            <label
              htmlFor="terms"
              className="ms-2 text-sm font-medium text-gray-500"
            >
              Already have an Account ?
              <Link to={"/login"} className="text-black hover:underline ml-1">
                Login
              </Link>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
