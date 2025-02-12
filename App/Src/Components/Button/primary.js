/*
 *   File : primary.js
 *   Description : Primary Button
 *   Integrations : Null
 *   Version : v1.0
*/

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// manual import
import { Styles, CONSTANTS } from '../../../Theme';

export default function PrimaryButton (props) {
    return (
        <TouchableOpacity style= {[ Styles.padding16, Styles.borderRadius8, Styles.center, props.isDisable ? Styles.backgroundColorSilver : Styles.backgroundColorDodgerBlue, props.inStyle && props.inStyle ]}
            activeOpacity= {CONSTANTS.activeOpacity}    
            disabled={props.isDisable}
            onPress= {()=> props.onPress()}>
                <Text style= {[ Styles.fontSize16, Styles.lineHeight21, Styles.colorWhite, {fontWeight: '600'} ]}>
                    {props.label}
                </Text>
        </TouchableOpacity>
    );
}

