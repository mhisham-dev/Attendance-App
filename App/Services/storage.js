import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEYS = {
  ATTENDANCE: '@attendance_data',
  LEAVE_REQUESTS: '@leave_requests',
};

export const StorageService = {
  // Save attendance data
  saveAttendanceData: async (data) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.ATTENDANCE, JSON.stringify(data));
    } catch (error) {
      console.error('Error saving attendance data:', error);
    }
  },

  // Load attendance data
  loadAttendanceData: async () => {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEYS.ATTENDANCE);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Error loading attendance data:', error);
      return null;
    }
  },

  // Save leave requests
  saveLeaveRequests: async (requests) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.LEAVE_REQUESTS, JSON.stringify(requests));
    } catch (error) {
      console.error('Error saving leave requests:', error);
    }
  },

  // Load leave requests
  loadLeaveRequests: async () => {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEYS.LEAVE_REQUESTS);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error loading leave requests:', error);
      return [];
    }
  },

  // Clear all data (for logout/reset)
  clearAllData: async () => {
    try {
      await AsyncStorage.multiRemove([
        STORAGE_KEYS.ATTENDANCE,
        STORAGE_KEYS.LEAVE_REQUESTS,
      ]);
    } catch (error) {
      console.error('Error clearing data:', error);
    }
  },
};
