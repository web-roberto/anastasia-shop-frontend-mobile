import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Dimensions, View, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper/src';

const { width } = Dimensions.get('window');

const Banner = () => {
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    setBannerData([
      'https://lamour-de-soi.com/wa-data/public/shop/products/13/05/513/images/928/928.970.jpg',
      'https://lamour-de-soi.com/wa-data/public/shop/products/67/04/467/images/529/529.970.png',
      'https://lamour-de-soi.com/wa-data/public/shop/products/16/05/516/images/937/937.970.jpg',
      'https://lamour-de-soi.com/wa-data/public/shop/products/64/04/464/images/839/839.970.jpg',
    ]);

    return () => {
      setBannerData([]);
    };
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.swiper}>
          <Swiper
            style={{ height: width /2 }}
            showButtons={false}
            autoplay={true}
            autoplayTimeout={2}
          >
            {bannerData.map((item) => {
              return (
                <Image
                  key={item}
                  style={styles.imageBanner}
                  resizeMode="contain"
                  source={{ uri: item }}
                />
              );
            })}
          </Swiper>
          <View style={{ height: 0 }} />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgrounColor: 'gainsboro',
  },
  swiper: {
    width: width,
    alignItems: 'center',
    marginTop: 5,
  },
  imageBanner: {
    height: width,
    width: width -40,
    borderRadius: 10,
    marginHorizontal:20,
  },
});

export default Banner;
