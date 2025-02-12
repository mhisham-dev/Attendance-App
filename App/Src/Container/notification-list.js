/*
 *   File : notification-list.js
 *   Description : notifications screen
 *   Integrations : Null
 *   Version : v1.0
*/

import React from "react";
import { FlatList } from 'react-native';
import SafeAreaView  from 'react-native-safe-area-view';

// manual import
import { NotificationCard } from "../Components/Cards";
import { NavigationBar } from "../Components/Header";
import { Styles, CONSTANTS } from "../../Theme";

export default function Notification () {
    return (
        <SafeAreaView style={[ Styles.container ]}
            forceInset={CONSTANTS.forceInset}>

            {/* Header - navigation bar */}
            <NavigationBar title={'Notifications'}/>

            {/* list */}
            <FlatList data= {[1,2,3,4,5,6,7,8,9,10,11]}
                bounces= {false}
                style= {[Styles.flexOne]}
                contentContainerStyle= {[Styles.flexGrowOne, Styles.paddingBottom24, Styles.paddingHorizontal12]}
                showsVerticalScrollIndicator= {false}
                renderItem= {(item) => (
                        <NotificationCard label={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'}
                            date={'Feb 12 2025, 2:30 PM'}
                            onPress= {() => {}}/>
                )} />  
        </SafeAreaView>
    )
}