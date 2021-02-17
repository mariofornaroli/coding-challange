import React, { useEffect, useState } from 'react';
import axios from 'axios';
import User from '../user/User';
import { UsersType, UserType } from '../../types/usersType';

const Users = () => {
  const [users, setUsers] = useState<UserType[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true);
    setError(false)
    let requestURL = `https://jsonplaceholder.typicode.com/users`;
    axios.get(requestURL)
      .then((res: UsersType) => {
        const users = new UsersType(res).data
        setUsers(users)
      }).catch((err) => {
        setError(true)
      }).finally(()=> setIsLoading(false))
  }, []);

  return (
    <div className="card">
      <div className="list-container">
        {!error && users && (users.length > 0) &&
          users.map((user: UserType) => (
            <User user={user} key={user.id} />
          ))
        }
        {error && <p className="msg error-msg">Error while loading the list of users</p>}
        {isLoading && <p className="msg info-msg">Loading...</p>}
      </div>
    </div>
  );
}

export default Users;