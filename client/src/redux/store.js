import {configureStore} from '@reduxjs/toolkit';
import userSlice from './userSlice';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const presistConfig ={
    key: 'root',
    storage
} ;
const persistedReducer = persistReducer(presistConfig, userSlice)

const rootReducer = configureStore({
    reducer:{
        user: persistedReducer
    }
})

const presistor = persistStore(rootReducer)

export{ rootReducer , presistor};