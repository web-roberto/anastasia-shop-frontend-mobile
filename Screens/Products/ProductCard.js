import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  Button,
} from 'react-native';

const { width } = Dimensions.get('window');

const ProductCard = (props) => {
  const { name, price, image, countInStock } = props;

  console.log('--------------------image---------------', image);
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{ uri: image }}
      />
      <View style={styles.card} />
      <Text style={styles.title}>
        {name.length > 30 ? name.substring(0, 15 - 3) + '...' : name}
      </Text>

      <Text style={styles.price}>${price} </Text>

      {countInStock > 0 ? (
        <View style={{ maginBottom: 60 }}>
          <Button title={'В КОРЗИНУ'} color={'green'} />
        </View>
      ) : (
        <Text style={{ marginTop: 20 }}>Недоступен в данный момент</Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: width / 2 - 10,
    height: width / 1.3,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 10,
    alignItems: 'center',
    elevation: 8,
    backgroundColor: 'white',
  },
  image: {
    width: width / 2 - 20 - 10,
    height: width / 1.5 - 20 - 30,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
  },
  card: {
    marginBottom: 110,
    height: width / 2 - 20 - 90,
    backgroundColor: 'transparent',
    width: width / 2 - 20 - 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  price: {
    fontSize: 20,
    color: 'orange',
    marginTop: 0,
  },
});

export default ProductCard;
