import React from 'react';

import { Image, TouchableOpacity, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { Color } from '../../../helper';
import { IconType } from '../../../helper/iconType';
import { styles } from './CustomerHeaderLogo.styles';


const CustomHeaderLogo = () => {

    return (
        <View style={[styles.headerBox]} >

            <View style={{ alignItems: 'center', width: '50%', }} >

                <Image source={require("../../../assets/images/common/logo.png")}
                    style={{ width: "50%" }}
                    resizeMode='contain' />
            </View>

        </View>
    )
}
export default CustomHeaderLogo;