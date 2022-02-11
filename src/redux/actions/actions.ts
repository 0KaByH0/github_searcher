import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiService } from '../../api/ApiService';

const FETCH_USERS = 'users/fetch';
const FETCH_USER = 'users/fetchUser';

export const fetchUsers = createAsyncThunk(FETCH_USERS, async (arg, { dispatch }) => {
  const usersList = await ApiService.getUsers();
  dispatch(fetchUser(usersList[0].login));
  return usersList;
});

export const fetchUser = createAsyncThunk(FETCH_USER, async (userName: string) => {
  const userInfoResponse = await ApiService.getUserByName(userName);
  const userReposResponse = await ApiService.getUserRepos(userName);

  return { info: userInfoResponse.data, repos: userReposResponse.data };
});
