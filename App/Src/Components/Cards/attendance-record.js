/*
 *   File : attendance-record.js
 *   Description : Attendance record card
 *   Integrations : Null
 *   Version : v1.0
*/

import React from 'react';
import { Text, View } from 'react-native';

// Manual imports
import { Styles, COLORS, CONSTANTS } from '../../../Theme';

export default function AttendanceRecordCard(props) {
    
    return (
        <View style={[ Styles.row, Styles.backgroundColorWhite, Styles.borderRadius8, Styles.padding16, Styles.marginBottom12 ]}>
            <View style={[ Styles.marginRight16, Styles.justifyCenter ]}>
                <Text style={[ Styles.fontSize14, Styles.colorCloudyGrey, { fontWeight: 'bold'}]}>
                    {new Date(props.data.date).toLocaleDateString('en-US', {
                        weekday: 'short',
                        month: 'short',
                        day: 'numeric'
                    })}
                </Text>
            </View>

            <View style={[ Styles.flexOne ]}>
                <View style={[Styles.alignSelfFlexStart, Styles.paddingHorizontal12, Styles.paddingVertical4, Styles.borderRadius12, Styles.marginBottom8, { backgroundColor: props.statusColor }]}>
                    <Text style={[ Styles.fontSize12, Styles.colorWhite, {fontWeight: 'bold'}]}>
                        {props.data.status}
                    </Text>
                </View>

                <View style={[ Styles.row, Styles.spaceBetween]}>
                    <Text style={[ Styles.fontSize12, Styles.colorCloudyGrey, {fontWeight: '700'} ]}>
                        In:{' '}
                        <Text style={{fontWeight: '500'}}>{props.data.checkIn}</Text>
                    </Text>
                    {props.data.checkOut && (
                        <Text style={[ Styles.fontSize12, Styles.colorCloudyGrey, {fontWeight: '700'} ]}>
                            Out:{' '}
                            <Text style={{fontWeight: '500'}}>{props.data.checkOut}</Text>
                        </Text>
                    )}
                </View>

            </View>
     
        </View>
    );
}