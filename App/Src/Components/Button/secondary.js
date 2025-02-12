/*
 *   File : primary.js
 *   Description : secondary Button
 *   Integrations : Null
 *   Version : v1.0
*/

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// manual import
import { Styles, CONSTANTS } from '../../../Theme';

export default function SecondaryButton (props) {
    return (
        <TouchableOpacity style= {[ Styles.padding16, Styles.borderRadius8, Styles.borderWidth4, Styles.center, props.isSelected ? Styles.backgroundColorVistaWhite : Styles.backgroundColorWhite, {borderColor: props.statusColor} ]}
            activeOpacity= {CONSTANTS.activeOpacity}
            key={props.key}
            disabled={props.isDisable}
            onPress= {()=> props.onPress()}>
                <Text style= {[ Styles.fontSize16, Styles.lineHeight21, props.isSelected && Styles.opacity80, {fontWeight: '600', color: props.statusColor} ]}>
                    {props.label}
                </Text>
        </TouchableOpacity>
    );
}

