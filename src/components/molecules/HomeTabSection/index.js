import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {ItemListFood} from '../../../components';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../../assets';
import {useNavigation} from '@react-navigation/native';
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
  return (
    <View style={styles.renderStyle}>
      <ItemListFood
        type="product"
        name="Sop Bumil"
        price="380.000"
        rating={5}
        image={FoodDummy1}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        type="product"
        name="Sop Bumil"
        price="380.000"
        rating={5}
        image={FoodDummy2}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        type="product"
        name="Sop Bumil"
        price="380.000"
        rating={5}
        image={FoodDummy3}
        onPress={() => navigation.navigate('FoodDetail')}
      />
    </View>
  );
};
const Popular = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.renderStyle}>
      <ItemListFood
        type="product"
        name="Sop Bumil"
        price="380.000"
        rating={5}
        image={FoodDummy3}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        type="product"
        name="Sop Bumil"
        price="380.000"
        rating={5}
        image={FoodDummy2}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        type="product"
        name="Sop Bumil"
        price="380.000"
        rating={5}
        image={FoodDummy3}
        onPress={() => navigation.navigate('FoodDetail')}
      />
    </View>
  );
};
const Recommended = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.renderStyle}>
      <ItemListFood
        type="product"
        name="Sop Bumil"
        price="380.000"
        rating={5}
        image={FoodDummy4}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        type="product"
        name="Sop Bumil"
        price="380.000"
        rating={5}
        image={FoodDummy2}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        type="product"
        name="Sop Bumil"
        price="380.000"
        rating={5}
        image={FoodDummy3}
        onPress={() => navigation.navigate('FoodDetail')}
      />
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
