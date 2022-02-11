import React from 'react';
import { useDispatch } from 'react-redux';
import { useDebounce } from '../../hooks/useDebounce';
import { fetchUsers } from '../../redux/actions/actions';
import { getUsersList } from '../../redux/selectors/selectors';
import { useAppSelector } from '../../redux/store';
import { Header } from '../Header/Header';
import { SearchBar } from '../SearchBar/SearchBar';
import { filterUsers } from '../utils';
import { SearchUser } from './SearchUser';

export const Search: React.FC = () => {
  const dispatch = useDispatch();
  const users = useAppSelector(getUsersList);

  const [search, setSearch] = React.useState<string>('');
  const [filteredUsers, setFilteredUsers] = React.useState(users);

  const debounce = useDebounce(search);

  // Will be better to take this out in upper component
  React.useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  React.useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  React.useEffect(() => {
    setFilteredUsers(filterUsers(users, search));
  }, [debounce]);

  return (
    <section>
      <Header />
      <SearchBar placeholder="Search for Users" search={search} setSearch={setSearch} />
      <div className="users-list">
        {filteredUsers.map((user) => (
          <SearchUser user={user} />
        ))}
      </div>
    </section>
  );
};
