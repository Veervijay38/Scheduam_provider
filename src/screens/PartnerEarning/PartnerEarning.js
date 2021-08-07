import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import CustomHeaderWithBadge from '../../components/Header/CustomHeaderWithBadge';
import { Color } from '../../helper';
import { IconType } from '../../helper/iconType';
import { styles } from './PartnerEarning.styles'
const PartnerEarning = () => {
    return (
        <View style={styles.container}>
            <CustomHeaderWithBadge />
            <View style={styles.subContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                    <Icon type={IconType.MaterialCommunity} name='currency-usd-circle-outline' size={25} color={Color.Black} />
                    <Text style={{ color: Color.Black, fontWeight: 'bold', fontSize: 25 }}>Earning</Text>
                </View>

                <View style={styles.earningBox}>
                    <View style={styles.withdrawalBox}>
                        <Text style={styles.withdrawalHeader}>Available for withdrawal</Text>
                        <Text style={styles.withdrawalValue}>{'\u20A6'}  12 000</Text>
                    </View>

                    <View style={styles.withdrawalBox}>
                        <Text style={styles.withdrawalHeader}>Pending Clearance</Text>
                        <Text style={styles.withdrawalValue}>{'\u20A6'}  65000</Text>
                    </View>
                </View>
                <View style={styles.earningBox}>
                    <View style={styles.withdrawalBox}>
                        <Text style={styles.withdrawalHeader}>Expected Earning (July 2021)</Text>
                        <Text style={styles.withdrawalValue}>{'\u20A6'}  130 000</Text>
                    </View>

                    <View style={styles.withdrawalBox}>
                        <Text style={styles.withdrawalHeader}>Cancelled Jobs</Text>
                        <Text style={styles.withdrawalValue}>-{'\u20A6'}  9000</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.withdrawButtonBox}>
                    <Icon type={IconType.MaterialCommunity} name='home-analytics' size={25} color={Color.White} />
                    <Text style={{ color: Color.White, marginLeft: 30, fontSize: 20 }}>Withdraw</Text>
                </TouchableOpacity>
            </View>

        </View >
    )
}
export default PartnerEarning;