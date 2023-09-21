import {
  fetchUsers,
  selectUserStatusCode,
  selectUsers,
  setStatusCode,
} from '../../features/users/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
 
  const statusCode = useSelector(selectUserStatusCode);

  useEffect(() => {
    !users && dispatch(fetchUsers()).unwrap();

    if (statusCode === '200') {
      dispatch(setStatusCode());
    }
  }, [dispatch, users, statusCode]);
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>isAdmin</th>
        </tr>
      </thead>
      <tbody>
        {users &&
         Object.values(users).map((user, idx) => (
            <tr key={user._id}>
              <td>{++idx}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.isAdmin ? 'Admin' : 'User'}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default UserList;
