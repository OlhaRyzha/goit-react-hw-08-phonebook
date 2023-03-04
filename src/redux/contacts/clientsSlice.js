import { createSlice } from '@reduxjs/toolkit';
import {
  getContacts,
  addContact,
  deleteContact,
} from 'redux/contacts/operations';

const initialState = {
  clients: [],
};

const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getContacts.fulfilled, (state, { payload }) => {
        state.clients = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.clients = [payload, ...state.clients];
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.clients = state.clients.filter(item => item.id !== payload.id);
      }),
});

export const clientsReducer = clientsSlice.reducer;
