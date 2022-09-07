import React, { FC, useEffect, useState } from 'react';
import { IUser } from '../components/Users/IUser';
import UserCards from '../components/Users/UserCards';
import UserAddForm from '../components/Users/UserAddForm';
import SearchUser from '../components/Search/Search';
import { useSearch } from '../hooks/useSearch';
import httpUsers from '../https/httpUsers';
import { useTypedSelector } from '../hooks/useTypedSelectors';
import { useAction } from '../hooks/useAction';

const Users: FC = () => {
  // const [users, setUsers] = useState<IUser[]>([]);
  const { users } = useTypedSelector((state) => state.users);
  const [search, setSearch] = useState('');
  const [showUserForm, setShowUserForm] = useState(false);
  const { getUsers } = useAction();

  useEffect(() => {
    getUsers();
  }, []);

  // const getUsers = async () => {
  //   try {
  //     const getNewUsers = await httpUsers.get('api/users?page=2');
  //     setUsers(getNewUsers.data.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const deleteUser = async (id: number) => {
    const isDelete = window.confirm('Do you really delete this user?');
    if (isDelete) {
      try {
        const deletedUser = await httpUsers.delete(`api/users/${id}`);
        if (deletedUser) {
          // setUsers(users.filter((user) => user.id !== id));
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  const searchedUsers = useSearch(users, search, 'first_name');

  return (
    <div className='container'>
      <SearchUser setSearch={setSearch} name={'Username'} />
      <button
        type='submit'
        className='btn btn-dark mb-5 d-flex mx-auto'
        onClick={(event) => setShowUserForm(!showUserForm)}
      >
        Add new User
      </button>
      {/* {showUserForm && <UserAddForm users={users} setUsers={setUsers} />} */}
      <UserCards users={searchedUsers} deleteUser={deleteUser} />
    </div>
  );
};

export default Users;
