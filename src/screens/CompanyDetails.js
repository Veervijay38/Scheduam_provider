import React, { useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { CheckBox, Icon } from 'react-native-elements';
import { BaseScreen } from '../components';
import CustomHeaderLogo from '../components/Header/CustomerHeaderLogo/CustomerHeaderLogo';
import { Color, Font } from '../helper';
import { IconType } from '../helper/iconType';
import routes from '../helper/routes';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CompanyDetails = (props) => {
    const navigation = props.navigation
    const [CheckBoxValue, setCheckBoxValue] = useState({
        Homecleaning: true, OfficeCleaning: true,
        Driver: true, Plumber: true,
        GeneratorTechnician: true, Maid: true, Electrician: true,
    })

    return (
        <BaseScreen>
            <CustomHeaderLogo />
            <View style={styles.container}>

                <ScrollView showsVerticalScrollIndicator={false}>

                    <Text style={styles.inputTextTag}>Company / trade name
                    </Text>
                    <TextInput style={styles.textInputStyle} />



                    <Text style={styles.inputTextTag}>NIN / BVN</Text>
                    <TextInput style={styles.textInputStyle}>

                    </TextInput>


                    <Text style={styles.inputTextTag}>Years of experience</Text>
                    <TextInput style={styles.textInputStyle}>

                    </TextInput>

                    <View style={{ justifyContent: 'center', flexDirection: 'column', marginTop: '-3%' }}>
                        <Text style={styles.inputTextTag}>Service Offered</Text>
                        <View style={styles.servicebox}>
                            <View style={{ marginVertical: 20 }}>
                                <CheckBox
                                    containerStyle={styles.checkBoxContainer}
                                    title={<Text style={styles.plantext}>Home cleaning</Text>}
                                    checkedColor={Color.Black}
                                    checked={CheckBoxValue.Homecleaning}
                                    onPress={() => setCheckBoxValue({ ...CheckBoxValue, Homecleaning: !CheckBoxValue.Homecleaning })}
                                />
                                <CheckBox
                                    containerStyle={styles.checkBoxContainer}
                                    title={<Text style={styles.plantext}>Driver</Text>}
                                    checkedColor={Color.Black}
                                    checked={CheckBoxValue.Driver}
                                    onPress={() => setCheckBoxValue({ ...CheckBoxValue, Driver: !CheckBoxValue.Driver })}
                                />
                                <CheckBox
                                    containerStyle={styles.checkBoxContainer}
                                    title={<Text style={styles.plantext}>Plumber</Text>}
                                    checkedColor={Color.Black}
                                    checked={CheckBoxValue.Plumber}
                                    onPress={() => setCheckBoxValue({ ...CheckBoxValue, Plumber: !CheckBoxValue.Plumber })}
                                />
                                <CheckBox
                                    containerStyle={styles.checkBoxContainer}
                                    title={<Text style={styles.plantext}>Electrician</Text>}
                                    checkedColor={Color.Black}
                                    checked={CheckBoxValue.Electrician}
                                    on
                                    Press={() => setCheckBoxValue({ ...CheckBoxValue, Electrician: !CheckBoxValue.Electrician })}
                                />
                            </View>
                            <View style={{ width: '50%', marginVertical: 20 }}>
                                <CheckBox
                                    containerStyle={styles.checkBoxContainer}
                                    title={<Text style={styles.plantext}>Office cleaning</Text>}
                                    checkedColor={Color.Black}
                                    checked={CheckBoxValue.OfficeCleaning}
                                    onPress={() => setCheckBoxValue({ ...CheckBoxValue, OfficeCleaning: !CheckBoxValue.OfficeCleaning })}
                                />
                                <CheckBox
                                    containerStyle={styles.checkBoxContainer}
                                    title={<Text style={styles.plantext}>Maid</Text>}
                                    checkedColor={Color.Black}
                                    checked={CheckBoxValue.Maid}
                                    onPress={() => setCheckBoxValue({ ...CheckBoxValue, Maid: !CheckBoxValue.Maid })}
                                />
                                <CheckBox
                                    containerStyle={styles.checkBoxContainer}
                                    title={<Text style={styles.plantext}>Generator Technician</Text>}
                                    checkedColor={Color.Black}
                                    checked={CheckBoxValue.GeneratorTechnician}
                                    onPress={() => setCheckBoxValue({ ...CheckBoxValue, GeneratorTechnician: !CheckBoxValue.GeneratorTechnician })}
                                />
                            </View>

                        </View>

                    </View>
                    {/* <View style={{ justifyContent: 'center', marginTop: '5%', marginLeft: '40%', }}>
                        <TouchableOpacity style={styles.button}
                            onPress={() => props.navigation.navigate('Availability')} >
                            <Text style={styles.buttonText}>Coutinue </Text>

                        </TouchableOpacity>

                    </View> */}

                </ScrollView>
                <View style={styles.continueBtnView}>
                    <TouchableOpacity
                        style={styles.continueButton}
                        onPress={() => navigation.navigate(routes.Availability)}>
                        <Text style={styles.continueButtonText}>Coutinue </Text>
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
    servicebox: {
        backgroundColor: '#fff',
        width: windowWidth * 0.9,
        height: windowWidth * 0.75,
        padding: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Color.mainOrange,
        alignSelf: 'center',
        flexDirection: 'row'


    },
    checkBoxContainer: { paddingVertical: 0, backgroundColor: 'white', borderWidth: 0, },
})

export default CompanyDetails;