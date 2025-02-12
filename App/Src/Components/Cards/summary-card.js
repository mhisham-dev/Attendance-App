/*
 *   File : summary-card.js
 *   Description : status summary card component with pie chart
 *   Integrations : react-native-chart-kit
 *   Version : v1.0
*/

import React from 'react';
import { Text, View } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

// Manual imports
import { Styles, COLORS, CONSTANTS } from '../../../Theme';

export default function SummaryCard({data}) {

    const chartData = [
		{
			name: 'Present',
			population: data.totalPresent,
			color: '#4CAF50',	// MID_GREEN
			legendFontColor: '#7F7F7F',	// GRANITE_GREY
		},
		{
			name: 'Absent',
			population: data.totalAbsent,
			color: '#F44336',	// CORAL_RED
			legendFontColor: '#7F7F7F',	// GRANITE_GREY
		},
		{
			name: 'Leave',
			population: data.totalLeave,
			color: '#FFC107',	// GOLDEN_YELLOW
			legendFontColor: '#7F7F7F', // GRANITE_GREY
		},
	];
    
    return (
        <View style={[ Styles.padding16, Styles.backgroundColorWhite, Styles.margin16, Styles.borderRadius8, Styles.cardShadow ]}>
            {/* title */}
            <Text style={[ Styles.fontSize24, Styles.marginBottom16, Styles.colorBlack, {fontWeight: 'bold'}]}>
                Attendance Summary
            </Text>

            {/* status container */}
            <View style={[ Styles.row, Styles.spaceBetween, Styles.marginBottom24 ]}>
                <View style={[ Styles.flexOne, Styles.alignItemsCenter, Styles.padding12, Styles.backgroundColorVistaWhite, Styles.borderRadius8, Styles.marginHorizontal4]}>
                    <Text style={[ Styles.fontSize24, Styles.colorDodgerBlue, { fontWeight: 'bold'}]}>
                        {data.totalDaysWorked}
                    </Text>
                    <Text style={[ Styles.fontSize12, Styles.colorCloudyGrey, Styles.marginTop4, Styles.textAlignCenter ]}>
                        Days Worked
                    </Text>
                </View>
                <View style={[ Styles.flexOne, Styles.alignItemsCenter, Styles.padding12, Styles.backgroundColorVistaWhite, Styles.borderRadius8, Styles.marginHorizontal4]}>
                    <Text style={[ Styles.fontSize24, Styles.colorDodgerBlue, { fontWeight: 'bold'}]}>
                        {data.leaveBalance}
                    </Text>
                    <Text style={[ Styles.fontSize12, Styles.colorCloudyGrey, Styles.marginTop4, Styles.textAlignCenter ]}>
                        Leave Balance
                    </Text>
                </View>
                <View style={[ Styles.flexOne, Styles.alignItemsCenter, Styles.padding12, Styles.backgroundColorVistaWhite, Styles.borderRadius8, Styles.marginHorizontal4]}>
                    <Text style={[ Styles.fontSize24, Styles.colorDodgerBlue, { fontWeight: 'bold'}]}>
                        {data.pendingRequests}
                    </Text>
                    <Text style={[ Styles.fontSize12, Styles.colorCloudyGrey, Styles.marginTop4, Styles.textAlignCenter ]}>
                        Pending Requests
                    </Text>
                </View>
            </View>

            {/* pie chart */}
            <View style={[ Styles.alignItemsCenter, Styles.marginTop16 ]}>
                <PieChart data={chartData}
                    width={CONSTANTS.Width300}
                    height={CONSTANTS.Width200}
                    chartConfig={{
                        backgroundColor: COLORS.WHITE,
                        backgroundGradientFrom: COLORS.WHITE,
                        backgroundGradientTo: COLORS.WHITE,
                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    }}
                    accessor="population"
                    backgroundColor="transparent"
                    paddingLeft="15" />
            </View>
        </View>
    );
}