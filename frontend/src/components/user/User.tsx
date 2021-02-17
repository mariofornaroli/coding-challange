import React from 'react';
import { UserType } from "../../types/usersType";

interface UserProps {
  user: UserType
}

const User = ({ user }: UserProps) => {

  return (
    <div className="card-item">
      <div className="user-info">
        <div className="info-item">
          <label>Name</label>
          <p className="user-name">{user.name}</p>
        </div>
        <div className="info-item">
          <label>Address</label>
          <p>{user.address.format()}</p>
        </div>
      </div>
    </div>
  );
}

export default User;