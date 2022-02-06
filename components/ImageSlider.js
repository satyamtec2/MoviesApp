import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

const dimensions = Dimensions.get('screen');

class ImageSlider extends React.PureComponent {
  render() {
    console.log('In Top Image Slider!!!!!!!!!!!!!!!!!!!!!!!!!!');
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

export default ImageSlider;
