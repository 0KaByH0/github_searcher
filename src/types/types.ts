export interface IUserInList {
  avatar_url: string;
  id: number;
  login: string;
  repos_url: string;
}

export interface IUserInfo {
  avatar_url: string;
  bio: string | null;
  blog: string;
  company: string;
  created_at: string;
  email: string | null;
  followers: number;
  following: number;
  location: string;
  login: string;
  name: string;
  public_repos: number;
  repos_url: string;
}

export interface IUserRepo {
  forks: number;
  name: string;
  stargazers_count: number;
  html_url: string;
}
