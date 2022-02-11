import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../redux/actions/actions';
import { IUserInList } from '../../types/types';

type SearchUserProps = {
  user: IUserInList;
};

export const SearchUser: React.FC<SearchUserProps> = ({ user }) => {
  const dispatch = useDispatch();

  const getUserInfo = (user: IUserInList) => {
    dispatch(fetchUser(user.login));
  };

  return (
    <div className="search-item" key={user.id + user.login} onClick={() => getUserInfo(user)}>
      <img alt="img" src={user.avatar_url} />
      <span>{user.login}</span>
      <span>Repo #</span>
    </div>
  );
};
