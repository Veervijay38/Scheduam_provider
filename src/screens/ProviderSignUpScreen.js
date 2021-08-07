import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, ImageBackground, FlatList, Dimensions, TextInput } from 'react-native'
import { Color, Font } from '../helper'

import { Icon, CheckBox } from "react-native-elements";
import { BaseScreen } from '../components';
import CustomHeaderLogo from '../components/Header/CustomerHeaderLogo/CustomerHeaderLogo';
import routes from '../helper/routes';
import { IconType } from '../helper/iconType';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ProviderSignUpScreen = (props) => {

    return (
        <BaseScreen>
            <CustomHeaderLogo />
            <View style={styles.container}>



                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ justifyContent: 'center', marginTop: '8%' }}>
                        <Text style={styles.inputTextTag}>First name</Text>
                        <TextInput style={styles.textInputStyle}>

                        </TextInput>
                    </View>

                    <Text style={styles.inputTextTag}>Last name</Text>
                    <TextInput style={styles.textInputStyle}>

                    </TextInput>


                    <Text style={styles.inputTextTag}>Email address</Text>
                    <TextInput style={styles.textInputStyle}>

                    </TextInput>

                    <Text style={styles.inputTextTag}>Phone number</Text>
                    <TextInput style={styles.textInputStyle}>

                    </TextInput>


                    <Text style={styles.inputTextTag}>Address</Text>
                    <TextInput style={styles.textInputStyle}>

                    </TextInput>

                    <Text style={styles.inputTextTag}>Password</Text>
                    <TextInput style={styles.textInputStyle}>

                    </TextInput>

                    <Text style={styles.inputTextTag}>Confirm password</Text>
                    <TextInput style={styles.textInputStyle}>

                    </TextInput>


                </ScrollView>
                <View style={{ justifyContent: 'flex-end', alignSelf: 'flex-end', marginHorizontal: 20, marginVertical: '5%' }}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => props.navigation.navigate(routes.Company_Details)}>
                        <Text style={styles.buttonText}>Coutinue </Text>
                        <Icon type={IconType.Antdesign} name='right' size={18} color={Color.White} />
                    </TouchableOpacity>

                </View>

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
        color: Color.mainOrange,
        fontSize: 17,
        fontWeight: 'bold'

    },
    textInputStyle: {
        backgroundColor: '#fff',
        width: windowWidth * 0.9,
        height: windowWidth * 0.10,
        // padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Color.mainOrange,
        alignSelf: 'center',
        color: Color.Black,
        fontWeight: 'bold',
        fontFamily: Font.LatoBold

    },

    button: {
        backgroundColor: Color.mainOrange,
        width: windowWidth * 0.5,
        height: windowWidth * 0.13,
        marginTop: 0,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center',
        shadowColor: 'black',
        shadowOpacity: 10,
        elevation: 20,
        flexDirection: 'row',
        paddingRight: 10

    },
    buttonText: {
        fontSize: 22,
        fontFamily: Font.OpenSansRegular,
        color: '#fff',
        marginBottom: 5,
        marginLeft: "30%"
    },

})

export default ProviderSignUpScreen;