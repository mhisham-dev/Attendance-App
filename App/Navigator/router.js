/*  
 *  File : router.js
 *  Description : router for the app
 *  Integrations : @react-navigation/stack, @react-navigation/native, react-redux
 *  Version : v1.0
*/

import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

// manual import
import { store } from '../Src/Store';
import { StorageService } from '../Services/storage';
import { AttendanceHistory, AttendanceMarking, Dashboard, LeaveRequest, Notification } from '../Src/Container';

const Stack = createStackNavigator();

const AppContent = () => {
	useEffect(() => {
		const initStore = async () => {
			try {
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
			} catch (error) {
				console.error('Error initializing store:', error);
			}
		};

		initStore();
	}, []);

	return (
		<NavigationContainer>
			<Stack.Navigator headerShown='none'>
				<Stack.Screen name="dashboard" // Dashboard
					component={Dashboard} 
					options={{ 
						headerShown: false 
					}} />
				<Stack.Screen name="leaveRequest" // Request Leave
					component={LeaveRequest} 
					options={{ 
						headerShown: false,
						presentation: 'transparentModal',
					}} />
				<Stack.Screen name="attendanceMarking" 
					component={AttendanceMarking} 
					options={{ 
						headerShown: false,
						presentation: 'transparentModal',
					}} />
				<Stack.Screen name="attendanceHistory" 
					component={AttendanceHistory} 
					options={{ 
						headerShown: false 
					}} />
				<Stack.Screen name="notifications" 
					component={Notification} 
					options={{ 
						headerShown: false 
					}} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

const App = () => {
	return (
		<Provider store={store}>
			<AppContent />
		</Provider>
	);
};

export default App;