import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  logOut,
  selectCurrentToken,
  selectCurrentUser,
} from '../features/auth/authSlice';

const Welcome = () => {
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);
  const dispatch = useDispatch();

  const welcome = user ? `Welcome ${user.name}!` : 'Welcome!';
  const tokenAbbr = `${token.slice(0, 9)}...`;

  const content = (
    <section className="welcome">
      <h1>{welcome}</h1>
      <p>Token: {tokenAbbr}</p>
      <p>
        <Link to="/userslist">Go to the Users List</Link>
      </p>

      <button onClick={() => dispatch(logOut())} className="btn btn-info">
        Logout
      </button>
    </section>
  );

  return content;
};
export default Welcome;
