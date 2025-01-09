import { configureStore } from '@reduxjs/toolkit';
import dragonReducer from './reducer/dragonReducer';
import logReducer from './reducer/logReducer';

const store = configureStore({
  reducer: {
    dragons: dragonReducer,
    logs: logReducer
  },
});

export default store;
