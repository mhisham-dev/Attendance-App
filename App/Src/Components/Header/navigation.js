/*
 *   File : navigation.js
 *   Description : default navigation bar
 *   Integrations : Null
 *   Version : v1.0
*/

import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Manual imports
import { Styles, COLORS, CONSTANTS } from '../../../Theme';

export default function DefaultNavigationBar(props) {

    // navigation variable
    const navigation = useNavigation();

    // navigation - Go back
    const _handleBack = () => navigation.goBack();
    
    return (
        <View style= {[Styles.padding16, Styles.row, Styles.spaceBetween, Styles.alignItemsCenter, Styles.backgroundColorTransparent]}>
            <View style= {[Styles.row, Styles.alignItemsCenter]}>

                {/* back button */}
                <TouchableOpacity activeOpacity= {CONSTANTS.activeOpacity}
                    style={[Styles.heightWidth40, Styles.borderWidth4, Styles.center, Styles.borderRadius12, Styles.backgroundColorWhite, {borderColor: 'rgba(246, 247, 251, 0.24)'} ]}
                    onPress= {()=> _handleBack()}>
                        <Image style= {Styles.heightWidth24}
                            resizeMode= {'contain'}
                            source= {require('../../../Assets/images/back.png')} />
                </TouchableOpacity>

                {/* title */}
                <View style= {[Styles.marginLeft20]}>
                    <Text style= {[ Styles.fontSize22, Styles.lineHeight26, Styles.colorBlack, { fontWeight: 'bold'}]}
                        numberOfLines= {1}>
                        {props.title}
                    </Text>
                </View>
                
            </View>
        </View>
    );
};
