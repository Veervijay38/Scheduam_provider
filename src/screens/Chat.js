import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, ImageBackground, FlatList, Dimensions, TextInput, KeyboardAvoidingView } from 'react-native'
import { Color, Font } from '../helper'

import { Icon, CheckBox } from 'react-native-elements';
import { IconType } from '../helper/iconType';
import { BaseScreen, AuthInput } from '../components';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ChatScreen = (props) => {
    const navigation = props.navigation
    const custDetail = props.Data

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <BaseScreen>

                <View style={styles.container}>

                    <View style={{ alignItems: 'center', width: '100%', height: '15%', marginBottom: '0%' }} >
                        <Image source={require("../assets/images/common/logo.png")}
                            style={{ height: '100%', width: "50%" }}
                            resizeMode='contain' />

                    </View>


                    <View style={{ width: '90%', alignSelf: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', alignSelf: 'flex-start',marginVertical:15  }}>
                            <Icon style={{ marginLeft: '0%' }} type={IconType.MaterialCommunity} name='chat-outline' size={30} color={Color.Black} />
                            <Text style={styles.TextTag}>Chat</Text>


                        </View>
                    </View>


                    <View style={styles.MainContainer}>
                        <View style={{  borderWidth: 1, borderColor:Color.mainOrange, height: '10%', width: '100%',borderTopRightRadius:7,borderTopLeftRadius:7 }}>
                        <Text style={{ marginHorizontal: 10, color: Color.mainOrange, fontFamily: Font.LatoBold, fontSize: 18 ,fontWeight:'bold'}}>Customer: {custDetail.custName}</Text>
                        <Text style={{ marginHorizontal: 10, color: Color.mainOrange, fontFamily: Font.LatoBold, fontSize: 18,fontWeight:'bold' }}>Offer: {custDetail.date}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%', marginVertical: '2%' }}>
                            <TextInput style={styles.textInputStyle}
                                placeholder='Start chat'
                                fontSize={16} >

                            </TextInput>
                            <Icon style={{ marginLeft: '0%' }} type={IconType.FontAwesome5} name='chevron-circle-right' size={35} color={Color.mainOrange} />
                        </View>

                    </View>










                </View>

            </BaseScreen >
        </KeyboardAvoidingView>
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
        color: '#577491',
        fontSize: 17

    },
    TextTag: {
        marginTop: 0,
        marginLeft: '2%',
        marginBottom: 0,
        fontFamily: Font.LatoBold,
        color:Color.Black,
        fontWeight:'bold',
        fontSize: 22

    },
    textInputStyle: {
        backgroundColor: '#fff',
        width: '82%',
        height: windowWidth * 0.10,
        // padding: 10,

        borderWidth: 1,
        borderColor: Color.Black,
        alignSelf: 'flex-start',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 10
    },

    MainContainer: {
        backgroundColor: 'white',
        width: windowWidth * 0.9,
        height: windowWidth * 1.5,
        marginTop: 0,
        borderRadius: 8,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        alignSelf: 'center',
        borderColor: Color.mainOrange,
        borderWidth: 1



    },
    buttonText: {
        fontSize: 22,
        fontFamily: Font.Font,
        color: '#fff'
    },

})

export default ChatScreen;









