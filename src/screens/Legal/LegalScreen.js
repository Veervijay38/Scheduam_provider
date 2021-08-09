import React from 'react';

import { Text, View, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';
import { BaseScreen } from '../../components';
import CustomHeaderWithBadge from '../../components/Header/CustomHeaderWithBadge';
import { Color } from '../../helper';
import { IconType } from '../../helper/iconType';
import { styles } from './LegalScreen.styles';

const LegalScreen = (props) => {
    const helpData = [{
        id: 1,
        header: 'Lorem ipsum dolor sit amet',
        desc: 'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        id: 2,
        header: 'Lorem ipsum dolor sit amet',
        desc: 'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        id: 3,
        header: 'Lorem ipsum dolor sit amet',
        desc: 'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        id: 4,
        header: 'Lorem ipsum dolor sit amet',
        desc: 'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },]
    return (
        <BaseScreen>
            <CustomHeaderWithBadge {...props} />
            <View style={styles.container}>
                <View style={styles.mainHeaderView} >
                    <Icon type={IconType.FontAwesome} name='balance-scale' size={25} color={Color.Black} />
                    <Text style={styles.mainHeaderText}>  Legal</Text>
                </View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={helpData}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.listMainView}>
                                <Text style={styles.listHeaderText}>{item.header}</Text>
                                <Text style={styles.listDescText}>{item.desc}</Text>
                            </View>
                        )
                    }}
                />
            </View>
        </BaseScreen>

    )
}
export default LegalScreen;
