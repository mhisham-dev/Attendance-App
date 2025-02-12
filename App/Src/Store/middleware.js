// import { StorageService } from '../services/storage';
import { StorageService } from "../../Services/storage";

export const persistenceMiddleware = store => next => action => {
  const result = next(action);
  
  // Save state after specific actions
  if (
    action.type.startsWith('attendance/') ||
    action.type.startsWith('leave/')
  ) {
    const state = store.getState();
    StorageService.saveAttendanceData(state.attendance);
    StorageService.saveLeaveRequests(state.leave.leaveRequests);
  }
  
  return result;
};