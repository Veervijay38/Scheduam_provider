import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, ImageBackground, FlatList, Dimensions, TextInput, KeyboardAvoidingView } from 'react-native'
import { Color, Font } from '../helper'

import { Icon, CheckBox } from 'react-native-elements';
import { IconType } from '../helper/iconType';
import { BaseScreen, AuthInput } from '../components';
import CustomHeaderWithBadge from '../components/Header/CustomHeaderWithBadge';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ChatScreen = (props) => {
    const navigation = props.navigation
    const custDetail = props.Data

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{
                flex: 1,
                backgroundColor: Color.White
            }}
        >
            <BaseScreen>
                <CustomHeaderWithBadge />
                <View style={styles.container}>


                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
                        <Icon style={{ marginLeft: '0%' }} type={IconType.MaterialCommunity} name='chat-outline' size={30} color={Color.Black} />
                        <Text style={styles.TextTag}>Chat</Text>
                    </View>



                    <View style={styles.MainContainer}>
                        <View style={styles.custDetailView}>
                            <Text style={styles.custDescText}>Customer: {custDetail.custName}</Text>
                            <Text style={styles.custDescText}>Offer: {custDetail.date}</Text>
                        </View>

                        <View style={styles.chatViewContainer}>
                            <TextInput style={styles.textInputStyle}
                                placeholder='Start chat'
                                fontSize={16} />
                            <Icon type={IconType.FontAwesome5}
                                name='chevron-circle-right' size={35}
                                color={Color.mainOrange} />
                        </View>

                    </View>










                </View>

            </BaseScreen >
        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        paddingHorizontal: 10,
        paddingVertical: 10,
        flex: 1,
        backgroundColor: Color.White
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
        fontFamily: Font.LatoBold,
        color: Color.Black,
        fontWeight: 'bold',
        fontSize: 22

    },
    textInputStyle: {
        backgroundColor: '#fff',
        width: '82%',
        borderWidth: 1,
        borderColor: Color.Black,
        alignSelf: 'flex-start',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 10
    },

    MainContainer: {
        backgroundColor: Color.White,
        flex: 1,
        marginTop: 0,
        borderRadius: 8,
        justifyContent: 'space-between',
        alignSelf: 'center',
        borderColor: Color.mainOrange,
        borderWidth: 1
    },
    custDetailView: { borderBottomWidth: 1, borderColor: Color.mainOrange, paddingVertical: 10 },
    custDescText: { marginHorizontal: 10, color: Color.mainOrange, fontFamily: Font.LatoBold, fontSize: 18, fontWeight: 'bold' },
    chatViewContainer: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly', width: '100%', marginVertical: '2%' },
    buttonText: {
        fontSize: 22,
        fontFamily: Font.Font,
        color: '#fff'
    },

})

export default ChatScreen;









