import { RootState } from '../store';

export const getCurrentUser = (state: RootState) => state.users.curentUser;

export const getUsersList = (state: RootState) => state.users.usersList;

export const getIsLoading = (state: RootState) => state.users.isLoading;
