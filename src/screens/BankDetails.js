import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, ImageBackground, FlatList, Dimensions, TextInput } from 'react-native'
import { Color, Font } from '../helper'
import { HStack, Center, NativeBaseProvider } from "native-base"
import Images from '../assets/images'
import { Icon, CheckBox } from "react-native-elements";
import { BaseScreen, AuthInput } from '../components';
import CustomHeaderLogo from '../components/Header/CustomerHeaderLogo/CustomerHeaderLogo'
import { IconType } from '../helper/iconType'
import routes from '../helper/routes'



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const BankDetails = (props) => {
    const navigation = props.navigation;
    const [CheckBoxValue, setCheckBoxValue] = useState({
        checked: true
    })


    return (

        <BaseScreen>
            <CustomHeaderLogo />
            <View style={styles.container}>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ justifyContent: 'center', flexDirection: 'column', marginTop: '1%' }}>
                        <Text style={styles.TextTag}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Text>
                        <Text style={styles.TextTag}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.
                        </Text>



                        <Text style={styles.inputTextTag}>Bank</Text>
                        <TextInput style={styles.textInputStyle}>

                        </TextInput>


                        <Text style={styles.inputTextTag}>Account Number</Text>
                        <TextInput style={styles.textInputStyle}>

                        </TextInput>


                        <Text style={styles.inputTextTag}>Branch Code / Routing number</Text>
                        <TextInput style={styles.textInputStyle}>

                        </TextInput>


                        <Text style={styles.inputTextTag}>SWIFT Code</Text>
                        <TextInput style={styles.textInputStyle}>
                        </TextInput>
                        <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center', marginTop: 10, marginRight: 15 }}>
                            <CheckBox
                                containerStyle={{ backgroundColor: '#FFFFFF', borderWidth: 0 }}
                                title='I have read and accept the terms and conditions'
                                checked={CheckBoxValue.checked}
                                checkedColor={Color.mainOrange}
                                textStyle={{ color: Color.mainOrange }}
                                onPress={() => setCheckBoxValue({ ...CheckBoxValue, checked: !CheckBoxValue.checked })}
                            />



                        </View>

                    </View>
                </ScrollView>
                <View style={styles.continueBtnView}>
                    <TouchableOpacity
                        style={styles.continueButton}
                        onPress={() => navigation.navigate(routes.Thank_You)}>
                        <Text style={styles.continueButtonText}>Coutinue </Text>
                        <Icon type={IconType.Antdesign} name='right' size={18} color={Color.White} />
                    </TouchableOpacity>

                </View>


            </View>
        </BaseScreen>

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
        fontWeight: 'bold',
        fontSize: 17

    },
    TextTag: {
        marginTop: 0,
        marginLeft: '6%',
        marginBottom: 8,
        fontFamily: Font.LatoBold,
        color: Color.Black,
        fontSize: 16,
        fontWeight: 'bold'

    },
    textInputStyle: {
        backgroundColor: '#fff',
        width: windowWidth * 0.9,
        height: windowWidth * 0.11,
        // padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Color.mainOrange,
        alignSelf: 'center',
        color: Color.Black,
        fontWeight: 'bold',
        fontFamily: Font.LatoBold

    },

    continueBtnView: { justifyContent: 'flex-end', alignSelf: 'flex-end', marginHorizontal: 20, marginVertical: '5%' },
    continueButton: {
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
    continueButtonText: {
        fontSize: 22,
        fontFamily: Font.OpenSansRegular,
        color: '#fff',
        marginBottom: 5,
        marginLeft: "30%"
    },

})

export default BankDetails;