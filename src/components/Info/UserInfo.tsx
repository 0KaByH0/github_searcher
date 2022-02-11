import React from 'react';
import { IUserInfo } from '../../types/types';

type UserInforProps = {
  user: IUserInfo;
};

export const UserInfo: React.FC<UserInforProps> = ({ user }) => {
  return (
    <>
      <div className="user-info-wrapper">
        <div className="img-wrapper">
          <img alt="User Img" src={user.avatar_url} />
        </div>
        <div className="user-info">
          <h3>UserName: {user.login}</h3>
          <h3>{user.email ? 'Email:' + user.email : 'User have no email'}</h3>
          <h3>{user.location ? 'Location: ' + user.location : ''}</h3>
          <h3>Join Date: {new Date(user.created_at).toDateString()}</h3>
          <h3>{user.followers} Followers</h3>
          <h3>Following {user.followers}</h3>
        </div>
      </div>
      <div className="user-bio">{user.bio}</div>
    </>
  );
};
