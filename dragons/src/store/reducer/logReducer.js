import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

const logSlice = createSlice({
  name: 'logs',
  initialState: [],
  reducers: {
    logAction: (state, action) => {
      state.push({
        timestamp: moment().format('YYYY-MM-DD HH:mm:ss'),
        action: action.payload,
      });
    },
    clearLogs: (state) => {
      return [];
    },
  },
});

export const { logAction, clearLogs } = logSlice.actions;
export default logSlice.reducer;
