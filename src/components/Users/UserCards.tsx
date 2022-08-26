import React from 'react';
import Loader from '../Loader';
import { IUser } from './IUser';

const UserCards = ({
  users,
  deleteUser,
}: {
  users: IUser[];
  deleteUser: (id: number) => void;
}) => {
  return (
    <div className='row row-cols-1 row-cols-md-3 g-4'>
      {users.length ? (
        users.map((user) => {
          return (
            <div className='col mb-3 mt-3' key={user.id}>
              <div className='card h-100'>
                <div className='h-75 img-thumbnail d-flex align-items-center'>
                  <img
                    src={user.avatar}
                    className='card-img-top w-50 rounded mx-auto d-block align-middle'
                    alt='avatar'
                  />
                </div>
                <div className='card-body'>
                  <h5 className='card-title'>
                    {user.first_name} {user.last_name}
                  </h5>
                  <p className='card-text'>Email: {user.email}</p>
                </div>
                <button
                  type='button'
                  className='btn btn-danger'
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default UserCards;
