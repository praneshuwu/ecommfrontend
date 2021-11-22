import { configureStore, combineReducers } from '@reduxjs/toolkit';

import cartReducer from './cartSlice';
import userReducer from './userSlice';
//BOILER PLATE START
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
  import storage from 'redux-persist/lib/storage'
  
  
  //CONFIG FOR THE PERSISTING STORAGE/REDUCER
  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }

  //BOILERPLATE END

  //COMBINE TWO REDUCERS INTO ONE USING COMBINE REDUCERS FUNCTION
  const rootReducer = combineReducers({user:userReducer, cart:cartReducer})
  
  //CREATE A REDUCER OUT OF PRE-EXISTING REDUCER AND THE CONFIG ABOVE, THAT PERSISTS BEYOND RELOADS
  const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer:  persistedReducer,
  //BOILER PLATE FOR PERSISTEDREDUCER
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

//EXPORTING A PERSISTING STORAGE INSTEAD OF NON-PERSISTING
export let persistor = persistStore(store)