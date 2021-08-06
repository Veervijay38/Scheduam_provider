import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, ImageBackground, FlatList, Dimensions, TextInput } from 'react-native'
import { Color, Font } from '../helper'
import Images from '../assets'
import { CheckBox, Icon } from 'react-native-elements';
import { BaseScreen, AuthInput } from '../components';
import { Actions } from 'react-native-router-flux';
import SplashScreen from './SplashScreen';
import { fontSize } from 'styled-system';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CompanyDetails = (props) => {
    const [CheckBoxValue, setCheckBoxValue] = useState({
        Homecleaning: true, OfficeCleaning: true,
        Driver : true, Plumber: true,
        GeneratorTechnician: true, Maid: true ,Electrician: true,
    })

    return (
        <BaseScreen>
            <View style={styles.container}>
                <View style={{ alignItems: 'center', width: '100%', height: '5%', marginBottom: 40 }} >
                    <Image source={require("../assets/images/common/logo.png")}
                        style={{ height: '280%', width: "50%" }}
                        resizeMode='contain' />

                </View>





                <View style={{ justifyContent: 'center', flexDirection: 'column', marginTop: '2%' }}>
                    <Text style={styles.inputTextTag}>Company / trade name
                </Text>
                    <TextInput style={styles.textInputStyle}
                    >

                    </TextInput>
                </View>
                <View style={{ justifyContent: 'center', flexDirection: 'column', marginTop: '-3%' }}>
                    <Text style={styles.inputTextTag}>NIN / BVN</Text>
                    <TextInput style={styles.textInputStyle}>

                    </TextInput>
                </View>
                <View style={{ justifyContent: 'center', flexDirection: 'column', marginTop: '-3%' }}>
                    <Text style={styles.inputTextTag}>Years of experience</Text>
                    <TextInput style={styles.textInputStyle}>

                    </TextInput>
                </View>
                <View style={{ justifyContent: 'center', flexDirection: 'column', marginTop: '-3%' }}>
                    <Text style={styles.inputTextTag}>Service Offered</Text>
                    <View style={styles.servicebox}>
                        <View style={{marginVertical:20}}>
                    <CheckBox
                        containerStyle={{ paddingVertical: 0, backgroundColor: 'white', borderWidth: 0, }}
                        title={<Text style={styles.plantext}>Home cleaning</Text>}
                        checkedColor={Color.Black}
                        checked={CheckBoxValue.Homecleaning}
                        onPress={() => setCheckBoxValue({ ...CheckBoxValue, Homecleaning: !CheckBoxValue.Homecleaning })}
                    />
                    <CheckBox
                        containerStyle={{ paddingVertical: 0, backgroundColor: 'white', borderWidth: 0, }}
                        title={<Text style={styles.plantext}>Driver</Text>}
                        checkedColor={Color.Black}
                        checked={CheckBoxValue.Driver}
                        onPress={() => setCheckBoxValue({ ...CheckBoxValue, Driver: !CheckBoxValue.Driver })}
                    />
                    <CheckBox
                        containerStyle={{ paddingVertical: 0, backgroundColor: 'white', borderWidth: 0, }}
                        title={<Text style={styles.plantext}>Plumber</Text>}
                        checkedColor={Color.Black}
                        checked={CheckBoxValue.Plumber}
                        onPress={() => setCheckBoxValue({ ...CheckBoxValue, Plumber: !CheckBoxValue.Plumber })}
                    />
                    <CheckBox
                        containerStyle={{ paddingVertical: 0, backgroundColor: 'white', borderWidth: 0, }}
                        title={<Text style={styles.plantext}>Electrician</Text>}
                        checkedColor={Color.Black}
                        checked={CheckBoxValue.Electrician}
                        on
                        Press={() => setCheckBoxValue({ ...CheckBoxValue, Electrician: !CheckBoxValue.Electrician })}
                    />
                    </View>
                    <View style={{width:'50%',marginVertical:20}}>
                    <CheckBox
                        containerStyle={{ paddingVertical: 0, backgroundColor: 'white', borderWidth: 0, }}
                        title={<Text style={styles.plantext}>Office cleaning</Text>}
                        checkedColor={Color.Black}
                        checked={CheckBoxValue.OfficeCleaning}
                        onPress={() => setCheckBoxValue({ ...CheckBoxValue, OfficeCleaning: !CheckBoxValue.OfficeCleaning })}
                    />
                    <CheckBox
                        containerStyle={{ paddingVertical: 0, backgroundColor: 'white', borderWidth: 0, }}
                        title={<Text style={styles.plantext}>Maid</Text>}
                        checkedColor={Color.Black}
                        checked={CheckBoxValue.Maid}
                        onPress={() => setCheckBoxValue({ ...CheckBoxValue, Maid: !CheckBoxValue.Maid })}
                    />
                    <CheckBox
                        containerStyle={{ paddingVertical: 0, backgroundColor: 'white', borderWidth: 0, }}
                        title={<Text style={styles.plantext}>Generator Technician</Text>}
                        checkedColor={Color.Black}
                        checked={CheckBoxValue.GeneratorTechnician}
                        onPress={() => setCheckBoxValue({ ...CheckBoxValue, GeneratorTechnician: !CheckBoxValue.GeneratorTechnician})}
                    />
                    </View>
                    
                    </View>

                </View>
                <View style={{ justifyContent: 'center', marginTop: '5%', marginLeft: '40%', }}>
                    <TouchableOpacity style={styles.button}
                    onPress={() => props.navigation.navigate('Availability')} >
                        <Text style={styles.buttonText}>Coutinue </Text>

                    </TouchableOpacity>

                </View>








            </View>
        </BaseScreen>
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
        color: Color.mainOrange,
        fontSize: 17,
        fontWeight:'bold'

    },
    TextTag: {
        marginTop: 0,
        marginLeft: '6%',
        marginBottom: 8,
        fontFamily: Font.LatoBold,
        color: '#79cb8f',
        fontSize: 18

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
        color:Color.Black,
        fontWeight:'bold',
        fontFamily:Font.LatoBold
        
        
    },

    button: {
        backgroundColor: Color.mainOrange,
        width: windowWidth * 0.5,
        height: windowWidth * 0.13,
        marginTop: 0,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        shadowColor: 'black',
        shadowOpacity: 10,
        elevation: 20


    },
    buttonText: {
        fontSize: 22,
        fontWeight:'bold',
        fontFamily: Font.LatoBold,
        color: '#fff'
    },
    servicebox: {
        backgroundColor: '#fff',
        width: windowWidth * 0.9,
        height: windowWidth * 0.75,
         padding: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Color.mainOrange,
        alignSelf: 'center',
        flexDirection:'row'
        
       
    },

})

export default CompanyDetails;