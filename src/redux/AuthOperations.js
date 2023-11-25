// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';



// axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';


// export const setAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };


// const clearAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = ``;
// };

// export const registerThunk = createAsyncThunk(
//   'auth/register',
//   async (credentials, thunkAPI) => {
//     try {
//       const response = await axios.post('users/signup', credentials);
//       setAuthHeader(response.data.token);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );


// export const loginThunk= createAsyncThunk(
//   'auth/login',
//   async (credentials, thunkAPI) => {
//     try {
//       const response = await axios.post('users/login', credentials);
//       setAuthHeader(response.data.token);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const logOutThunk = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
//   try {
//     await axios.post('users/logout');
//     clearAuthHeader();
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });


// export const currentUserThunk = createAsyncThunk(
//   'auth/refresh',
//   async (_, thunkAPI) => {
//     const { token } = thunkAPI.getState().auth;

//     if (!token) {
//       return thunkAPI.rejectWithValue('No valod token');
//     }

//     setAuthHeader(token);
//     try {
//       const response = await axios.get('/users/current');
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', user);
      token.set(data.token);

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', user);
      token.set(data.token);

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/logout');
      token.unset();

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const currentUserThunk = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const persistToken = state.auth.token;

      if (persistToken === null) {
        return rejectWithValue();
      }

      token.set(persistToken);
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);