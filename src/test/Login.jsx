import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../features/auth/authApiSlice';
import {
  selectCurrentToken,
  selectPersist,
  setCredentials,
  setPersist,
} from '../features/auth/authSlice';

const Login = () => {
  const persist = useSelector(selectPersist);
  const token = useSelector(selectCurrentToken);

  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('persist', persist);
    if (persist) localStorage.setItem('accessToken', token);
  }, [persist, token]);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = await login({ email: user, password: pwd }).unwrap();
      dispatch(setCredentials({ token: userData.token, user: userData.user }));
      setUser('');
      setPwd('');
      navigate('/welcome');
    } catch (err) {
      if (!err?.originalStatus) {
        // isLoading: true until timeout occurs
        setErrMsg('No Server Response');
      } else if (err.originalStatus === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.originalStatus === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    }
  };

  const handleUserInput = (e) => setUser(e.target.value);

  const handlePwdInput = (e) => setPwd(e.target.value);

  const content = isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="login">
      <p
        ref={errRef}
        className={errMsg ? 'errmsg' : 'offscreen'}
        aria-live="assertive"
      >
        {errMsg}
      </p>

      <h1>Employee Login</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          ref={userRef}
          value={user}
          onChange={handleUserInput}
          // autoComplete="off"
          required
          className="text-black"
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          onChange={handlePwdInput}
          value={pwd}
          required
          className="text-black"
        />
        <hr />
        <button className="btn btn-primary">Sign In</button>
        <hr />
        <label htmlFor="persist" className="flex align-baseline">
          <input
            type="checkbox"
            id="persist"
            className="checkbox checkbox-primary"
            onChange={() => dispatch(setPersist())}
            checked={persist}
          />
          Remember me
        </label>
      </form>
      <button className="btn btn-primary" onClick={() => navigate('/welcome')}>
        Welcome
      </button>
    </section>
  );

  return content;
};
export default Login;
