/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Availability from "./Availability/Availability";
import MyProfile from "./Profile/MyProfile";
import { IconType } from '../../helper/iconType';
import { Icon } from 'react-native-elements';
import { BaseScreen } from '../../components';

import { Color } from '../../helper';
import Style from "./Style";
import CustomHeaderWithBadge from "../../components/Header/CustomHeaderWithBadge";
const Mytabs = (props) => {
    console.log("tabs", props)
    const [selectedTab, setSelectedTab] = useState(0);

    // useEffect(() => {
    //     if (props.myChallengeScreen) {
    //         setSelectedTab(1);
    //     }
    // }, [props.myChallengeScreen]);

    return (
        <>
            <BaseScreen>
                <CustomHeaderWithBadge />
                <View>
                    <View style={Style.headercontainner}>
                        <View style={Style.tabStyle}>
                            <TouchableOpacity
                                onPress={() => setSelectedTab(0)}
                                style={[
                                    Style.tabChalStyle,
                                    {
                                        borderBottomColor: selectedTab == 0 ? 'black' : null,
                                        borderBottomWidth: selectedTab == 0 ? 2 : 0,
                                    },
                                ]}
                            >
                                <Icon type={IconType.FontAwesome} name='user-circle-o' size={30} style={Style.icon} />
                                <Text
                                    style={[
                                        Style.tabTextStyle,
                                        {
                                            color:
                                                selectedTab == 0 ? 'black' : 'black',
                                        },
                                    ]}
                                >
                                    My Profile
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => setSelectedTab(1)}
                                style={[
                                    Style.tabChalStyle,
                                    {
                                        borderBottomColor: selectedTab == 1 ? 'black' : null,
                                        borderBottomWidth: selectedTab == 1 ? 2 : 0,
                                    },
                                ]}
                            >
                                <Icon type={IconType.FontAwesome} name='calendar' size={30} style={Style.icon} />

                                <Text
                                    style={[
                                        Style.tabTextStyle,
                                        {
                                            color:
                                                selectedTab == 1 ? 'balck' : 'black',
                                        },
                                    ]}
                                >
                                    Availability
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, backgroundColor: '#eeee' }}>
                    {selectedTab == 0 ? <MyProfile /> : <Availability />}
                </View>
            </BaseScreen>
        </>
    );
};

export default Mytabs;
