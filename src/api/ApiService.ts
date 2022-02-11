import axios from 'axios';
import { IUserInfo, IUserInList, IUserRepos } from '../types/types';

const BASE_URL = 'https://api.github.com';

export class ApiService {
  static getUsers = async () => {
    const response = await axios.get<IUserInList[]>(BASE_URL + '/users');
    if (response.status !== 200) {
      throw new Error('Cannot get user list');
    }
    return response.data;
  };

  static getUserByName = async (userName: string) => {
    const response = await axios.get<IUserInfo>(BASE_URL + '/users/' + userName);
    if (response.status !== 200) {
      throw new Error('Cannot get user by name');
    }
    return response;
  };

  static getUserRepos = async (userName: string) => {
    const response = await axios.get<IUserRepos[]>(BASE_URL + '/users/' + userName + '/repos');
    if (response.status !== 200) {
      throw new Error('Cannot get user repo');
    }
    return response;
  };
}
