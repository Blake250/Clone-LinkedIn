import { createStore, applyMiddleware } from "redux";
//import rootReducer from "../reducers";
import ThunkMiddleware from "redux-thunk";
import { configureStore, combineReducers  } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";
import thunk from "redux-thunk"
import authSlice from "../reducers/userReducer";

import {
 
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'



const rootReducer = combineReducers({
  user : authSlice
})


const persistConfig = {
  key: 'value',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

 const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
  devTools:process.env.NODE_ENV !== "production"

})


export default store



