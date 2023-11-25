import { createSlice } from '@reduxjs/toolkit';
import {
  getContactsThunks,
  deleteContactsThunks,
  addContactsThunks,
} from './operations';



const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilledContacts = (state, { payload }) => {
  state.items = payload;
  state.isLoading = false;
  state.error = null;
};

const handleFulfilledAddContacts = (state, { payload }) => {
  state.items.push(payload);
  state.isLoading = false;
  state.error = null;
};
const handleFulfilledDeleteContacts = (state, { payload }) => {
  const index = state.items.findIndex(contact => contact.id === payload.id);
  state.items.splice(index, 1);
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: builder => {
    builder

      .addCase(getContactsThunks.fulfilled, handleFulfilledContacts)
      .addCase(addContactsThunks.fulfilled, handleFulfilledAddContacts)
      .addCase(deleteContactsThunks.fulfilled, handleFulfilledDeleteContacts)
      .addMatcher(action => {
        action.type.endsWith('/pending');
      }, handlePending)
      .addMatcher(action => {
        action.type.endsWith('/rejected');
      }, handleRejected);
  },
});

export const contactReducer = contactsSlice.reducer;
