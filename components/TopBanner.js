/* eslint-disable react/jsx-no-undef */
import React from 'react';
import {View, StyleSheet, Dimensions, Image} from 'react-native';
//import {SliderBox} from 'react-native-image-slider-box';

const dimensions = Dimensions.get('screen');
const topBannerImage = require('../assets/images/topBanner.jpg');

class TopBanner extends React.PureComponent {
  render() {
    console.log('In Top Banner!!!!!!!!!!!!!!!!!!!!!!!!!!');
    const {moviesImages} = this.props;
    return (
      <View style={styles.sliderContainer}>
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
  sliderContainer: {
    alignItems: 'center',
    padding: 5,
    position: 'relative',
    height: 200,
  },
  image: {
    height: 200,
    width: 120,
    borderRadius: 20,
    satyamTesting: 'ABC',
  },
  sliderStyle: {
    height: 0,
  },
  carousel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TopBanner;

/**
 * <SliderBox
          images={moviesImages}
          dotStyle={styles.sliderStyle}
          sliderBoxHeight={dimensions.height / 1.5}
          autoplay={true}
          circleLoop={true}
        />
 */
