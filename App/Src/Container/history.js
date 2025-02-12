/*
 *   File : history.js
 *   Description : View History screen
 *   Integrations : react-native-safe-area-context, react-redux
 *   Version : v1.0
*/

import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

// manual import
import { CalenderCard } from '../Components/Calendar';
import { AttendanceRecordCard } from '../Components/Cards';
import { Styles, COLORS, CONSTANTS } from '../../Theme';

import { NavigationBar } from '../Components/Header';

export default function AttendanceHistory () {
	const [selectedDate, setSelectedDate] = useState('');
  	const attendanceHistory = useSelector(state => state.attendance.attendanceHistory);
  
	// Process attendance data for calendar marking
	const markedDates = attendanceHistory.reduce((acc, record) => {
		const color = getStatusColor(record.status);

		acc[record.date] = { marked: true, dotColor: color };
		return acc;
	}, {});

	// Function - return colour based on status
	function getStatusColor(status) {
		switch (status) {
		case 'Present':
			return COLORS.MID_GREEN;
		case 'Absent':
			return COLORS.CORAL_RED;
		case 'Late Entry':
			return COLORS.GOLDEN_YELLOW;
		case 'Early Out':
			return COLORS.DARK_ORANGE;
		case 'Work From Home':
			return COLORS.DODGER_BLUE;
		default:
			return COLORS.SMOKEY_GREY;
		}
	};

	return (
		<SafeAreaView style={[ Styles.container ]}
			forceInset={CONSTANTS.forceInset}>

				<NavigationBar title={'Attendance History'}/>
				
				{/* Calender */}
				<CalenderCard markedDates={markedDates}
					onDayPress={(day) => setSelectedDate(day.dateString)} 
				/>

				<View style={[ Styles.flexOne, Styles.padding16]}>
					{/* title */}
					<Text style={[ Styles.fontSize18, Styles.marginBottom16, Styles.colorDarkGrey, { fontWeight: 'bold'}]}>
						Attendance Records
					</Text>
					
					{/* record list */}
					<FlatList data={attendanceHistory}
						keyExtractor={(item) => item.date}
						showsVerticalScrollIndicator={false}
						bounces={false}
						renderItem={ ({item, index}) => 
							<AttendanceRecordCard data={item}
								statusColor={getStatusColor(item.status)}/>
						}
					/>
				</View>
		</SafeAreaView>
	);
};