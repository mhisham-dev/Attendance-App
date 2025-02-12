import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  leaveRequests: [],
  leaveTypes: ['Sick Leave', 'Vacation', 'Personal Leave', 'Work From Home'],
};

const leaveSlice = createSlice({
  name: 'leave',
  initialState,
  reducers: {
    submitLeaveRequest: (state, action) => {
      state.leaveRequests.push({
        ...action.payload,
        id: Date.now(),
        status: 'Pending',
      });
    },
    initialize: (state, action) => {
      return { 
        ...state, 
        leaveRequests: action.payload 
      };
    },
  },
});

export const { submitLeaveRequest, initialize } = leaveSlice.actions;
export default leaveSlice.reducer;