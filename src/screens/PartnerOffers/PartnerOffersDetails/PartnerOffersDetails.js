import React, { useState } from 'react';
import { Alert, FlatList } from 'react-native';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import Modal from 'react-native-modal';
import { BaseScreen } from '../../../components';
import CustomHeaderWithBadge from '../../../components/Header/CustomHeaderWithBadge';
import StarRatings from '../../../components/StarRating/StarRating';
import { Color } from '../../../helper';
import { IconType } from '../../../helper/iconType';
import routes from '../../../helper/routes';
import { styles } from './PartnerOffersDetails.styles';

const PartnerOffersDetails = (props) => {
    const navigation = props.navigation
    const offerData = props.offerData
    console.log("PartnerOfferDetail ===>", offerData)
    const OfferData = [{
        id: 1,
        offerName: "Gareth Jones",
        offerDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        jobs: 15,
        offerPrice: 3000,
        completeIn: '3.5 hours'
    }, {
        id: 2,
        offerName: "Customer 1",
        offerDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        jobs: 15,
        offerPrice: 1700,
        completeIn: '2 hours'
    }, {
        id: 3,
        offerName: "Customer 2",
        offerDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        jobs: 15,
        offerPrice: 3500,
        completeIn: '4 hours'
    }];
    const reviewData = [{
        id: 1,
        partnerName: 'Partner A',
        raitngStar: '4',
        reviewDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }, {
        id: 2,
        partnerName: 'Partner B',
        raitngStar: '4',
        reviewDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }, {
        id: 3,
        partnerName: 'Partner C',
        raitngStar: '4',
        reviewDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }, {
        id: 4,
        partnerName: 'Partner D',
        raitngStar: '4',
        reviewDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }]
    const [userSelected, setUserSelected] = useState({});
    const [userModalVisible, setUserModalVisible] = useState(false);
    return (
        <BaseScreen>
            <View style={styles.container}>
                <CustomHeaderWithBadge />
                <ScrollView style={styles.subContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                            <Icon type={IconType.MaterialCommunity} name='briefcase-variant' size={30} color={Color.Black} />
                            <Text style={styles.viewHeaderText}>Offer details</Text>
                        </View>
                        {/* <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                            <Icon type={IconType.MaterialCommunity} name='briefcase-variant' size={30} color={Color.Black} /> */}
                        <Text style={styles.custReviewText} onPress={() => setUserModalVisible(true)}>Read Customer Reviews</Text>
                        {/* </View> */}
                    </View>
                    <View style={styles.earningBox}>

                        <View style={styles.earningBox1} >
                            <Icon
                                type={IconType.FontAwesome}
                                name='user-circle-o'
                                size={30}
                                color={Color.White}
                                style={{ padding: 5, }}
                            />
                            <View style={styles.withdrawalBox}>
                                <Text style={styles.custNameText}>{offerData.offerName}</Text>
                                <StarRatings />

                            </View>
                            <View style={styles.totalHoursBox}>
                                <Text style={styles.totalHoursText}>{offerData.completeIn}</Text>
                                <Text style={styles.totalHoursText}>{'\u20A6'} {offerData.offerPrice}</Text>
                            </View>

                        </View>
                        <Text style={styles.offerDesc}>{offerData.offerDesc}</Text>
                    </View>
                    <View style={styles.cleaningPlanBox}>
                        <View>
                            <Text style={styles.viewHeaderText}>Cleaning plan</Text>
                            <Text style={styles.textValue}>3 BedRooms</Text>
                            <Text style={styles.textValue}>2 Bathrooms</Text>
                            <Text style={styles.textValue}>2 Living rooms</Text>
                            <Text style={styles.textValue}>1 Kitchen</Text>
                        </View>
                        <View>
                            <Text style={styles.viewHeaderText}>Extras</Text>
                            <Text style={styles.textValue}>inside Fridge</Text>
                            <Text style={{ ...styles.textValue, fontSize: 12 }}>+ 0.5 hours</Text>
                            <View style={{ borderWidth: 1, borderColor: 'black', height: 70, width: 70, borderRadius: 8, marginTop: '3%', marginLeft: '6%', }}>
                                <Image source={require("../../../assets/images/common/fridge.png")}
                                    style={{ height: '100%', width: "100%", alignSelf: 'center' }}
                                    resizeMode='contain' />
                            </View>
                        </View>
                    </View>
                    <View style={styles.cleaningPlanBox}>
                        <View>
                            <Text style={styles.viewHeaderText}>Schedule</Text>
                            <Text style={styles.textValue}>Once-off</Text>
                            <Text style={styles.textValue}>On Thursday 1 July 2021</Text>
                            <Text style={styles.textValue}>At 10:00 am</Text>
                        </View>

                    </View>
                    <View style={{ marginVertical: 25, justifyContent: 'space-between' }}>
                        <TouchableOpacity style={styles.startChatButton} onPress={() => navigation.navigate(routes.Chat_Screen)}>
                            <Text style={styles.buttonText}>Start Chat</Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity style={styles.AcceptRejectButton} onPress={() => navigation.navigate(routes.PROVIDER_HOME)}>
                                <Text style={styles.buttonText}>Reject</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.AcceptRejectButton} onPress={() => navigation.navigate(routes.PROVIDER_HOME)}>
                                <Text style={styles.buttonText}>Accept</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>

                {/* Change Modal Start */}
                <Modal isVisible={userModalVisible}>
                    <View style={styles.changeModalContainer}>
                        <TouchableOpacity style={styles.closeIcon} onPress={() => setUserModalVisible(false)}>
                            <Icon type={IconType.FontAwesome} name='close'
                                size={30} color={Color.White}


                            />
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'White' }}>
                            <Icon
                                type={IconType.FontAwesome}
                                name='user-circle-o'
                                size={40}
                                color={Color.mainDarkBrown}
                                style={styles.icon}
                            />
                            <View>
                                <Text style={{ color: Color.White, fontSize: 20, fontWeight: 'bold' }}>Gareth Jones</Text>
                                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                                    <StarRatings />
                                    <Text style={{ color: Color.White }}> (15 Jobs)</Text>
                                </View>
                                <Text style={{ color: Color.White }}>123 King's Rd.,Richman</Text>
                            </View>

                        </View>
                        <View style={{ marginTop: 35 }}>
                            <Text style={{ color: Color.White, fontWeight: 'bold' }}>Partner reviews:</Text>
                            <FlatList data={reviewData}
                                renderItem={({ item }) => {
                                    return (
                                        <View style={{ marginVertical: 10 }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text style={{ color: Color.White }}>{item.partnerName}  </Text>
                                                <StarRatings />
                                            </View>
                                            <Text style={{ color: Color.White }}>{item.reviewDesc}</Text>
                                        </View>
                                    )
                                }}
                            />
                        </View>
                    </View>
                </Modal>
                {/* Change Modal End */}
            </View >
        </BaseScreen>
    )
}
export default PartnerOffersDetails;