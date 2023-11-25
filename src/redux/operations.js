import { addContact, deleteContact, fetchAll } from './fetch';
import { createAsyncThunk } from '@reduxjs/toolkit';

// import axios from 'axios';

// export const getContactsThunks = createAsyncThunk(
//   'contacts/fetchContacts',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('/contacts');
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const addContactsThunks = createAsyncThunk(
//   'contacts/addContact',
//   async (newContact, thunkAPI) => {
//     try {
//       await axios.post('/contacts', newContact);
//       const response = await axios.get('/contacts');
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );


// export const deleteContactsThunks = createAsyncThunk(
//   'contacts/deleteContact',
//   async (contactId, thunkAPI) => {
//     try {
//       await axios.delete(`/contacts/${contactId}`);
//       const response = await axios.get('/contacts');
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const getContactsThunks = createAsyncThunk(
  'contacts/fetch',
  (_, { rejectWithValue }) => {
    try {
      return fetchAll();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContactsThunks = createAsyncThunk(
  'contacts/add',
  (newContact, { rejectWithValue }) => {
    try {
      return addContact(newContact);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContactsThunks = createAsyncThunk(
  'contacts/delete',
  (id, { rejectWithValue }) => {
    try {
      return deleteContact(id);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);