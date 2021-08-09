import React from 'react';
import { View, Text } from 'react-native';
import { Switch, Icon } from 'react-native-elements';
import { BaseScreen } from '../../components';
import CustomHeaderWithBadge from '../../components/Header/CustomHeaderWithBadge';
import { Color } from '../../helper';
import { IconType } from '../../helper/iconType';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { styles } from './SettingsScreen.styles'
const SettingScreen = (props) => {
    return (
        <BaseScreen>
            <CustomHeaderWithBadge {...props} />
            <View style={styles.container}>
                <View style={styles.mainHeaderView} >
                    <Icon type={IconType.FontAwesome} name='gears' size={25} color={Color.Black} />
                    <Text style={styles.mainHeaderText}>  Settings</Text>
                </View>
                <View style={styles.switchView}>
                    <Text style={styles.swithText}>Allow FaceID Login</Text>
                    <Switch value={true} color={Color.mainOrange} />
                </View>
                <View style={styles.switchView}>
                    <Text style={styles.swithText}>Allow TouchID Login</Text>
                    <Switch value={true} color={Color.mainOrange} />
                </View>

            </View>
        </BaseScreen>
    )
}
export default SettingScreen