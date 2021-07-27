import { Platform, Dimensions, StatusBar } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import IPhoneXhelper from './IPhoneXhelper'
export default {
  moderateScale,
  scale,
  IPhoneXhelper,
  verticalScale,
  Spacing: {
    extraTiny: moderateScale(2),
    tiny: moderateScale(4),
    small: moderateScale(8),
    medium: moderateScale(12),
    large: moderateScale(16),
    extraLarge: moderateScale(24),
    huge: moderateScale(28),
    extraHuge: moderateScale(32),
    giant: moderateScale(40)
  },
  FontSize: {
    extraTiny: moderateScale(8),
    tiny: moderateScale(10),
    small: moderateScale(12),
    medium: moderateScale(14),
    large: moderateScale(16),
    extraLarge: moderateScale(18),
    huge: moderateScale(22),
    extraHuge: moderateScale(28)
  },
  NavBar: {
    height: Platform.OS === 'ios' ? 64 : 56
  },
  screenWidth: () => Dimensions.get('window').width,
  screenHeight: () => Dimensions.get('window').height
};
