/*
 *   File : attendance-marking.js
 *   Description : Attendance marking screen
 *   Integrations : react-native-safe-area-context, react-redux
 *   Version : v1.0
*/

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';

// manual import
import { PrimaryButton, SecondaryButton } from '../Components/Button';
import { Styles, COLORS, CONSTANTS } from '../../Theme';
import { markAttendance } from '../Store/attendanceSlice';

export default function AttendanceMarking ({ navigation }) {
  	const dispatch = useDispatch();
  	const [selectedStatus, setSelectedStatus] = useState(null);
  
	// Global data
	const attendanceStatuses = [
		{ 
			id: 'present', 
			label: 'Present', 
			color: COLORS.MID_GREEN 
		},
		{ 
			id: 'late', 
			label: 'Late Entry', 
			color: COLORS.GOLDEN_YELLOW
		},
		{ 
			id: 'early', 
			label: 'Early Out', 
			color: COLORS.DARK_ORANGE 
		},
		{ 
			id: 'wfh', 
			label: 'Work From Home', 
			color: COLORS.DODGER_BLUE 
		},
	];

	// Function - handle mark attendance
	const _handleMarkAttendance = () => {
		if (!selectedStatus) {
		Alert.alert('Error', 'Please select an attendance status');
		return;
		}

		const now = new Date();
		const payload = {
			date: now.toISOString().split('T')[0],
			status: selectedStatus.label,
			checkIn: now.toLocaleTimeString(),
			checkOut: null,
		};

		dispatch(markAttendance(payload));
		Alert.alert(
			'Success', 
			'Attendance marked successfully',
			[{ text: 'OK', onPress: () => navigation.goBack() }]
		);
	};

  return (
    <SafeAreaView style={[Styles.flexOne, Styles.justifyFlexEnd, { backgroundColor: 'rgba(0,0,0,0.6)'} ]}
		forceInset={CONSTANTS.forceInset}>
			
			{/* container */}
			<View style={[ Styles.padding16, Styles.backgroundColorWhite, Styles.borderTopLeftRadius8, Styles.borderTopRightRadius8, Styles.paddingBottom124 ]}>
				
				{/* title */}
				<View style={[ Styles.row, Styles.spaceBetween ]}>
					<View>
						<Text style={[ Styles.fontSize24, Styles.lineHeight29, Styles.marginBottom6, {fontWeight: 'bold'}]}>
							Mark Your Attendance
						</Text>
						<Text style={[ Styles.fontSize16, Styles.lineHeight21, Styles.colorCloudyGrey, Styles.marginBottom24 ]}>
							{new Date().toLocaleDateString('en-US', {
								weekday: 'long',
								year: 'numeric',
								month: 'long',
								day: 'numeric',
							})}
						</Text>
					</View>

					{/* close button */}
					<View style={[ Styles.paddingTop6, Styles.paddingRight8]}>
						<TouchableOpacity activeOpacity={CONSTANTS.activeOpacity}
							style={[ Styles.heightWidth24, Styles.borderRadius12, Styles.borderWidth3, Styles.alignSelfCenter]}
							onPress={() => navigation.goBack()}>
								<Text style={[ Styles.fontSize18, Styles.lineHeight21, Styles.colorBlack, Styles.textAlignCenter, {fontWeight: '500'}]}>
									X
								</Text>
						</TouchableOpacity>
					</View>
				</View>
				
				{/* attendance status button */}
				<View style={[ Styles.marginBottom24 ]}>
					{attendanceStatuses.map((status) => (
						<View  style={[ Styles.marginBottom12 ]}>
							<SecondaryButton label={status.label}
								key={status.id}
								statusColor={status.color}
								isSelected={selectedStatus?.id === status.id}
								onPress={() => setSelectedStatus(status)} />
						</View>
					))}
				</View>
				
				{/* submit button */}
				<PrimaryButton label={'Mark Attendance'}
					isDisable={!selectedStatus}
					onPress={() => _handleMarkAttendance()} />
			</View>
	</SafeAreaView>
  );
};