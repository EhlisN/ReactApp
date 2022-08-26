import React, { FC, useEffect, useState } from 'react';
import http from '../http';
import { IUser } from '../components/Users/IUser';
import UserCards from '../components/Users/UserCards';
import UserAddForm from '../components/Users/UserAddForm';
import SearchUser from '../components/Users/SearchUser';
import { useSearch } from '../hooks/useSearch';

const Users: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [search, setSearch] = useState('');
  const [showUserForm, setShowUserForm] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const getNewUsers = await http.get('api/users?page=2');
      setUsers(getNewUsers.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteUser = async (id: number) => {
    const isDelete = window.confirm('Do you really delete this user?');
    if (isDelete) {
      try {
        const deletedUser = await http.delete(`api/users/${id}`);
        if (deletedUser) {
          setUsers(users.filter((user) => user.id !== id));
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  const searchedUsers = useSearch(users, search, 'first_name');

  return (
    <div className='container'>
      <SearchUser setSearch={setSearch} />
      <button
        type='submit'
        className='btn btn-dark mb-5 d-flex mx-auto'
        onClick={(event) => setShowUserForm(!showUserForm)}
      >
        Add new User
      </button>
      {showUserForm && <UserAddForm users={users} setUsers={setUsers} />}
      <UserCards users={searchedUsers} deleteUser={deleteUser} />
    </div>
  );
};

export default Users;
