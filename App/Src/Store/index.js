
import { configureStore } from '@reduxjs/toolkit';
import attendanceReducer from './attendanceSlice';
import leaveReducer from './leaveSlice';
import { persistenceMiddleware } from './middleware';

export const store = configureStore({
  reducer: {
    attendance: attendanceReducer,
    leave: leaveReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(persistenceMiddleware),
});

// Initialize store with persisted data
export const initializeStore = async () => {
  const attendanceData = await StorageService.loadAttendanceData();
  const leaveRequests = await StorageService.loadLeaveRequests();

  if (attendanceData) {
    store.dispatch({
      type: 'attendance/initialize',
      payload: attendanceData,
    });
  }

  if (leaveRequests) {
    store.dispatch({
      type: 'leave/initialize',
      payload: leaveRequests,
    });
  }
};