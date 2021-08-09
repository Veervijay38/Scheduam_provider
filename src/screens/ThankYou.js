import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, ImageBackground, FlatList, Dimensions, TextInput, } from 'react-native'
import { Color, Font } from '../helper'
import Images from '../assets'
import { Icon, Col } from "native-base";
import { BaseScreen, AuthInput } from '../components';
import CustomHeaderLogo from '../components/Header/CustomerHeaderLogo/CustomerHeaderLogo';
import routes from '../helper/routes';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ThankYou = (props) => {
    const navigation = props.navigation;
    return (
        <BaseScreen>
            <CustomHeaderLogo />
            <View style={styles.container}>



                <ScrollView>
                    <View style={{ justifyContent: 'center', flexDirection: 'column', }}>
                        <Text style={styles.TextTag}>Thank you for your application to offer services on Omēmē!</Text>
                        <Text style={styles.TextTag}>Your application is being reviewed. Subject to police clearance and Omēmē approval, you will be notified of your account activation.</Text>
                        <Text style={styles.TextTag}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                        <Text style={styles.TextTag}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.
                        </Text>

                    </View>


                    <View style={{ justifyContent: 'center', marginVertical: '25%', }}>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(routes.HOME_NAVIGATOR)}>
                            <Text style={styles.buttonText}>Coutinue </Text>

                        </TouchableOpacity>

                    </View>

                </ScrollView>






            </View>
        </BaseScreen >
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        flex: 1,
        backgroundColor: Color.white
    },
    inputTextTag: {
        marginTop: 18,
        marginLeft: '6%',
        marginBottom: 8,
        fontFamily: Font.LatoBold,
        color: '#577491',
        fontSize: 17

    },
    TextTag: {
        marginTop: 18,
        marginLeft: '6%',
        marginBottom: 8,
        fontFamily: Font.LatoBold,
        color: Color.Black,
        fontWeight: 'bold',
        fontSize: 17

    },
    textInputStyle: {
        backgroundColor: '#fff',
        width: windowWidth * 0.9,
        height: windowWidth * 0.10,
        // padding: 10,
        borderRadius: 5,
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
        height: windowWidth * 0.15,
        marginTop: 0,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        shadowColor: 'black',
        shadowOpacity: 10,
        elevation: 20,


    },
    buttonText: {
        fontSize: 22,
        fontFamily: Font.LatoBold,
        color: '#fff',
        fontWeight: 'bold'
    },

})

export default ThankYou;









