import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "./filterSlice";
import { persistedContactReducer } from "./contactsSlice";

export const store = configureStore({
reducer: {
    contacts: persistedContactReducer,
    filter: filterSlice.reducer
},
middleware: 
})
export const persistor = persistStore(store)