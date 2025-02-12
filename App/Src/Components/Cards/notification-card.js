/*
 *   File : notification-card.js
 *   Description : Notification Card
 *   Integrations : Null
 *   Version : v1.0
*/

import React from 'react';
import { Text, View } from 'react-native';

// Manual imports
import { Styles } from '../../../Theme';

export default function NotificationCard(props) {
    
    return (
        <View style={[ Styles.backgroundColorWhite, Styles.borderRadius8, Styles.padding16, Styles.marginBottom6 ]}>
            <View style={[Styles.alignSelfFlexStart, Styles.paddingRight8, Styles.marginBottom4 ]}>
                <Text style={[ Styles.fontSize14, Styles.lineHeight19, Styles.colorDarkGrey, {fontWeight: 'bold'}]}
                    numberOfLines={2}>
                    {props.label}
                </Text>
            </View>

            <View style={[ Styles.alignSelfFlexEnd]}>
                <Text style={[ Styles.fontSize12, Styles.colorSmokeyGrey, {fontWeight: '700'} ]}>
                    {props.date}
                </Text>
            </View>
        </View>
    );
}