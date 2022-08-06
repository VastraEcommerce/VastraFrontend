import axios from 'axios';
import { Form, Formik } from 'formik';
import { BsFillBrushFill, BsFillKeyFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { updateVal } from './slice';

const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
    .trim('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required')
    .trim('Required')

    .test('email', 'We Have This Email', async (inputValue) => {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}api/v1/users/isExist`,
        { email: inputValue }
      );
      return !data.isExist;
    }),
  password: Yup.string()
    .required('Please Enter your password')
    .trim('Required')
    .matches(
      // eslint-disable-next-line
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
    ),
  confirmPass: Yup.string()
    .required('Please Enter your confirm password')
    .oneOf([Yup.ref('password')], 'Password must match'),
});

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const updateStore = useDebouncedCallback((val) => {
  // dispatch(updateVal({ user, token }));
  // }, 250);
  return (
    <>
      <h1 className="text-center p-3  bg-slate-700  text-white my-2 rounded-md">
        Create an Account
      </h1>
      <div className="w-full md:w-96 md:max-w-full mx-auto">
        <div className="p-6 border border-gray-300 sm:rounded-md  dark:bg-gray-700">
          <Formik
            validateOnChange={false}
            initialValues={{
              name: '',
              email: '',
              password: '',
              confirmPass: '',
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
                    navigate('/');
                  }
                )
                .catch((err) => console.log(err));
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
                  {/*  Name */}
                  <div className="mb-6">
                    <label className="block mb-6">
                      <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Full Name
                      </span>
                      <div className="flex">
                        <div className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-md border border-r-0 border-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600">
                          <BsFillBrushFill />
                        </div>

                        <input
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          style={{
                            borderColor:
                              errors.name && touched.name ? 'red' : 'inherit',
                          }}
                          placeholder="Hassan Sabry"
                          required
                          type="text"
                          name="name"
                          value={values.name}
                          onChange={(event) => {
                            handleChange(event);
                          }}
                          onBlur={handleBlur}
                        />
                      </div>
                      {errors.name && touched.name ? (
                        <p className="mt-2  text-sm font-bold text-red-600 dark:text-red-500">
                          {errors.name}
                        </p>
                      ) : null}
                    </label>
                  </div>
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
                              errors.email && touched.email ? 'red' : 'inherit',
                          }}
                          required
                          placeholder="name@flowbite.com"
                          name="email"
                          type="email"
                          value={values.email}
                          onChange={(event) => {
                            handleChange(event);
                          }}
                          onBlur={handleBlur}
                        />
                      </div>
                      {errors.email && touched.email ? (
                        <p className="mt-2 text-sm font-bold text-red-600 dark:text-red-500">
                          {errors.email}
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
                          style={{
                            borderColor:
                              errors.password && touched.password
                                ? 'red'
                                : 'inherit',
                          }}
                          required
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

                  {/* confirm password */}
                  <div className="mb-6">
                    <label className="block mb-6">
                      <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Confirm Password
                      </span>
                      <div className="relative flex">
                        <div className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-md border border-r-0 border-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600">
                          <BsFillKeyFill />
                        </div>
                        <input
                          className="
                        bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          style={{
                            borderColor:
                              errors.confirmPass && touched.confirmPass
                                ? 'red'
                                : 'inherit',
                          }}
                          required
                          name="confirmPass"
                          type="password"
                          value={values.confirmPass}
                          onChange={(event) => {
                            handleChange(event);
                          }}
                          onBlur={handleBlur}
                        />
                      </div>
                      {errors.confirmPass && touched.confirmPass ? (
                        <p className="mt-2 text-sm font-bold text-red-600 dark:text-red-500">
                          {errors.confirmPass}
                        </p>
                      ) : null}
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    disabled={!isValid}
                  >
                    Submit
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
}
