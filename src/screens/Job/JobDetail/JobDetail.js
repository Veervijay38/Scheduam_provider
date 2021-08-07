import { NativeBaseProvider } from "native-base";
import React, { useState, } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CheckBox, Icon } from 'react-native-elements';
import { BaseScreen } from '../../../components';
import { Color, Font } from '../../../helper';
import { IconType } from '../../../helper/iconType';
import { styles } from './JobDetail.styles';
import { useNavigation } from '@react-navigation/native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import routes from "../../../helper/routes";
import CustomHeaderLogo from "../../../components/Header/CustomerHeaderLogo/CustomerHeaderLogo";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const JobDetail = (props) => {
    console.log("10 19 JobDetail Props ===>", props)
    // console.log("10 19 JobDetail Props ===>", item)
    const navigation = props.navigation
    const custDetail = props.Data
    console.log("10 19 JobDetail Props ===>", custDetail)
    const [CheckBoxValue, setCheckBoxValue] = useState({
        Bedroom: true, Bathroom: true,
        livingroom: true, Kitchen: true,
        fridge: true,
    })



    return (
        <BaseScreen>
            <CustomHeaderLogo />
            <View style={styles.container}>
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
                <ScrollView showsVerticalScrollIndicator={false}>
                    <TouchableOpacity

                        style={styles.innerCardContainer}>

                        <View style={styles.subInnerCard}>
                            <View style={{
                                flexDirection: 'row',
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

                            <Text style={styles.dateText}>{custDetail.date}</Text>

                        </View>
                        <TouchableOpacity style={styles.chatCardStyle}
                            onPress={() => { navigation.navigate(routes.Chat_Screen, { Data: item }) }}>
                            <Icon
                                type={IconType.Ionicon}
                                name='chatbubble-outline'
                                size={24}
                                color={Color.White}

                            />
                            <Text style={{ color: Color.White, fontSize: 12, marginTop: 5, }}>Chat</Text>

                        </TouchableOpacity>



                    </TouchableOpacity>
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
                        <Text style={styles.plantext}>3 Bedrooms</Text>
                        <Text style={styles.plantext}>2 Bathrooms</Text>
                        <Text style={styles.plantext}>2 Living rooms</Text>
                        <Text style={styles.plantext}>1 Kitchen</Text>
                        <Text style={styles.plantext}>1 Extra - Inside fridge</Text>

                    </View>
                    <View style={{ borderWidth: 1, borderColor: 'black', height: 70, width: 70, borderRadius: 8, marginTop: '3%', marginLeft: '6%', }}>
                        <Image source={require("../../../assets/images/common/fridge.png")}
                            style={{ height: '100%', width: "100%", alignSelf: 'center' }}
                            resizeMode='contain' />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(routes.Job_Started, { Data: custDetail })}>
                        <Text style={styles.buttonText}>Start Job </Text>
                    </TouchableOpacity>

                </ScrollView>

            </View>
        </BaseScreen>
    )
}




export default JobDetail;