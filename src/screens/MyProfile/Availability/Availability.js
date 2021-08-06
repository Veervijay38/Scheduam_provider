import { NativeBaseProvider } from "native-base";
import React, { useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon, CheckBox } from "react-native-elements";
import { color } from "styled-system";
import { BaseScreen } from '../../../components';
import { Color, Font } from '../../../helper';
import { Actions } from 'react-native-router-flux';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Availability = (props) => {
    const [CheckBoxValue, setCheckBoxValue] = useState({
        sunday: true, monday: true,
        tuesday: true, wednesday: true,
        thursday: true, friday: true, saturday: true, pubHoliday: true
    })

    return (
        <NativeBaseProvider>
            <BaseScreen>
                <View style={styles.container}>
                    <ScrollView showsVerticalScrollIndicator={false} style={{ paddingBottom: 10 }}>
                        <View style={{ marginTop: '5%', marginHorizontal: 5, }}>
                            <View>
                                <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', }}>

                                    <Text style={{
                                        fontFamily: Font.LatoBold,
                                        color: Color.mainOrange,
                                        fontSize: 17,fontWeight:'bold'
                                    }}>Maximum travel distance</Text>
                                    <View style={styles.timerBox}>
                                        <Text style={{ marginHorizontal: 14,fontWeight:'bold',fontFamily:Font.LatoBold ,marginVertical:9}}>20 km</Text>
                                        <View>
                                            <Icon type='antdesign' name='caretup' size={15} color={Color.mainOrange} />
                                            <Icon type='antdesign' name='caretdown' size={15} color={Color.mainOrange} />
                                        </View>
                                    </View>
                                </View>

                            </View>
                            <View style={{ marginTop: 20, }}>
                                {/* sunday CheckBox */}
                                <View style={{ ...styles.subContainer2, }}>
                                    <CheckBox
                                        containerStyle={{ flex: 0.4, borderWidth: 0 ,backgroundColor:'white'}}
                                        title='Sunday'
                                        checkedColor={"Black"}
                                        textStyle={{color:Color.mainOrange}}
                                        checked={CheckBoxValue.sunday}
                                        onPress={() => setCheckBoxValue({ ...CheckBoxValue, sunday: !CheckBoxValue.sunday })}

                                    />
                                    <View style={styles.timerBoxContainer1}>


                                        <View style={styles.timerBox}>
                                            <Text style={{ marginHorizontal: 5,fontFamily:Font.LatoBold,fontWeight:'bold' }}>8:00 AM</Text>
                                            <View>
                                                <Icon type='antdesign' name='caretup' size={15} color={Color.mainOrange} />
                                                <Icon type='antdesign' name='caretdown' size={15} color={Color.mainOrange} />
                                            </View>
                                        </View>


                                        <View style={styles.timerBox}>
                                            <Text style={{ marginHorizontal: 5 ,fontFamily:Font.LatoBold,fontWeight:'bold'}}>8:00 pm</Text>
                                            <View>
                                                <Icon type='antdesign' name='caretup' size={15} color={Color.mainOrange} />
                                                <Icon type='antdesign' name='caretdown' size={15} color={Color.mainOrange} />
                                            </View>
                                        </View>

                                    </View>
                                </View>
                                {/* sunday CheckBox */}
                                <View style={{ ...styles.subContainer2, }}>
                                    <CheckBox
                                        containerStyle={{ flex: 0.4, borderWidth: 0 ,backgroundColor:'white'}}
                                        title='Monday'
                                        checkedColor={"Black"}
                                        textStyle={{color:Color.mainOrange}}
                                        checked={CheckBoxValue.sunday}
                                        onPress={() => setCheckBoxValue({ ...CheckBoxValue, sunday: !CheckBoxValue.sunday })}

                                    />
                                    <View style={styles.timerBoxContainer1}>


                                        <View style={styles.timerBox}>
                                            <Text style={{ marginHorizontal: 5 ,fontFamily:Font.LatoBold,fontWeight:'bold' }}>8:00 am</Text>
                                            <View>
                                                <Icon type='antdesign' name='caretup' size={15} color={Color.mainOrange} />
                                                <Icon type='antdesign' name='caretdown' size={15} color={Color.mainOrange} />
                                            </View>
                                        </View>


                                        <View style={styles.timerBox}>
                                            <Text style={{ marginHorizontal: 5 ,fontFamily:Font.LatoBold,fontWeight:'bold' }}>8:00 pm</Text>
                                            <View>
                                                <Icon type='antdesign' name='caretup' size={15} color={Color.mainOrange} />
                                                <Icon type='antdesign' name='caretdown' size={15} color={Color.mainOrange} />
                                            </View>
                                        </View>

                                    </View>
                                </View>
                                {/* sunday CheckBox */}
                                <View style={{ ...styles.subContainer2, }}>
                                    <CheckBox
                                        containerStyle={{ flex: 0.4, borderWidth: 0 ,backgroundColor:'white'}}
                                        title='Tuesday'
                                        checkedColor={"Black"}
                                        textStyle={{color:Color.mainOrange}}
                                        checked={CheckBoxValue.sunday}
                                        onPress={() => setCheckBoxValue({ ...CheckBoxValue, sunday: !CheckBoxValue.sunday })}

                                    />
                                    <View style={styles.timerBoxContainer1}>


                                        <View style={styles.timerBox}>
                                            <Text style={{ marginHorizontal: 5,fontFamily:Font.LatoBold,fontWeight:'bold'}}>8:00 pm</Text>
                                            <View>
                                                <Icon type='antdesign' name='caretup' size={15} color={Color.mainOrange} />
                                                <Icon type='antdesign' name='caretdown' size={15} color={Color.mainOrange} />
                                            </View>
                                        </View>


                                        <View style={styles.timerBox}>
                                            <Text style={{ marginHorizontal: 5 ,fontFamily:Font.LatoBold,fontWeight:'bold'}}>8:00 pm</Text>
                                            <View>
                                                <Icon type='antdesign' name='caretup' size={15} color={Color.mainOrange} />
                                                <Icon type='antdesign' name='caretdown' size={15} color={Color.mainOrange} />
                                            </View>
                                        </View>

                                    </View>
                                </View>
                                {/* sunday CheckBox */}
                                <View style={{ ...styles.subContainer2, }}>
                                    <CheckBox
                                        containerStyle={{ flex: 0.4, borderWidth: 0 ,backgroundColor:'white'}}
                                        title='wednesday'
                                        checkedColor={"Black"}
                                        textStyle={{color:Color.mainOrange}}
                                        checked={CheckBoxValue.sunday}
                                        onPress={() => setCheckBoxValue({ ...CheckBoxValue, sunday: !CheckBoxValue.sunday })}

                                    />
                                    <View style={styles.timerBoxContainer1}>


                                        <View style={styles.timerBox}>
                                            <Text style={{ marginHorizontal: 5 ,fontFamily:Font.LatoBold,fontWeight:'bold'}}>8:00 am</Text>
                                            <View>
                                                <Icon type='antdesign' name='caretup' size={15} color={Color.mainOrange} />
                                                <Icon type='antdesign' name='caretdown' size={15} color={Color.mainOrange} />
                                            </View>
                                        </View>


                                        <View style={styles.timerBox}>
                                            <Text style={{ marginHorizontal: 5 ,fontFamily:Font.LatoBold,fontWeight:'bold'}}>8:00 pm</Text>
                                            <View>
                                                <Icon type='antdesign' name='caretup' size={15} color={Color.mainOrange} />
                                                <Icon type='antdesign' name='caretdown' size={15} color={Color.mainOrange} />
                                            </View>
                                        </View>

                                    </View>
                                </View>
                                {/* sunday CheckBox */}
                                <View style={{ ...styles.subContainer2, }}>
                                    <CheckBox
                                        containerStyle={{ flex: 0.4, borderWidth: 0 ,backgroundColor:'white'}}
                                        title='Thursday'
                                        checkedColor={"Black"}
                                        textStyle={{color:Color.mainOrange}}
                                        checked={CheckBoxValue.sunday}
                                        onPress={() => setCheckBoxValue({ ...CheckBoxValue, sunday: !CheckBoxValue.sunday })}

                                    />
                                    <View style={styles.timerBoxContainer1}>


                                        <View style={styles.timerBox}>
                                            <Text style={{ marginHorizontal: 5,fontFamily:Font.LatoBold,fontWeight:'bold'}}>8:00 am</Text>
                                            <View>
                                                <Icon type='antdesign' name='caretup' size={15} color={Color.mainOrange} />
                                                <Icon type='antdesign' name='caretdown' size={15} color={Color.mainOrange} />
                                            </View>
                                        </View>


                                        <View style={styles.timerBox}>
                                            <Text style={{ marginHorizontal: 5 ,fontFamily:Font.LatoBold,fontWeight:'bold'}}>8:00 pm</Text>
                                            <View>
                                                <Icon type='antdesign' name='caretup' size={15} color={Color.mainOrange} />
                                                <Icon type='antdesign' name='caretdown' size={15} color={Color.mainOrange} />
                                            </View>
                                        </View>

                                    </View>
                                </View>
                                {/* sunday CheckBox */}
                                <View style={{ ...styles.subContainer2, }}>
                                    <CheckBox
                                        containerStyle={{ flex: 0.4, borderWidth: 0 ,backgroundColor:'white' }}
                                        title='Friday'
                                        checkedColor={"Black"}
                                        textStyle={{color:Color.mainOrange}}
                                        checked={CheckBoxValue.sunday}
                                        onPress={() => setCheckBoxValue({ ...CheckBoxValue, sunday: !CheckBoxValue.sunday })}

                                    />
                                    <View style={styles.timerBoxContainer1}>


                                        <View style={styles.timerBox}>
                                            <Text style={{ marginHorizontal: 5,fontFamily:Font.LatoBold,fontWeight:'bold'}}>8:00 am</Text>
                                            <View>
                                                <Icon type='antdesign' name='caretup' size={15} color={Color.mainOrange} />
                                                <Icon type='antdesign' name='caretdown' size={15} color={Color.mainOrange} />
                                            </View>
                                        </View>


                                        <View style={styles.timerBox}>
                                            <Text style={{ marginHorizontal: 5 ,fontFamily:Font.LatoBold,fontWeight:'bold'}}>8:00 pm</Text>
                                            <View>
                                                <Icon type='antdesign' name='caretup' size={15} color={Color.mainOrange} />
                                                <Icon type='antdesign' name='caretdown' size={15} color={Color.mainOrange} />
                                            </View>
                                        </View>

                                    </View>
                                </View>
                                {/* sunday CheckBox */}
                                <View style={{ ...styles.subContainer2, }}>
                                    <CheckBox
                                        containerStyle={{ flex: 0.4, borderWidth: 0,backgroundColor:'white' }}
                                        title='Saturday'
                                        checkedColor={"Black"}
                                        textStyle={{color:Color.mainOrange}}
                                        checked={CheckBoxValue.sunday}
                                        onPress={() => setCheckBoxValue({ ...CheckBoxValue, sunday: !CheckBoxValue.sunday })}

                                    />
                                    <View style={styles.timerBoxContainer1}>


                                        <View style={styles.timerBox}>
                                            <Text style={{ marginHorizontal: 5,fontFamily:Font.LatoBold,fontWeight:'bold'}}>8:00 am</Text>
                                            <View>
                                                <Icon type='antdesign' name='caretup' size={15} color={Color.mainOrange} />
                                                <Icon type='antdesign' name='caretdown' size={15} color={Color.mainOrange} />
                                            </View>
                                        </View>


                                        <View style={styles.timerBox}>
                                            <Text style={{ marginHorizontal: 5 ,fontFamily:Font.LatoBold,fontWeight:'bold' }}>8:00 pm</Text>
                                            <View>
                                                <Icon type='antdesign' name='caretup' size={15} color={Color.mainOrange} />
                                                <Icon type='antdesign' name='caretdown' size={15} color={Color.mainOrange} />
                                            </View>
                                        </View>

                                    </View>
                                </View>



                                <View style={styles.subContainer2}>
                                    <CheckBox
                                        containerStyle={{ backgroundColor: 'white', borderWidth: 0 }}
                                        title='Public holidays'
                                        checkedColor={"Black"}
                                        textStyle={{color:Color.mainOrange}}
                                        checked={CheckBoxValue.pubHoliday}
                                        onPress={() => setCheckBoxValue({ ...CheckBoxValue, pubHoliday: !CheckBoxValue.pubHoliday })} />

                                </View>
                            </View>
                        </View>



                        <View style={{ justifyContent: 'center', marginVertical: '5%', marginLeft: '40%', }}>
                            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('BankDetails')}>
                                <Text style={styles.buttonText}>Update </Text>
                                <Icon type='antdesign' name='right' size={18} color={Color.White} />
                            </TouchableOpacity>

                        </View>
                    </ScrollView>
                </View>

            </BaseScreen>
        </NativeBaseProvider >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.white
    },
    inputTextTag: {
        // marginTop: 18,
        // marginLeft: '6%',
        // marginBottom: 8,
        fontFamily: Font.LatoBold,
        color:Color.Black,
        fontSize: 25,
        fontWeight: 'bold'


    },
    textInputStyle: {
        backgroundColor: '#fff',
        width: windowWidth * 0.9,
        height: windowWidth * 0.10,
        // padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        alignSelf: 'center',

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
        paddingRight:10,
        paddingLeft:40


    },
    buttonText: {
        fontSize: 22,
        fontFamily: Font.LatoBold,
        color: '#fff',
        fontWeight:'bold'
    },
    servicebox: {
        backgroundColor: '#fff',
        width: windowWidth * 0.9,
        height: windowWidth * 0.78,
        // padding: 10,


        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'flex-start'

    },
    subServicebox: {

        backgroundColor: 'green',
        width: '50%',
        height: '100%',
        alignItems: 'flex-start',
        paddingLeft: 20

    },
    subServiceboxItems: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 25
    },
    subContainer2: {
        flexDirection: 'row',
        // justifyContent: 'space-between'
        // backgroundColor: 'pink',
        marginVertical: 5,
    },
    timerBoxContainer1: {
        // marginHorizontal: 10,
        // alignItems: 'center',
        // justifyContent: 'space-between',
        // flexDirection: 'row',
        // marginVertical: 5,
        flexDirection: 'row',
        flex: 0.6,
        justifyContent: 'space-evenly',
        // backgroundColor: 'orange',
    },
    timerBoxContainer2: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    timerBox: {
        // flex: 0.5,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: Color.mainOrange,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 5,
        paddingVertical: 5,
        //  marginHorizontal: 10,

    }

})





export default Availability;