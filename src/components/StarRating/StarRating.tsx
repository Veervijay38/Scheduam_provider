import React from 'react';
import { ColorValue, View, ViewStyle } from 'react-native';
import { Icon } from 'react-native-elements';
import { Color } from '../../helper';
import { IconType } from '../../helper/iconType';
import { styles } from './StarRating.styles';
// import { FontAwesome5 } from '@expo/vector-icons';

const StarRatings = () => {
  return (
    <View style={{ ...styles.containerStyle, }}>
      {5 && (
        <>
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <Icon
                containerStyle={{ marginHorizontal: 2 }}
                type={IconType.Material}
                key={index}
                name="star"
                size={15}
                color={Color.White}
              />
            ))}
        </>
      )}


      {/* <Text style={styles.reviewCountText}>({reviewCount})</Text> */}
    </View>
  );
};

export default StarRatings;
