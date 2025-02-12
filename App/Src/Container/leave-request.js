/*
 *   File : leave-request.js
 *   Description : leave request form
 *   Integrations : react-native-safe-area-context, react-redux
 *   Version : v1.0
*/

import React, { useState, Fragment } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert, KeyboardAvoidingView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';

// manual import
import { PrimaryButton } from '../Components/Button';
import { Styles, COLORS, CONSTANTS } from '../../Theme';
import { submitLeaveRequest } from '../Store/leaveSlice';

export default function LeaveRequest ({ navigation }) {
	
	// redux variable
	const dispatch = useDispatch();
	const leaveTypes = useSelector(state => state.leave.leaveTypes);
	
	// state variable
	const [showStartDate, setShowStartDate] = useState(false);
	const [showEndDate, setShowEndDate] = useState(false);
	const [formData, setFormData] = useState({
		leaveType: leaveTypes[0],
		startDate: new Date(),
		endDate: new Date(),
		reason: '',
	});

	// Function - handle sumbit leave request
	const _handleSubmit = () => {
		if (!formData.reason.trim()) {
		Alert.alert('Error', 'Please provide a reason for your leave');
		return;
		}

		if (formData.endDate < formData.startDate) {
		Alert.alert('Error', 'End date cannot be before start date');
		return;
		}

		const serializedFormData = {
			...formData,
			startDate: formData.startDate.toISOString(),
			endDate: formData.endDate.toISOString(),
		};

		dispatch(submitLeaveRequest(serializedFormData));
		Alert.alert(
		'Success',
		'Your leave request has been submitted successfully',
		[{ text: 'OK', onPress: () => navigation.goBack() }]
		);
	};

	return (
		<SafeAreaView style={[Styles.flexOne, Styles.justifyFlexEnd, { backgroundColor: 'rgba(0,0,0,0.6)'} ]}
			forceInset={CONSTANTS.forceInset}>
			<KeyboardAvoidingView behavior= {Platform.OS === 'ios' ? 'padding' : null}
				enabled= {true}
				style= {[Styles.flexOne, Styles.justifyFlexEnd]}>
					<View style={[ Styles.padding16, Styles.backgroundColorWhite, Styles.borderRadius8 ]}>

						{/* title */}
						<View style={[ Styles.row, Styles.spaceBetween, Styles.marginBottom32 ]}>
							<View>
								<Text style={[ Styles.fontSize24, Styles.lineHeight29, Styles.marginBottom6, {fontWeight: 'bold'}]}>
									Leave Form
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
						
						{/* leave type - dropdown */}
						<Fragment>
							<Text style={[ Styles.fontSize16, Styles.marginBottom8, Styles.colorCloudyGrey, {fontWeight: 'bold'}]}>
								Leave Type
							</Text>
							<View style={[ Styles.borderWidth2, Styles.borderColorLightGrey, Styles.borderRadius8, Styles.marginBottom16 ]}>
								<Picker selectedValue={formData.leaveType}
									onValueChange={(value) => setFormData({ ...formData, leaveType: value })}
									style={Styles.height48}>
										{ leaveTypes.map((type) => (
										<Picker.Item key={type} label={type} value={type} />
										))}
								</Picker>
							</View>
						</Fragment>
						
						{/* date picker */}
						<Fragment>
							<Text style={[ Styles.fontSize16, Styles.marginBottom8, Styles.colorCloudyGrey, {fontWeight: 'bold'}]}>
								Start Date
							</Text>
							<TouchableOpacity activeOpacity={CONSTANTS.activeOpacity}
								style={[ Styles.padding12, Styles.borderWidth2, Styles.borderColorLightGrey, Styles.borderRadius8, Styles.marginBottom16 ]}
								onPress={() => setShowStartDate(true)}>
								<Text>
									{formData.startDate.toLocaleDateString()}
								</Text>
							</TouchableOpacity>

							{showStartDate &&
								<DateTimePicker
									value={formData.startDate}
									mode="date"
									onChange={(event, date) => {
									setShowStartDate(false);
									if (date) {
										setFormData({ ...formData, startDate: date });
									}
									}} />
							}
						</Fragment>

						{/* date picker */}
						<Fragment>
							<Text style={[ Styles.fontSize16, Styles.marginBottom8, Styles.colorCloudyGrey, {fontWeight: 'bold'}]}>
								End Date
							</Text>
							<TouchableOpacity activeOpacity={CONSTANTS.activeOpacity}
								style={[ Styles.padding12, Styles.borderWidth2, Styles.borderColorLightGrey, Styles.borderRadius8, Styles.marginBottom16 ]}
								onPress={() => setShowEndDate(true)}>
									<Text>
										{formData.endDate.toLocaleDateString()}
									</Text>
							</TouchableOpacity>

							{showEndDate && 
								<DateTimePicker
									value={formData.endDate}
									mode="date"
									onChange={(event, date) => {
										setShowEndDate(false);
										if (date) setFormData({ ...formData, endDate: date });
									}} />
							}
						</Fragment>

						{/* Reason input field */}
						<Fragment>
							<Text style={[ Styles.fontSize16, Styles.marginBottom8, Styles.colorCloudyGrey, {fontWeight: 'bold'}]}>
								Reason
							</Text>
							<TextInput style={[ Styles.borderWidth2, Styles.borderColorLightGrey, Styles.borderRadius8, Styles.padding12, Styles.marginBottom16, Styles.textAlignVerticalTop, Styles.minHeight100 ]}
								placeholder={'Please provide a reason for your leave request'} 
								value={formData.reason}
								multiline={true}
								numberOfLines={4}
								onChangeText={(text) => 
									setFormData({ ...formData, reason: text })
								} />
						</Fragment>

						<PrimaryButton label={'Submit Request'}
							inStyle={Styles.marginTop16}
							onPress={()=>_handleSubmit()} />
					</View>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
};