import { createSlice } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'contacts',
    storage
}

const contactsStartState = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]

const contactsSlice = createSlice({
    name:'contacts',
    initialState: contactsStartState,
    reducers: {
        addContact: (state, action) =>  {
            state.contactsStartState = [action.payload, ...state.contactsStartState]
        },

        deleteContact: (state,action) => {
            state.contactsStartState = state.contactsStartState.filter(contact => contact.id !== action.payload)
        }
    }
})

export const persistedContactReducer = persistReducer(persistConfig, contactsSlice.reducer)
export const {addContact, deleteContact} = contactsSlice.actions