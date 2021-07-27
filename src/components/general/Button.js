import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import { Color, Dimensions, Font } from '../../helper'
import { Icon } from "native-base";

const Button = (props) => {
    return (
        <TouchableOpacity
            style={[styles.container, props.containerStyle]}
            onPress={props.onPress}>
            {props.icon ?
                <Icon name={props.iconname} type={props.iconType} style={props.iconStyle} />
                : null}
            <Text style={[styles.textStyle, props.textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#2667c2',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
        shadowOpacity: 0.2,
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 2 },
    },
    textStyle: {
        fontSize: 20,
        color: '#fff',
        // fontWeight: 'bold',
        fontFamily: Font.RobotoSlabRegular

    }
});

export default Button;
