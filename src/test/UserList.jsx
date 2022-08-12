import React from 'react';
import { useGetAllUsersQuery } from '../services/userApi';

const UserList = () => {
  const { data: users, isErorr, isLoading } = useGetAllUsersQuery();
  if (isErorr) return <div>There is an error</div>;
  if (isLoading) return <div>Loading...</div>;

  return <div>{JSON.stringify(users)}</div>;
};

export default UserList;
