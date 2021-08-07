import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, ImageBackground, FlatList, Dimensions, TextInput } from 'react-native'
import { Color, Font } from '../helper'
import Images from '../assets/images'
import { Icon, Col } from "native-base";
import { BaseScreen } from '../components';
import routes from '../helper/routes';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SignupSelectionScreen = (props) => {

    return (
        <BaseScreen>
            <View style={styles.container}>
                <View style={{ alignItems: 'center', }} >
                    <Image source={require("../assets/images/common/logo.png")}
                        style={{ height: 150, width: "50%" }}
                        resizeMode='contain' />

                </View>
                {/* <View style={{ justifyContent: 'center', alignItems: 'center', }} > */}
                <Text style={{
                    fontSize: 25,
                    color: Color.Black,
                    fontFamily: Font.LatoBold,
                    fontWeight: 'bold', textAlign: 'center'
                }} > Signup </Text>
                {/* </View> */}


                <View >
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Customer</Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => props.navigation.navigate(routes.PROVIDER_SIGNUP_SCREEN)}>
                        <Text style={styles.buttonText}>Service Partner</Text>

                    </TouchableOpacity>
                </View>








            </View>
        </BaseScreen >
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
        height: windowWidth * 0.10,
        // padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'blue',
        alignSelf: 'center',
        // shadowColor: "black",
        // shadowOpacity: 0.8,
        // shadowRadius: 2,
        // shadowOffset: {
        //     height: 1,
        //     width: 0,
        // },
        // elevation: 5
    },

    button: {
        backgroundColor: Color.mainOrange,
        width: windowWidth * 0.9,
        paddingVertical: 50,
        // height: windowWidth * 0.4,
        marginTop: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        shadowColor: 'black',
        shadowOpacity: 10,
        elevation: 20


    },
    buttonText: {
        fontSize: 22,
        fontFamily: Font.LatoBold,
        color: '#fff',
        fontWeight: 'bold'
    },

})

export default SignupSelectionScreen;