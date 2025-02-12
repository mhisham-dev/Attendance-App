/*
 *   File : dashboard-header.js
 *   Description : dashboard header
 *   Integrations : Null
 *   Version : v1.0
*/

import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Manual imports
import { Styles, CONSTANTS } from '../../../Theme';

export default function DashboardNavBar(props) {

    // navigation variable
    const navigation = useNavigation();

    // navigation - notifications screen
    const _handleBellIcon = () => navigation.navigate('notifications');
    
    return (
        <View style= {[ Styles.padding16, Styles.row, Styles.spaceBetween, Styles.alignItemsCenter, Styles.backgroundColorWhite ]}>
            {/* <View style= {[ Styles.flexOne, Styles.row, Styles.alignItemsCenter]}> */}

                {/* user avatar */}
                <TouchableOpacity activeOpacity= {CONSTANTS.activeOpacity}
                    style={[Styles.heightWidth72, Styles.borderWidth4, Styles.center, Styles.borderRadius100, Styles.backgroundColorWhite, {borderColor: 'rgba(246, 247, 251, 0.24)'} ]}
                    onPress= {()=> {}}>
                        <Image style= {Styles.heightWidth72}
                            resizeMode= {'contain'}
                            source= {require('../../../Assets/images/user-icon.png')} />
                </TouchableOpacity>

                {/* User name */}
                <View style= {[ Styles.flexOne, Styles.marginLeft14]}>
                    <Text style= {[ Styles.fontSize20, Styles.lineHeight26, Styles.colorBlack, { fontWeight: 'bold'}]}
                        numberOfLines= {2}>
                        {props.userName},
                    </Text>
                    <Text style= {[ Styles.fontSize12, Styles.lineHeight17, Styles.colorSilver, { fontWeight: '500'}]}
                        numberOfLines= {1}>
                        {props.employId}
                    </Text>
                </View>

                {/* notification icon */}
                <TouchableOpacity activeOpacity= {CONSTANTS.activeOpacity}
                    style={[Styles.heightWidth40, Styles.borderWidth4, Styles.center, Styles.borderRadius12, Styles.backgroundColorWhite, {borderColor: 'rgba(246, 247, 251, 0.24)'} ]}
                    onPress= {()=> _handleBellIcon()}>
                        <Image style= {Styles.heightWidth24}
                            resizeMode= {'contain'}
                            source= {require('../../../Assets/images/bell.png')} />
                </TouchableOpacity>
                
            {/* </View> */}
        </View>
    );
};
