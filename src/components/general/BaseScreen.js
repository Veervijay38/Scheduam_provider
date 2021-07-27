import React from 'react';

import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Platform,
  Dimensions as dm
} from 'react-native';
import { Color, Dimensions } from '../../helper'
import IPhoneXhelper from "../../helper/IPhoneXhelper";

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? IPhoneXhelper.isIphoneX() ? 40 : 24 : 0;
const BaseScreen = (props) => {
  return (

    <View
      style={styles.container}>
        <View style={{ height: STATUSBAR_HEIGHT, backgroundColor: Color.White }}>
          <StatusBar backgroundColor={Color.whiteD7D7D7} barStyle="light-content" />
        </View>
        {props.children}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: Color.White,
  },
});

export default BaseScreen;