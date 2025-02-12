import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalDaysWorked: 45,
  leaveBalance: 15,
  pendingRequests: 2,
  totalPresent: 40,
  totalAbsent: 3,
  totalLeave: 2,
  attendanceHistory: [
    {
      date: '2024-02-10',
      status: 'Present',
      checkIn: '09:00 AM',
      checkOut: '06:00 PM',
    },
  ],
};

const attendanceSlice = createSlice({
  name: 'attendance',
  initialState,
  reducers: {
    markAttendance: (state, action) => {
      const { date, status, checkIn, checkOut } = action.payload;
      state.attendanceHistory.unshift({ date, status, checkIn, checkOut });
      if (status === 'Present') state.totalPresent += 1;
      if (status === 'Absent') state.totalAbsent += 1;
      state.totalDaysWorked += 1;
    },
    initialize: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { markAttendance, initialize } = attendanceSlice.actions;
export default attendanceSlice.reducer;