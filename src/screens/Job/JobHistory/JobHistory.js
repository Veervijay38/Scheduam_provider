import { NativeBaseProvider } from "native-base";
import React, { useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import Modal from 'react-native-modal';
import { BaseScreen } from '../../../components';
import { Color, Font } from '../../../helper';
import { IconType } from '../../../helper/iconType';
import routes from '../../../helper/routes';
import { styles } from './JobHistory.styles';
import CustomHeaderWithBadge from '../../../components/Header/CustomHeaderWithBadge';




const JobHistory = (props) => {

    const navigation = props.navigation
    // const navigation = useNavigation()
    const todayData = [
        {
            id: 1, custName: "Customer 1",
            date: 'Wednesday, 1 Jul 2021, 10:00am'
        },
        {
            id: 2, custName: "Customer 2",
            date: 'Thursday, 2 Jul 2021, 02:00pm'
        }
        ,
        {
            id: 3, custName: "Customer 3",
            date: 'Friday, 3 Jul 2021, 02:00pm'
        }
        ,
        {
            id: 4, custName: "Customer 4",
            date: 'Saturday, 4 Jul 2021, 02:00pm'

        },
        {
            id: 5, custName: "Customer 5",
            date: 'Sunday, 5 Jul 2021, 02:00pm'
        }

    ]
    const [changeModallVisible, setChangeModalVisible] = useState(false);
    const [cancelModallVisible, setCancelModalVisible] = useState(false);

    const toggleChangeModal = () => {
        setChangeModalVisible(!changeModallVisible);
    };

    const toggleCancelModal = () => {
        setCancelModalVisible(!cancelModallVisible);
    };
    return (

        <BaseScreen>
            <View style={styles.container}>
                <CustomHeaderWithBadge />
                <View style={styles.subContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon
                            type={IconType.FontAwesome}
                            name='clock-o'
                            size={25}
                            color={Color.Black}
                            style={{ paddingHorizontal: 5 }}

                        />
                        <Text style={styles.TextTag}>Job History</Text>
                    </View>




                    <FlatList

                        data={todayData}
                        renderItem={({ item }) => {
                            console.log('100 49 Data ===>', item)
                            return (
                                <TouchableOpacity
                                    onPress={() => { navigation.navigate(routes.Job_Details, { Data: item }) }}
                                    style={styles.innerCardContainer}>

                                    <View style={styles.subInnerCard}>
                                        <View style={{
                                            //backgroundColor: 'green',
                                            flexDirection: 'row',
                                            paddingVertical: 5,
                                            alignItems: 'center'
                                        }}>
                                            <Icon
                                                type={IconType.FontAwesome}
                                                name='user-circle-o'
                                                size={35}
                                                color={Color.Pink}
                                                style={{ padding: 2, backgroundColor: Color.White, borderRadius: 25 }}
                                            />
                                            <Text style={styles.custNameText}>{item.custName}</Text>
                                        </View>
                                        {/* <View style={{ backgroundColor: 'pink' }}> */}
                                        <Text style={styles.dateText}>{item.date}</Text>
                                        {/* </View> */}
                                    </View>
                                    <TouchableOpacity style={styles.invoiceStyle}
                                        onPress={() => { navigation.navigate(routes.Chat_Screen, { Data: item }) }}
                                    >
                                        <Icon
                                            type={IconType.FontAwesome5}
                                            name='file-invoice-dollar'
                                            size={24}
                                            color={Color.White}

                                        />
                                        <Text style={{ color: Color.White, fontSize: 12, marginTop: 5, }}>invoice</Text>

                                    </TouchableOpacity>


                                </TouchableOpacity>
                            )
                        }

                        }
                    />


                </View>

            </View>

        </BaseScreen>
    )
}



export default JobHistory;