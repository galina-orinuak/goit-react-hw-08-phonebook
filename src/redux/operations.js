import { addContact, deleteContact, fetchAll } from './fetch';
import { createAsyncThunk } from '@reduxjs/toolkit';

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
