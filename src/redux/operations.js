import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const instance = axios.create({
  baseURL: 'https://63fcb88c8ef914c5559ddc90.mockapi.io/',
});

export const getContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await instance.get('/contacts');
  return response.data;
});

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async contactId => {
    const response = await instance.delete(`/contacts/${contactId}`);
    return response.data;
  }
);

export const addContact = createAsyncThunk('contacts/add', async contact => {
  const response = await instance.post(`/contacts`, contact);
  return response.data;
});
