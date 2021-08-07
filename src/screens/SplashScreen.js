import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, ImageBackground, FlatList, Dimensions, TextInput } from 'react-native'
import { Color, Font } from '../helper'

import { BaseScreen, AuthInput } from '../components';
import SignIn from './SignIn';
import routes from '../helper/routes';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SplashScreen = (props) => {

    return (
        <BaseScreen>
            <View style={styles.container}>
                <View style={{ alignItems: 'center', width: '100%', height: '60%' }} >
                    <Image source={require("../assets/images/common/logo.png")}
                        style={{ height: '140%', width: "50%" }}
                        resizeMode='contain' />

                </View>


                <View style={{ height: '30%', justifyContent: 'flex-end' }}>
                    <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate(routes.SIGNIN_SCREEN)} >
                        <Text style={styles.buttonText}>Login</Text>

                    </TouchableOpacity>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', height: '8%' }} >
                    <TouchableOpacity style={{}} onPress={() => props.navigation.navigate(routes.SIGNUP_SELECTION_SCREEN)}  >
                        <Text style={{ fontSize: 16, color: Color.Black, fontFamily: Font.LatoBold, fontWeight: 'bold' }} > Not registered? Signup here </Text>
                    </TouchableOpacity>
                </View>



            </View>
        </BaseScreen>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.White
    },
    emailTextStyle: {
        marginTop: 20,
        marginLeft: '8%',
        marginBottom: 8,
        // fontWeight: 'bold',
        color: 'blue'

    },
    textInputStyle: {
        backgroundColor: '#fff',
        width: windowWidth * 0.9,
        height: windowWidth * 0.12,
        // padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'blue',
        alignSelf: 'center',

    },

    button: {
        backgroundColor: Color.mainOrange,
        width: windowWidth * 0.9,
        height: windowWidth * 0.12,
        marginTop: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        elevation: 5,
    },
    buttonText: {
        fontSize: 22,
        fontFamily: Font.LatoBold,
        color: '#fff',
        fontWeight: 'bold'
    },

})

export default SplashScreen;