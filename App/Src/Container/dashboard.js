/*
 *   File : dashboard.js
 *   Description : Landing page || Dashboard screen
 *   Integrations : react-native-safe-area-context, react-redux
 *   Version : v1.0
*/

import React from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

// manual import
import { DashboardNavBar } from '../Components/Header';
import { SummaryCard } from '../Components/Cards';
import { PrimaryButton } from '../Components/Button';
import { Styles, CONSTANTS } from '../../Theme';

export default function Dashboard ({ navigation }) {	
	// state redux data
	const attendance = useSelector(state => state.attendance);

	// Navigation - attendance marking screen
	const _navigateToMarkAttendance = () => navigation.navigate('attendanceMarking');

	// Navigation - leave request screen
	const _navigateToLeaveRequest = () => navigation.navigate('leaveRequest');

	// Navigation - attendance history screen
	const _navigateToHistory = () => navigation.navigate('attendanceHistory');
  
	return (
		<SafeAreaView style={[ Styles.container ]}
			forceInset={CONSTANTS.forceInset}>
				<DashboardNavBar userName={'John Doe'}
					employId={'EMP/B2B/1024'} />
				<ScrollView bounces= {false}
					overScrollMode= {'never'}
					keyboardShouldPersistTaps= {'always'}
					nestedScrollEnabled= {true}
					persistentScrollbar={true}
					contentContainerStyle= {[ Styles.flexGrowOne, Styles.backgroundColorSmokeWhite, Styles.paddingBottom20]}
					showsVerticalScrollIndicator= {false}>
					
					{/* summary card */}
					<SummaryCard data={attendance} />

					{/* navigation buttons */}
					<View style={[ Styles.padding16 ]}>
						<PrimaryButton label={'Mark Attendance'}
							inStyle={[Styles.marginBottom16]}
							onPress={() => _navigateToMarkAttendance()} />

						<PrimaryButton label={'Request Leave'}
							inStyle={[Styles.marginBottom16]}
							onPress={() => _navigateToLeaveRequest()} />

						<PrimaryButton label={'View History'}
							inStyle={[Styles.marginBottom16]}
							onPress={() => _navigateToHistory()} />
					</View>
				</ScrollView>
		</SafeAreaView>
	);
};