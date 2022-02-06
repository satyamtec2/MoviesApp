import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

const dimensions = Dimensions.get('screen');

class Banner extends React.PureComponent {
  render() {
    console.log('Android Top Banner Component Loaded !!');
    const {moviesImages} = this.props;
    return (
      <View style={styles.sliderContainer}>
        <SliderBox
          images={moviesImages}
          dotStyle={styles.sliderStyle}
          sliderBoxHeight={dimensions.height / 1.5}
          autoplay={true}
          circleLoop={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sliderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderStyle: {
    height: 0,
  },
});

export default Banner;
