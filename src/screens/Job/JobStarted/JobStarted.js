import { NativeBaseProvider } from "native-base";
import React, { useState, } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CheckBox, Icon } from 'react-native-elements';
import { BaseScreen } from '../../../components';
import { Color, Font } from '../../../helper';
import { IconType } from '../../../helper/iconType';
import { styles } from './JobStart.styles';
import { useNavigation } from '@react-navigation/native';
import { routes } from '../../../helper/routes'
import Modal from 'react-native-modal';
import { paddingTop } from "styled-system";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const JobStarted = (props) => {
    // console.log("10 19 JobDetail Props ===>", props)
    // console.log("10 19 JobDetail Props ===>", item)

    const navigation = props.navigation
    const custDetail = props.Data
    console.log("10 19 JobDetail Props ===>", custDetail)
    const [CheckBoxValue, setCheckBoxValue] = useState({
        Bedroom: false, Bathroom: false,
        livingroom: false, Kitchen: false,
        fridge: false,
    })
    const [changeModallVisible, setChangeModalVisible] = useState(false);
    const [cancelModallVisible, setCancelModalVisible] = useState(false);

    const toggleChangeModal = () => {
        setChangeModalVisible(!changeModallVisible);
    };
    const handleSubmitPress = () => {
        console.log(CheckBoxValue, "101010");
        if (CheckBoxValue.Bathroom === true && CheckBoxValue.Bedroom === true && CheckBoxValue.Kitchen === true && CheckBoxValue.fridge === true && CheckBoxValue.livingroom === true) {

            navigation.navigate('CompleteJob')
        }
        else {
            toggleChangeModal();
        }





    };



    return (
        <View style={styles.container}>
            {/* Header Start */}
            <View style={{ alignItems: 'center', width: '100%', height: '10%', marginBottom: '0%', }} >

                <Image source={require("../../../assets/images/common/logo.png")}
                    style={{ height: '100%', width: "65%" }}
                    resizeMode='contain' />
            </View>
            {/* Header End */}
            {/* Back button Start */}
            <View style={styles.backHeaderContainer} >
                <View style={styles.backHeaderBox}>
                    <Icon onPress={() => navigation.goBack()} type={IconType.Material} name='arrow-back-ios' size={24} color={Color.Black} />
                    <Text style={styles.backHeaderText}>Back</Text>
                </View>
                <View style={styles.totalHoursBox}>
                    <Text style={styles.totalHoursText}>3.5 hours</Text>
                    <Text style={styles.totalHoursText}>3000</Text>
                </View>

            </View>
            {/* Back button End */}
            <ScrollView style={{ marginTop: 10 }} showsVerticalScrollIndicator={false}>
                <TouchableOpacity
                    onPress={() => { navigation.navigate(routes.JOB_DETAILS, { Data: item }) }}
                    style={styles.innerCardContainer}>

                    <View style={styles.subInnerCard}>
                        <View style={{
                            // backgroundColor: 'green',
                            flexDirection: 'row',
                            // paddingVertical: 5,
                            alignItems: 'center'
                        }}>
                            <Icon
                                type={IconType.FontAwesome}
                                name='user-circle-o'
                                size={24}
                                color={Color.White}
                                style={{ padding: 5, }}
                            />
                            <Text style={styles.custNameText}>{custDetail.custName}</Text>
                        </View>
                        {/* <View style={{ backgroundColor: 'pink' }}> */}
                        <Text style={styles.dateText}>{custDetail.date}</Text>
                        {/* </View> */}
                    </View>
                    <View style={styles.chatCardStyle}>
                        <Icon
                            type={IconType.Ionicon}
                            name='chatbubble-outline'
                            size={24}
                            color={Color.White}

                        />
                        <Text style={{ color: Color.White, fontSize: 12, marginTop: 5, }}>Chat</Text>

                    </View>



                </TouchableOpacity>

                <View style={{ marginVertical: 15, backgroundColor: 'orange', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', }}>
                    <Icon style={{}} type={IconType.FontAwesome} name='clock-o' size={35} color='white' />
                    <Text style={{ color: 'white', fontFamily: Font.OpenSansRegular, fontSize: 18, }}>Job started 1 July 2021, 09:59 am</Text>
                </View>
                {/* Address View Start */}
                <View style={{ marginVertical: 15, marginHorizontal: 15, }}>
                    <Text style={styles.addressLabel}>Address</Text>
                    <View style={styles.addressDescView}>

                        <Text style={styles.addressValue}>123 Kings Rd.,Victoria Island, 101241</Text>
                        <Icon type={IconType.FontAwesome} name='map-marker' size={30} color={Color.mainOrange} />

                    </View>
                </View>
                {/* Address View End */}
                <View style={{ marginVertical: 15, marginHorizontal: 15, }}>
                    <Text style={styles.addressLabel}>Cleaning plan</Text>
                    <CheckBox
                        containerStyle={{ paddingVertical: 0, backgroundColor: 'white', borderWidth: 0, }}
                        title={<Text style={styles.plantext}>3 Bedrooms</Text>}
                        checkedColor={Color.mainOrange}
                        checked={CheckBoxValue.Bedroom}
                        onPress={() => setCheckBoxValue({ ...CheckBoxValue, Bedroom: !CheckBoxValue.Bedroom })}
                    />
                    <CheckBox
                        containerStyle={{ paddingVertical: 0, backgroundColor: 'white', borderWidth: 0 }}
                        title={<Text style={styles.plantext}>2 Bathrooms</Text>}
                        checkedColor={Color.mainOrange}
                        checked={CheckBoxValue.Bathroom}
                        onPress={() => setCheckBoxValue({ ...CheckBoxValue, Bathroom: !CheckBoxValue.Bathroom })}
                    />

                    <CheckBox
                        containerStyle={{ paddingVertical: 0, backgroundColor: 'white', borderWidth: 0 }}
                        title={<Text style={styles.plantext}>2 Living rooms</Text>}
                        checkedColor={Color.mainOrange}
                        checked={CheckBoxValue.livingroom}
                        onPress={() => setCheckBoxValue({ ...CheckBoxValue, livingroom: !CheckBoxValue.livingroom })}
                    />

                    <CheckBox
                        containerStyle={{ paddingVertical: 0, backgroundColor: 'white', borderWidth: 0 }}
                        title={<Text style={styles.plantext}>1 Kitchen</Text>}
                        checkedColor={Color.mainOrange}
                        checked={CheckBoxValue.Kitchen}
                        onPress={() => setCheckBoxValue({ ...CheckBoxValue, Kitchen: !CheckBoxValue.Kitchen })}
                    />
                    <CheckBox
                        containerStyle={{ paddingVertical: 0, backgroundColor: 'white', borderWidth: 0 }}
                        title={<Text style={styles.plantext}>1 Extra - Inside fridge</Text>}
                        fontStyle={styles.plantext}
                        checked={CheckBoxValue.fridge}
                        checkedColor={Color.mainOrange}
                        onPress={() => setCheckBoxValue({ ...CheckBoxValue, fridge: !CheckBoxValue.fridge })}
                    />

                </View>
                <View style={{ borderWidth: 1, borderColor: 'black', height: 70, width: 70, borderRadius: 8, marginTop: '3%', marginLeft: '6%', }}>
                    <Image source={require("../../../assets/images/common/fridge.png")}
                        style={{ height: '100%', width: "100%", alignSelf: 'center' }}
                        resizeMode='contain' />
                </View>
                <TouchableOpacity style={styles.button}
                    onPress={handleSubmitPress}>
                    <Text style={styles.buttonText}>Complete Job </Text>
                </TouchableOpacity>
                {/* Change Modal Start */}
                <Modal isVisible={changeModallVisible}>

                    <View style={styles.changeModalContainer}>
                        <View style={{ flexDirection: 'row', paddingVertical: 15, justifyContent: 'center' }}>
                            {/* <View style={{ paddingTop: 20, paddingLeft: 25 }}> */}
                            <Icon
                                type={IconType.FontAwesome}
                                name='exclamation-triangle'
                                size={35}
                                color='orange'
                                containerStyle={{ flex: 0.2 }}
                            />

                            <Text style={styles.changeModalHeaderText}>You have not completed all of the checklist items.Please confirm all items have been completed.</Text>

                        </View>
                        <View style={{ marginVertical: 6 }}>

                            <TouchableOpacity onPress={() => { setChangeModalVisible(false) }} style={{ ...styles.modalOkButton, backgroundColor: Color.mainOrange }}>
                                <Text style={{ color: Color.White, fontFamily: Font.LatoBold, fontWeight: 'bold', fontSize: 20 }}>OK</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </Modal>
                {/* Change Modal End */}



            </ScrollView>
        </View >

    )
}




export default JobStarted;