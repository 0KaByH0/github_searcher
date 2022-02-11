import React from 'react';
import { IUserInfo } from '../../types/types';
import { useDebounce } from '../../hooks/useDebounce';
import { getCurrentUser, getIsLoading } from '../../redux/selectors/selectors';
import { useAppSelector } from '../../redux/store';
import { SearchBar } from '../SearchBar/SearchBar';
import { UserInfo } from './UserInfo';
import { filterRepos } from '../utils';
import { RepoInfo } from './RepoInfo';
import { Header } from '../Header/Header';

export const Info: React.FC = () => {
  const curentUser = useAppSelector(getCurrentUser);
  const isLoading = useAppSelector(getIsLoading);

  const [search, setSearch] = React.useState<string>('');
  const [filteredRepos, setFilteredRepos] = React.useState(curentUser.userRepos);

  const debounce = useDebounce(search);

  React.useEffect(() => {
    setFilteredRepos(curentUser.userRepos);
  }, [curentUser]);

  React.useEffect(() => {
    setFilteredRepos(filterRepos(curentUser.userRepos, search));
  }, [debounce]);

  return (
    <>
      <section>
        <Header />
        {isLoading ? (
          <>Loading</>
        ) : (
          <>
            <UserInfo user={curentUser.userInfo as IUserInfo} />
            <SearchBar
              search={search}
              setSearch={setSearch}
              placeholder="Search for User's Repositories"
            />
            <div className="repo-list">
              {filteredRepos.map((repo) => (
                <RepoInfo repo={repo} />
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
};
