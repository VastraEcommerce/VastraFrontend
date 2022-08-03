import * as React from "react";
// import { useSelector } from "react-redux";
import * as Yup from "yup";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import axios from "axios";
import { Field, Form, Formik } from "formik";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateVal } from "../../pages/Account/register/slice";
// import { Link } from "react-router-dom";
const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
    .trim("Required")
    .test("name", "Edit", async (inputValue) => {
      const requestOptions = {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: inputValue }),
      };
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}api/v1/users/isExist`,
        requestOptions
      );
      const data = await response.json();
      console.log(data.isExist);
      return !data.isExist;
    }),
});
export default function EditAddress() {
  //   const user = useSelector((state) => state.register.user);
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = () => {
    setExpanded(!expanded);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <Accordion className='mb-20 ' expanded={expanded}>
        <AccordionSummary aria-controls='panel1a-content' id='panel1a-header'>
          <button
            onClick={handleChange}
            className='ml-16 py-2 border border-neutral hover:bg-neutral hover:text-white text-center text-sm text-neutral-800  duration-300  px-14'>
            EDIT ADDRESS
          </button>
        </AccordionSummary>
        <AccordionDetails>
          <div className='w-[90%] mx-auto'>
            <div className='p-6 border border-gray-300 sm:rounded-md '>
              <h2 className='my-5 mb-10'>EDIT YOUR ADDRESS</h2>
              <Formik
                validateOnChange={false}
                initialValues={{
                  name: "",
                  email: "",
                  password: "",
                  confirmPass: "",
                }}
                validationSchema={SignUpSchema}
                onSubmit={(values) => {
                  axios
                    .post(
                      `${process.env.REACT_APP_BASE_URL}api/v1/users/signup`,
                      values
                    )
                    .then(
                      ({
                        data: {
                          token,
                          data: { user },
                        },
                      }) => {
                        dispatch(updateVal({ user, token }));
                        navigate("/");
                      }
                    )
                    .catch((err) => console.log(err));
                }}>
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
                    <Form onSubmit={handleSubmit} method='POST'>
                      <div className='mb-6'>
                        <label className='block mb-6'>
                          CITY
                          <input
                            className=' border border-slate-300 outline-none text-sm text-nuteral-800 hover:bg-white focus:bg-white shadow-sm   w-full p-2.5  bg-base-200  dark:placeholder-gray-400   '
                            placeholder=''
                            type='text'
                            name='name'
                            value={values.name}
                            onChange={(event) => {
                              handleChange(event);
                            }}
                            onBlur={handleBlur}
                          />
                        </label>
                      </div>
                      <div className='mb-6'>
                        <label className='block mb-6'>
                          STREET
                          <input
                            className=' border border-slate-300 outline-none text-sm text-nuteral-800 hover:bg-white focus:bg-white shadow-sm   w-full p-2.5  bg-base-200  dark:placeholder-gray-400   '
                            placeholder=''
                            type='text'
                            name='name'
                            value={values.name}
                            onChange={(event) => {
                              handleChange(event);
                            }}
                            onBlur={handleBlur}
                          />
                        </label>
                      </div>
                      <div className='mb-6'>
                        <label className='block mb-6'>
                          BUILDING
                          <input
                            className=' border border-slate-300 outline-none text-sm text-nuteral-800 hover:bg-white focus:bg-white shadow-sm   w-full p-2.5  bg-base-200  dark:placeholder-gray-400   '
                            placeholder=''
                            type='text'
                            name='name'
                            value={values.name}
                            onChange={(event) => {
                              handleChange(event);
                            }}
                            onBlur={handleBlur}
                          />
                        </label>
                      </div>
                      <div className='mb-6'>
                        <label className='block mb-6'>
                          COUNTERY
                          <input
                            className=' border border-slate-300 outline-none text-sm text-nuteral-800 hover:bg-white focus:bg-white shadow-sm   w-full p-2.5  bg-base-200  dark:placeholder-gray-400   '
                            placeholder=''
                            type='text'
                            name='name'
                            value={values.name}
                            onChange={(event) => {
                              handleChange(event);
                            }}
                            onBlur={handleBlur}
                          />
                        </label>
                      </div>
                      <div className='mb-6'>
                        <label className='block mb-6'>
                          PURPOSE
                          <Field
                            name='purpose'
                            as='select'
                            className=' border border-slate-300 outline-none text-sm text-nuteral-800 hover:bg-white focus:bg-white shadow-sm   w-full p-2.5  bg-base-200  dark:placeholder-gray-400   '>
                            <option value='payment'>Payment</option>
                            <option value='delivery'>Delivery</option>
                          </Field>
                        </label>
                      </div>

                      <button
                        type='submit'
                        className=' py-2 border border-neutral hover:bg-neutral hover:text-white text-center text-sm text-neutral-800  duration-300  px-14'
                        disabled={!isValid}>
                        UPDATE
                      </button>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
