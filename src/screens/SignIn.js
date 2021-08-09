import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, ImageBackground, FlatList, Dimensions, TextInput } from 'react-native'
import { Color, Font } from '../helper'
import { BaseScreen } from '../components';
import routes from '../helper/routes';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const SignIn = (props) => {

    return (
        <BaseScreen>
            <View style={styles.container}>
                <View style={{ alignItems: 'center', width: '100%', height: '35%' }} >
                    <Image source={require("../assets/images/common/logo.png")}
                        style={{ height: '100%', width: "65%" }}
                        resizeMode='contain' />

                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 25, color: Color.Black, fontFamily: Font.LatoBold, fontWeight: 'bold' }}>Login</Text>
                </View>

                <View>

                    <Text style={styles.emailTextStyle}>
                        Email address
                    </Text>
                    <TextInput
                        style={styles.textInputStyle}
                        // value={email}
                        // onChangeText={(email) => setEmail(email.trim())}
                        autoCapitalize='none'
                        returnKeyType='next'
                    />
                    <Text style={styles.emailTextStyle}>
                        Password
                    </Text>
                    <TextInput
                        style={styles.textInputStyle}
                        // value={email}
                        // onChangeText={(email) => setEmail(email.trim())}
                        autoCapitalize='none'
                        returnKeyType='next'
                    />
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', height: '8%' }} >
                    <Text style={{ fontSize: 16, color: Color.mainOrange, fontFamily: Font.LatoBold, fontWeight: 'bold' }} > Forgot Password? </Text>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', height: '8%' }} >
                    <TouchableOpacity style={{}} onPress={() => props.navigation.navigate(routes.SIGNUP_SELECTION_SCREEN)} >
                        <Text style={{ fontSize: 16, fontFamily: Font.LatoBold, color: Color.Black, fontWeight: '900' }} > Not registered? Signup here </Text>
                    </TouchableOpacity>
                </View>



                <View>
                    <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate(routes.AUTH_NAVIGATOR)} >
                        <Text style={styles.buttonText}>Login</Text>

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
        fontFamily: Font.LatoBold,
        // fontWeight: 'bold',
        color: Color.mainOrange,
        fontWeight: 'bold',
        fontFamily: Font.LatoBold

    },
    textInputStyle: {
        backgroundColor: '#fff',
        width: windowWidth * 0.9,
        height: windowWidth * 0.12,
        // padding: 10,
        borderRadius: 5,
        borderWidth: 0.9,
        borderColor: Color.mainOrange,
        alignSelf: 'center',
        color: Color.Black,
        fontWeight: 'bold',
        fontFamily: Font.LatoBold
    },

    button: {
        backgroundColor: Color.mainOrange,
        width: windowWidth * 0.9,
        height: windowWidth * 0.14,
        marginTop: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        elevation: 5,
    },
    buttonText: {
        fontSize: 20,
        fontFamily: Font.LatoBold,
        color: '#fff',
        fontWeight: 'bold'
    },

})

export default SignIn;