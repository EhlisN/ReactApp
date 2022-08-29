import React, {
  useState,
  ChangeEvent,
  FormEvent,
  Dispatch,
  SetStateAction,
} from 'react';
import { initialUser } from './initialUser';
import { IUser } from './IUser';
import httpUsers from '../../https/httpUsers';

const UserAddForm = ({
  users,
  setUsers,
}: {
  users: IUser[];
  setUsers: Dispatch<SetStateAction<IUser[]>>;
}) => {
  const [user, setUser] = useState(initialUser);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const field = event.target.id;
    setUser({ ...user, [field]: event.target.value });
  };

  const addUser = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const addedUser = await httpUsers.post('api/users', user);
      if (addedUser.data) {
        setUsers([...users, user]);
        setUser(initialUser);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <form onSubmit={(event) => addUser(event)}>
      {Object.keys(user).map((field) => {
        if (field === 'id') return null;
        return (
          <div className='mb-3' key={field}>
            <label htmlFor={field} className='form-label'>
              {field}
            </label>
            <input
              type='text'
              className='form-control'
              id={field}
              required
              value={user[field as keyof Omit<IUser, 'id'>]}
              onChange={(event) => onChange(event)}
            />
          </div>
        );
      })}
      <button type='submit' className='btn btn-info d-flex mx-auto'>
        Submit
      </button>
    </form>
  );
};

export default UserAddForm;
