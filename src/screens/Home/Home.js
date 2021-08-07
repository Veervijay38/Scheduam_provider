import { NativeBaseProvider } from "native-base";
import React, { useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import Modal from 'react-native-modal';
import { BaseScreen } from '../../components';
import { Color, Font } from '../../helper';
import { IconType } from '../../helper/iconType';
import routes from '../../helper/routes';
import { styles } from './Home.styles';
import CustomHeaderWithBadge from "../../components/Header/CustomHeaderWithBadge";


const Home = ({ navigation }) => {
    // const navigation = useNavigation()
    const todayData = [
        {
            header: `Today's Jobs`,
            data: [
                {
                    id: 1, custName: "Customer 1",
                    header: 'Today s Jobs', date: 'Thu 1 Jul 2021, 10:00am'
                },
                {
                    id: 2, custName: "Customer 2",
                    header: 'Today s Jobs', date: 'Thu 1 Jul 2021, 02:00pm'
                }]
        },
        {
            header: `Tomorrow's Jobs`,
            data: [
                { id: 1, custName: "Customer 3", date: 'Fri 2 Jul 2021, 10:00am' },
                {
                    id: 2, custName: "Customer 4", date: 'Fri 2 Jul 2021, 02:00pm'
                },
            ]
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
            <CustomHeaderWithBadge />
            <View style={styles.container}>


                <Text style={styles.TextTag}>Welcome back Matthew</Text>
                <FlatList
                    keyExtractor={(item, index) => item.id}
                    data={todayData}
                    renderItem={({ item }) => {
                        console.log('100 49 Data ===>', item)
                        return (
                            <>
                                <Text style={styles.listHeaderText}>{item.header}</Text>
                                {item.data.map((item, index) =>
                                    <TouchableOpacity
                                        onPress={() => { navigation.navigate(routes.Job_Details, { Data: item }) }}
                                        style={styles.innerCardContainer}
                                        key={index}
                                    >

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
                                                <Text style={styles.custNameText}>{item.custName}</Text>
                                            </View>
                                            {/* <View style={{ backgroundColor: 'pink' }}> */}
                                            <Text style={styles.dateText}>{item.date}</Text>
                                            {/* </View> */}
                                        </View>
                                        <View style={{
                                            backgroundColor: Color.mainOrange,
                                            width: '13%',
                                        }}>
                                            <TouchableOpacity style={styles.chatCardStyle}
                                                onPress={() => { navigation.navigate(routes.Chat_Screen, { Data: item }) }}
                                            >
                                                <Icon
                                                    type={IconType.Ionicon}
                                                    name='chatbubble-outline'
                                                    size={24}
                                                    color={Color.White}

                                                />
                                                <Text style={{ color: Color.White, fontSize: 12, marginTop: 5, }}>Chat</Text>

                                            </TouchableOpacity>
                                        </View>
                                        <View style={{
                                            backgroundColor: Color.mainDarkBrown,
                                            width: '13%',
                                        }}>
                                            <TouchableOpacity style={styles.changeCardStyle} onPress={toggleChangeModal}>
                                                <Icon
                                                    type={IconType.FontAwesome}
                                                    name='calendar'
                                                    size={24}
                                                    color={Color.White}
                                                />
                                                <Text style={{ color: Color.White, fontSize: 11, marginTop: 5, }}>Change</Text>

                                            </TouchableOpacity>
                                        </View>

                                        <View style={{
                                            backgroundColor: Color.mainOrange,
                                            width: '13%',
                                        }}>
                                            <TouchableOpacity style={styles.card} onPress={toggleCancelModal}>
                                                <Icon
                                                    type={IconType.MaterialCommunity}
                                                    name='cancel'
                                                    size={24}
                                                    color={Color.White}
                                                />
                                                <Text style={{ color: Color.White, fontSize: 12, marginTop: 5, }}>Cancel</Text>

                                            </TouchableOpacity>
                                        </View>
                                    </TouchableOpacity>)}
                            </>
                        )
                    }

                    }

                />

            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity onPress={() => { navigation.navigate(routes.Top_Tab) }}
                    style={styles.button} >


                    <Text style={styles.buttonText}>All Jobs </Text>
                    <Icon
                        containerStyle={{ marginLeft: 20 }}
                        type={IconType.FontAwesome}
                        name='calendar'
                        size={24}
                        color={Color.White}
                    />
                </TouchableOpacity>
            </View>


            {/* Change Modal Start */}
            <Modal isVisible={changeModallVisible}>
                <View style={styles.changeModalContainer}>
                    <View style={styles.changeModalHeaderBox}>
                        <Icon
                            type={IconType.FontAwesome}
                            name='calendar'
                            size={28}
                            color={Color.fontOrangeYellow}
                            style={{ marginRight: 10, }}
                        />

                        <Text style={styles.changeModalHeaderText}>Propose a booking change</Text>

                    </View>

                    <View style={{ marginVertical: 10 }}>
                        <Text style={styles.changeModalDateLabel}>Date</Text>
                        <View style={styles.changeModalDateTimeBox}>
                            <Text style={styles.changeModalDateText}>Thursday 1 Jul 2021</Text>
                            <Icon
                                type={IconType.FontAwesome}
                                name='calendar'
                                size={24}
                                color={Color.mainOrange}
                            />
                        </View>
                    </View>
                    <View style={{ marginVertical: 10 }}>
                        <Text style={styles.changeModalDateLabel}>Time</Text>
                        <View style={styles.changeModalDateTimeBox}>
                            <Text style={styles.changeModalDateText}>10:00 am</Text>
                            <Icon
                                type={IconType.Antdesign}
                                name='caretdown'
                                size={20}
                                color={Color.mainOrange}
                            />
                        </View>
                    </View>

                    <TouchableOpacity onPress={() => { setChangeModalVisible(false) }} style={{ ...styles.modalOkButton, backgroundColor: Color.mainOrange }}>
                        <Text style={{ color: Color.White }}>OK</Text>
                    </TouchableOpacity>
                    {/* <Button title="Hide modal" onPress={toggleChangeModal} /> */}
                </View>
            </Modal>
            {/* Change Modal End */}

            {/* Cancel Modal Start */}
            <Modal isVisible={cancelModallVisible}>
                <View style={styles.changeModalContainer}>
                    <View style={styles.changeModalHeaderBox}>
                        <Icon
                            type={IconType.MaterialCommunity}
                            name='cancel'
                            size={28}
                            color={Color.mainRed}
                            style={{ marginRight: 10, }}
                        />
                        <Text style={styles.changeModalHeaderText}>Cancel booking</Text>
                    </View>

                    <View style={{ marginVertical: 10 }}>

                        <Text style={{ fontSize: 20, color: Color.Black }}>
                            Are you sure you want to cancel this booking?
                        </Text>

                    </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10, }}>

                        <TouchableOpacity onPress={() => { setCancelModalVisible(false) }} style={{ ...styles.modalOkButton, backgroundColor: Color.mainDarkGrey }}>
                            <Text style={styles.cancelModalButtonText}>No</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { setCancelModalVisible(false) }} style={{ ...styles.modalOkButton, backgroundColor: Color.mainRed }}>
                            <Text style={styles.cancelModalButtonText}>Yes, Cancel</Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </Modal>
            {/* Cancel Modal End */}



        </BaseScreen>

    )
}



export default Home;