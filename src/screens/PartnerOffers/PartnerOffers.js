
import React from 'react';
import { FlatList } from 'react-native';
import { Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { BaseScreen } from '../../components';

import CustomHeaderWithBadge from '../../components/Header/CustomHeaderWithBadge';
import StarRatings from '../../components/StarRating/StarRating';
import { Color } from '../../helper';
import { IconType } from '../../helper/iconType';
import routes from '../../helper/routes';
import { styles } from './PartnerOffers.styles'
const PartnerOffers = (props) => {
    const navigation = props.navigation
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
    }]
    return (
        <BaseScreen>
            <CustomHeaderWithBadge />
            <View style={styles.container}>

                <View style={styles.subContainer}>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                        <Icon type={IconType.MaterialCommunity} name='briefcase-variant' size={25} color={Color.Black} />
                        <Text style={{ color: Color.Black, fontWeight: 'bold', fontSize: 25 }}>New Offers</Text>
                    </View>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={OfferData}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity style={styles.earningBox}
                                    onPress={() => navigation.navigate(routes.PARTNER_OFFERS_DETAILS, { offerData: item })}
                                >

                                    <View style={styles.earningBox1}>
                                        <Icon
                                            type={IconType.FontAwesome}
                                            name='user-circle-o'
                                            size={30}
                                            color={Color.White}
                                            style={{ padding: 5, }}
                                        />
                                        <View style={styles.withdrawalBox}>
                                            <Text style={styles.custNameText}>{item.offerName}</Text>
                                            <StarRatings />

                                        </View>
                                        <View style={styles.totalHoursBox}>
                                            <Text style={styles.totalHoursText}>{item.completeIn}</Text>
                                            <Text style={styles.totalHoursText}>{'\u20A6'} {item.offerPrice}</Text>
                                        </View>

                                    </View>
                                    <Text style={{ marginLeft: 35, textAlign: 'left', color: Color.White, fontSize: 15 }}>{item.offerDesc}</Text>
                                </TouchableOpacity>
                            )
                        }}
                    />

                </View>

            </View >
        </BaseScreen>
    )
}
export default PartnerOffers;