import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Dimensions,
  ScrollView,
} from 'react-native';
import { Container, Header, Icon, Item, Input, Text } from 'native-base';

const data = require('../../assets/data/products.json');
const productsCategories = require('../../assets/data/categories.json');

import ProductList from './ProductList';
import SearchedProduct from './SearchedProducts';
import Banner from '../../Shared/Banner';
import CategoryFilter from './CategoryFilter';

const { height } = Dimensions.get('window');

const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [focus, setFocus] = useState();
  const [categories, setCategories] = useState([]);
  const [productsCtg, setProductsCtg] = useState([]);
  const [active, setActive] = useState();
  const [initialState, setInitialState] = useState([]);

  useEffect(() => {
    setProducts(data);
    setProductsFiltered(data);
    setFocus(false);
    setCategories(productsCategories);
    setActive(-1);
    setInitialState(data);
    return () => {
      setProducts([]);
      setProductsFiltered([]);
      setFocus();
      setCategories([]);
      setActive();
      setInitialState();
    };
  }, []);
  //horizontal
  //numColumns={2}
  const searchProduct = (text) => {
    setProductsFiltered(
      products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
    );
  };
  const openList = () => {
    setFocus(true);
  };
  const onBlur = () => {
    setFocus(false);
  };

  const changeCtg = (ctg) => {
    {
      ctg == 'all'
        ? [setProductsCtg(initialState), setActive(true)]
        : [
            setProductsCtg(
              products.filter((i) => (i.category.$soid = ctg)),
              setActive(true)
            ),
          ];
    }
  };

  return (
    <Container>
      <Text style={styles.head}> L'amour de soi </Text>
      <Text style={styles.title}> Фирменный интернет магазин </Text>
      <Text style={styles.title}>собственное украинское производство </Text>
      <View style={styles.containerBanner}>
        <Banner />
      </View>
      <View style={styles.containerCategoryFilter}>
        <CategoryFilter
          categories={categories}
          categoryFilter={changeCtg}
          productsCtg={productsCtg}
          active={active}
          setActive={setActive}
        />
      </View>
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input
            placeholder="Поиск"
            onFocus={openList}
            onChangeText={(text) => searchProduct(text)}
          />
          {focus == true ? <Icon onPress={onBlur} name="ios-close" /> : null}
        </Item>
      </Header>
      {focus == true ? (
        <SearchedProduct productsFiltered={productsFiltered} />
      ) : (
        <View style={styles.container}>
          <Text style={styles.title2}>
            ЛУЧШИЕ ПРЕДЛОЖЕНИЯ НА 18 ИЮЛЯ 2022 Г.{' '}
          </Text>
          <View style={styles.listContainer}>
            <ScrollView>
              <FlatList
                data={products}
                numColumns={2}
                renderItem={({ item }) => (
                  <ProductList key={item.name} item={item} />
                )}
                keyExtractor={(item) => item.name}
              />
            </ScrollView>
          </View>
        </View>
      )}
    </Container>
  );
};
const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    backgroundColor: 'gainsboro',
  },
  containerBanner: {
    height: height / 4,
  },
  containerCategoryFilter: {
    height: height / 15,
  },
  listContainer: {
    height: height,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    backgroundColor: 'gainsboro',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title2: {
    width: '100%',
    flexDirection: 'row',
    padding: 2,
    marginTop: 0, //Todo: Delete
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    color: 'black',
  },
  title: {
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'center',
  },
  head: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
  },
});
export default ProductContainer;
