import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


axios.defaults.baseURL = `https://connections-api.herokuapp.com/`;

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};



export const registerThunk = createAsyncThunk(
    'auth/register',
    (user, { rejectWithValue }) => {
          try {
            const { data } = axios.post('/users/signup', user);
            token.set(data.token);
            return data;
          } catch (error) {
            return rejectWithValue(error);
          }
        }
      );
  
  export const loginThunk = createAsyncThunk(
  `auth/login`,
  (user, { rejectWithValue }) => { 
    try {
      const { data } = axios.post('/users/login', user);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
  );
  
  export const logOutThunk = createAsyncThunk(
    `auth/logout`,
    (_, { rejectWithValue }) => { 
      try {
        const { data } = axios.post('/users/logout');
        token.unset();
        return data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
    );
  
    export const currentUserThunk = createAsyncThunk(
      `auth/refresh`,
      (user, { rejectWithValue, getState  }) => { 
        try {
         
        const state = getState();
        const persistToken = state.auth.token;
  
        if (persistToken === null) {
          return rejectWithValue();
        }
  
        token.set(persistToken);
        const { data } = axios.get('/users/current');
        return data;
      } catch (error) {
        return rejectWithValue(error);
        }
      }
      );