import jwt_decode from 'jwt-decode';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { selectCurrentToken } from './authSlice';

export const roles = {
  ADMIN: 'admin',
  USER: 'user',
};

const RequireAuth = ({ allowedRoles = [] }) => {
  const location = useLocation();
  const token = useSelector(selectCurrentToken);

  const decoded = token ? jwt_decode(token) : undefined;
  const role = decoded?.role || '';

  // console.log({ token });
  // console.log({ role });

  return token ? (
    allowedRoles.includes(role) ? (
      <Outlet />
    ) : (
      <Navigate to="/unauthorized" state={{ from: location }} replace />
    )
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
