import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "./filterSlice";
import { persistedContactReducer } from "./contactsSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'

export const store = configureStore({
reducer: {
    contacts: persistedContactReducer,
    filter: filterSlice.reducer
},
middleware: (getDefaultMiddleware) =>
getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
}),
})
export const persistor = persistStore(store)