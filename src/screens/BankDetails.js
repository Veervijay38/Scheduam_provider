import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, ImageBackground, FlatList, Dimensions, TextInput } from 'react-native'
import { Color, Font } from '../helper'
import { HStack,Center, NativeBaseProvider } from "native-base"
import Images from '../assets/images'
import { Icon, CheckBox } from "react-native-elements";
import { BaseScreen, AuthInput } from '../components';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const BankDetails = (props) => {
    const [CheckBoxValue, setCheckBoxValue] = useState({
       checked: true
    })


    return (
        <NativeBaseProvider>
            <BaseScreen>
                <View style={styles.container}>
                    <View style={{ alignItems: 'center', width: '100%', height: '12%', marginBottom:0}} >
                        <Image source={require("../assets/images/common/logo.png")}
                            style={{ height: '100%', width: "50%" }}
                            resizeMode='contain' />

                    </View>


                    <ScrollView>
                    <View style={{ justifyContent: 'center', flexDirection: 'column', marginTop: '1%' }}>
                        <Text style={styles.TextTag}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                        <Text style={styles.TextTag}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.
                </Text>
                    </View>
  
                    <View style={{ justifyContent: 'center', flexDirection: 'column', marginTop: '-2%' }}>
                        <Text style={styles.inputTextTag}>Bank</Text>
                        <TextInput style={styles.textInputStyle}>

                        </TextInput>
                    </View>
                    <View style={{ justifyContent: 'center', flexDirection: 'column', marginTop: '-2%' }}>
                        <Text style={styles.inputTextTag}>Account Number</Text>
                        <TextInput style={styles.textInputStyle}>

                        </TextInput>
                    </View>
                    <View style={{ justifyContent: 'center', flexDirection: 'column', marginTop: '-2%' }}>
                        <Text style={styles.inputTextTag}>Branch Code / Routing number</Text>
                        <TextInput style={styles.textInputStyle}>

                        </TextInput>
                    </View>
                    <View style={{ justifyContent: 'center', flexDirection: 'column', marginTop: '-2%' }}>
                        <Text style={styles.inputTextTag}>SWIFT Code</Text>
                        <TextInput style={styles.textInputStyle}>
                        </TextInput>
                        <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center', marginTop: 10,marginRight:15 }}>
                        <CheckBox
                                        containerStyle={{ backgroundColor: '#FFFFFF', borderWidth: 0 }}
                                        title='I have read and accept the terms and conditions'
                                        checked={CheckBoxValue.checked}
                                        checkedColor={Color.mainOrange}
                                        textStyle={{color:Color.mainOrange}}
                                        onPress={() => setCheckBoxValue({ ...CheckBoxValue, checked: !CheckBoxValue.checked })}
                                    /> 
                        


                        </View>
                       
                    </View>
                    </ScrollView>
                    <View style={{ justifyContent: 'center', marginBottom: '5%', marginLeft: '38%', }}>
                        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('ThankYou')}>
                            <Text style={styles.buttonText}>Coutinue </Text>
                            <Icon type='antdesign' name='right' size={18} color={Color.White} style={{paddingRight:10}}/>
                        </TouchableOpacity>

                    </View>


                </View>
            </BaseScreen>
        </NativeBaseProvider>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.white
    },
    inputTextTag: {
        marginTop: 18,
        marginLeft: '6%',
        marginBottom: 8,
        fontFamily: Font.LatoBold,
        color:Color.mainOrange,
        fontWeight:'bold',
        fontSize: 17

    },
    TextTag: {
        marginTop: 0,
        marginLeft: '6%',
        marginBottom: 8,
        fontFamily: Font.LatoBold,
        color:Color.Black,
        fontSize: 16,
        fontWeight:'bold'

    },
    textInputStyle: {
        backgroundColor: '#fff',
        width: windowWidth * 0.9,
        height: windowWidth * 0.11,
        // padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor:Color.mainOrange,
        alignSelf: 'center',
        color:Color.Black,
        fontWeight:'bold',
        fontFamily:Font.LatoBold
        
    },

    button: {
        backgroundColor:Color.mainOrange,
        width: windowWidth * 0.5,
        height: windowWidth * 0.13,
        marginBottom: 0,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center',
        shadowColor: 'black',
        shadowOpacity: 10,
        elevation: 20,
        flexDirection:'row',
        paddingRight:0,
        paddingLeft:0


    },
    buttonText: {
        fontSize: 22,
        fontFamily: Font.OpenSansRegular,
        color: '#fff',
        marginBottom:5,
        marginLeft:"20%"
    },

})

export default BankDetails;