import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Content, Left, Body, ListItem, Thumbnail, Text } from 'native-base';

const { width } = Dimensions.get('window');

const SearchedProduct = (props) => {
  const { productsFiltered } = props;
  return (
    <Content style={{ width: width }}>
      {productsFiltered.length > 0 ? (
        productsFiltered.map((item) => (
          <ListItem key={item._id.$oid} avatar>
            <Left>
              <Thumbnail
                source={{ uri: item.image }}
                onPress={() => {
                  props.navigation.navigate('Product Detail', { item: item });
                }}
              />
            </Left>
            <Body>
              <Text> {item.name} </Text>
              <Text note> {item.description} </Text>
            </Body>
          </ListItem>
        ))
      ) : (
        <View style={styles.center}>
          <Text style={{ alignSelf: 'center' }}>
            Нет товаров, соответствующих выбранным критериям
          </Text>
        </View>
      )}
    </Content>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    heigh: 100,
  },
});
export default SearchedProduct;
