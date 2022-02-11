import { IUserInList, IUserRepo } from '../types/types';

export const filterRepos = (repos: IUserRepo[], filter: string) =>
  repos.filter((repo) => repo.name.includes(filter));

export const filterUsers = (users: IUserInList[], filter: string) =>
  users.filter((repo) => repo.login.includes(filter));
