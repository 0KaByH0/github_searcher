import { createSlice } from '@reduxjs/toolkit';
import { IUserInfo, IUserInList, IUserRepo } from '../../types/types';
import { fetchUser, fetchUsers } from '../actions/actions';

type UsersState = {
  usersList: IUserInList[];
  curentUser: {
    userRepos: IUserRepo[];
    userInfo: IUserInfo | {};
  };
  isLoading: boolean;
};

const initialState = {
  usersList: [],
  curentUser: {
    userInfo: {},
    userRepos: [],
  },
  isLoading: true,
} as UsersState;

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
      state.usersList = payload;
    });
    builder.addCase(fetchUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.curentUser.userInfo = action.payload.info;
      state.curentUser.userRepos = action.payload.repos;
      state.isLoading = false;
    });
  },
});

export const users = usersSlice.reducer;
export const usersActions = usersSlice.actions;
