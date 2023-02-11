import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    // ==Actions
    addContactToStore: (state, { payload }) => {
      state.contacts = [...state.contacts, payload];
    },

    deleteContactFromStore: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },

    filterContactsToStore: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const {
  addContactToStore,
  deleteContactFromStore,
  filterContactsToStore,
} = contactsSlice.actions;

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
