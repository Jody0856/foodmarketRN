import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React, {useEffect} from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {ItemListFood} from '../../../components';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {getFoodDataByTypes} from '../../../redux/action';
const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={styles.IndicatorStyle}
    style={styles.tabbar}
    tabStyle={styles.tabstyle}
    renderLabel={({route, focused, color}) => (
      <Text style={styles.renderLabel(focused)}>{route.title}</Text>
    )}
  />
);
const NewTaste = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {newTaste} = useSelector(state => state.homeReducer);

  useEffect(() => {
    dispatch(getFoodDataByTypes('new_taste'));
  }, []);

  return (
    <View style={styles.renderStyle}>
      {newTaste.map(item => {
        return (
          <ItemListFood
            type="product"
            key={item.id}
            name={item.name}
            price={item.price}
            rating={item.rate}
            image={{uri: item.picturePath}}
            onPress={() => navigation.navigate('FoodDetail', item)}
          />
        );
      })}
    </View>
  );
};
const Popular = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {popular} = useSelector(state => state.homeReducer);

  useEffect(() => {
    dispatch(getFoodDataByTypes('popular'));
  }, []);

  return (
    <View style={styles.renderStyle}>
      {popular.map(item => {
        return (
          <ItemListFood
            type="product"
            key={item.id}
            name={item.name}
            price={item.price}
            rating={item.rate}
            image={{uri: item.picturePath}}
            onPress={() => navigation.navigate('FoodDetail', item)}
          />
        );
      })}
    </View>
  );
};
const Recommended = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {recommended} = useSelector(state => state.homeReducer);

  useEffect(() => {
    dispatch(getFoodDataByTypes('recommended'));
  }, []);

  return (
    <View style={styles.renderStyle}>
      {recommended.map(item => {
        return (
          <ItemListFood
            type="product"
            key={item.id}
            name={item.name}
            price={item.price}
            rating={item.rate}
            image={{uri: item.picturePath}}
            onPress={() => navigation.navigate('FoodDetail', item)}
          />
        );
      })}
    </View>
  );
};
const HomeTabSection = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recommended'},
  ]);
  const renderScenes = SceneMap({
    1: NewTaste,
    2: Popular,
    3: Recommended,
  });

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScenes}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      style={styles.tabview}
    />
  );
};

export default HomeTabSection;

const styles = StyleSheet.create({
  IndicatorStyle: {
    height: 3,
    backgroundColor: 'black',
    // width: '15%',
    //marginLeft: '3%',
  },
  renderLabel: focused => ({
    fontFamily: 'Poppins-Medium',
    color: focused ? '#020202' : '#8D92A3',
    fontSize: 14,
  }),
  tabbar: {
    backgroundColor: 'white',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,
  },
  tabstyle: {width: 'auto'},
  renderStyle: {paddingTop: 8, paddingHorizontal: 24},
  tabview: {backgroundColor: 'white'},
});
