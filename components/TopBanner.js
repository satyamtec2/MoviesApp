import React from 'react';
import {View, StyleSheet, Dimensions, Image} from 'react-native';
//import {SliderBox} from 'react-native-image-slider-box';

const dimensions = Dimensions.get('screen');
const topBannerImage = require('../assets/images/topBanner.jpg');

class TopBanner extends React.PureComponent {
  render() {
    console.log('In Top Banner!!!!!!!!!!!!!!!!!!!!!!!!!!');
    return (
      <View style={styles.topBanner}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={topBannerImage}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topBanner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    height: 200,
  },
  image: {
    height: 200,
    width: dimensions.width,
    borderRadius: 20,
  },
});

export default TopBanner;
