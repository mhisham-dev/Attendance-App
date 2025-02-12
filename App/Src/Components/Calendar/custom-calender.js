/*
 *   File : custom-calender.js
 *   Description : custom calender card
 *   Integrations : react-native-calendars
 *   Version : v1.0
*/

import React from 'react';
import { Text, View } from 'react-native';
import { Calendar } from 'react-native-calendars';

// Manual imports
import { Styles, COLORS } from '../../../Theme';

export default function CalenderCard(props) {
    return (
        <Calendar style={[ Styles.borderBottomWidth2, Styles.borderBottomColorPlatiniumWhite, Styles.paddingBottom12]}
            markedDates={props.markedDates}
            onDayPress={(day) => props.onDayPress(day)}
            theme={{
                selectedDayBackgroundColor: COLORS.DODGER_BLUE,
                todayTextColor: COLORS.DODGER_BLUE,
                dotColor: COLORS.DODGER_BLUE,
                arrowColor: COLORS.DODGER_BLUE,
            }}
        />
    );
}