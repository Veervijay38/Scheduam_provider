import React from 'react';

import { Image, TouchableOpacity, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { Color } from '../../helper';
import { IconType } from '../../helper/iconType';
import { styles } from './CustomHeaderWithBadge.styles';


const CustomHeaderWithBadge = () => {

    return (
        <View style={[styles.headerBox]} >
            <Icon type={IconType.EnTypo} name='menu' size={35} color={Color.mainOrange} />
            <View style={{ alignItems: 'center', width: '50%' }} >

                <Image source={require("../../assets/images/common/logo.png")}
                    style={{ width: "50%" }}
                    resizeMode='contain' />
            </View>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <TouchableOpacity
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        // width: props?.size ? props.size + 10 : 20,
                        // height: props.size ? props.size + 10 : 30,
                    }}>
                    <Icon type={IconType.MaterialCommunity} name='calendar-account' size={35} color={Color.mainOrange} />
                    <View
                        style={{
                            position: 'absolute',
                            top: -5,
                            left: 20,
                            width: 20,
                            height: 20,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                            backgroundColor: Color.Black
                        }}>
                        <Text style={
                            {
                                fontSize: 12,
                                color: 'white',
                            }}>{2}</Text>
                    </View>
                </TouchableOpacity>
            </View>
            {/* <Icon type={IconType.EnTypo} name='menu' size={24} color={Color.maingreen} /> */}
        </View>
    )
}
export default CustomHeaderWithBadge;