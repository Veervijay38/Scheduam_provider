import { DrawerItem } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { Drawer } from 'native-base';
import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Icon } from 'react-native-elements';
import { Color } from '../../helper';
import { IconType } from '../../helper/iconType';
import routes from '../../helper/routes';


const DrawerContent = (props) => {
    const navigation = useNavigation()
    console.log('DrawerContent Props ===>', props)
    const onItemSelect = (index) => {
        // console.log('DrawerContent Props ===>', )
        const selectedRoute = props.state.routeNames[index];
        props.navigation.navigate(selectedRoute)
        props.navigation.closeDrawer()
    }
    return (
        <View style={{ flex: 1, backgroundColor: Color.mainOrange, }}>
            {props.state.routes.map((route, index) => {
                const { options } = props.descriptors[route.key];
                return (
                    <DrawerItem
                        onPress={() => onItemSelect(index)}
                        key={index}
                        label={options.title}
                        labelStyle={{ color: Color.White }}
                        icon={() => (
                            <Icon
                                type={options.iconType}
                                name={options.iconName}
                                size={24}
                                color={Color.White}
                                style={{ padding: 5, }}
                            />
                        )}
                    />
                    // <View>
                    //     <Text>{options.title}</Text>
                    // </View>
                )
            })}
        </View>
        // <View><Text>Hello Drawer Content</Text></View>
    )
}
export default DrawerContent;

