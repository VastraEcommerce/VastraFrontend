import axios from "axios";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { BsFillKeyFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { updateValue } from "./slice";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Required")
    .trim("Required"),
  password: Yup.string().required("Required").trim("Required"),
});

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [incorrectSubmit, setIncorrectSubmit] = useState("");
  const [forgetPassword, setForgetPassword] = useState({
    email: "",
  });
  const [messageForgetPass, setMessageForgerPass] = useState("");
  const onClickForgetPassword = () => {
    if (forgetPassword.email !== "" && forgetPassword.email !== "Required") {
      axios
        .post(
          `${process.env.REACT_APP_BASE_URL}api/v1/users/forgotPassword`,
          forgetPassword
        )
        .then(({ data: { message } }) => {
          setMessageForgerPass(message);
        })
        .catch(
          ({
            response: {
              data: { message },
            },
          }) => {
            setMessageForgerPass(message);
          }
        );
    } else {
      setForgetPassword({ email: "Required" });
    }
  };

  return (
    <>
      <h1 className="text-center p-3  bg-slate-700  text-white my-2 rounded-md">
        LogIn
      </h1>
      <div className="w-full md:w-96 md:max-w-full mx-auto">
        <div className="p-6 border border-gray-300 sm:rounded-md  dark:bg-gray-700">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={loginSchema}
            onSubmit={(values) => {
              axios
                .post(
                  `${process.env.REACT_APP_BASE_URL}api/v1/users/login`,
                  values
                )
                .then(
                  ({
                    data: {
                      token,
                      data: { user },
                    },
                  }) => {
                    console.log(user);
                    dispatch(updateValue({ user, token }));
                    navigate("/");
                  }
                )
                .catch(({ response }) => {
                  console.log(response.data.message);
                  setIncorrectSubmit(response.data.message);
                });
            }}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              isValid,
              errors,
              touched,
              values,
            }) => {
              return (
                <Form onSubmit={handleSubmit} method="POST">
                  {/* email */}
                  <div className="mb-6">
                    <label className="block mb-6">
                      <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Email address
                      </span>
                      <div className="relative flex">
                        <div className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-md border border-r-0 border-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600">
                          <svg
                            aria-hidden="true"
                            className="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                          </svg>
                        </div>
                        <input
                          className="
                    bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          style={{
                            borderColor:
                              errors.email && touched.email ? "red" : "inherit",
                          }}
                          required
                          placeholder="name@flowbite.com"
                          name="email"
                          type="email"
                          value={values.email}
                          onChange={(event) => {
                            handleChange(event);
                            setForgetPassword({
                              email: event.target.value,
                            });
                          }}
                          onBlur={handleBlur}
                        />
                      </div>
                      {errors.email && touched.email ? (
                        <p className="mt-2 text-sm font-bold text-red-600 dark:text-red-500">
                          {errors.email}
                        </p>
                      ) : forgetPassword.email === "Required" ? (
                        <p className="mt-2 text-sm font-bold text-red-600 dark:text-red-500">
                          Required
                        </p>
                      ) : null}
                    </label>
                  </div>
                  {/* password */}
                  <div className="mb-6">
                    <label className="block mb-6">
                      <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Password
                      </span>
                      <div className="relative flex">
                        <div className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-md border border-r-0 border-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600">
                          <BsFillKeyFill />
                        </div>
                        <input
                          className="
                      bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          // required
                          name="password"
                          type="password"
                          value={values.password}
                          onChange={(event) => {
                            handleChange(event);
                          }}
                          onBlur={handleBlur}
                        />
                      </div>
                      {errors.password && touched.password ? (
                        <p className="mt-2 text-sm font-bold text-red-600 dark:text-red-500">
                          {errors.password}
                        </p>
                      ) : null}
                    </label>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      disabled={!isValid}
                    >
                      Submit
                    </button>
                  </div>

                  {incorrectSubmit && (
                    <p className="text-center mt-2 text-sm font-bold text-red-600 dark:text-red-500">
                      {incorrectSubmit}
                    </p>
                  )}
                </Form>
              );
            }}
          </Formik>
          <div className="text-center">
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3"
              onClick={onClickForgetPassword}
            >
              Forget Password
            </button>
            {messageForgetPass ===
            "There is no user with this email address" ? (
              <p className="text-center mt-2 text-sm font-bold text-red-600 dark:text-red-500">
                {messageForgetPass}
              </p>
            ) : messageForgetPass === "Token sent to email" ? (
              <p className="text-center mt-2 text-sm font-bold text-green-600 dark:text-green-500">
                Message Sent To Your Email
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
