import { createSlice } from '@reduxjs/toolkit';
import { getContacts, deleteContact, addContact } from './operations';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder =>
    builder
      // ----- getContacts -----
      .addCase(getContacts.pending, pendingHandler)
      .addCase(getContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = payload;
      })
      .addCase(getContacts.rejected, rejectHandler)
      // ----- deleteContact -----
      .addCase(deleteContact.pending, pendingHandler)
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== payload.id
        );
        state.isLoading = false;
      })
      .addCase(deleteContact.rejected, rejectHandler)
      // ----- addContact -----
      .addCase(addContact.pending, pendingHandler)
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts = [payload, ...state.contacts];
        state.isLoading = false;
      })
      .addCase(addContact.rejected, rejectHandler),
});

function pendingHandler(state) {
  state.isLoading = true;
  state.error = null;
}
function rejectHandler(state, { payload }) {
  state.isLoading = false;
  state.error = payload;
}

export const contactsReducer = contactsSlice.reducer;
