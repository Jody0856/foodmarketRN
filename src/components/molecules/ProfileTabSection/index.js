import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {ItemListFood, ItemListMenu} from '../../../components';
import {FoodDummy1, FoodDummy2, FoodDummy3} from '../../../assets';
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
const Account = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.renderStyle}>
      <ItemListMenu text="Edit Profile" />
      <ItemListMenu text="Home Address" />
      <ItemListMenu text="Security" />
      <ItemListMenu text="Payments" />
    </View>
  );
};
const FoodMarket = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.renderStyle}>
      <ItemListMenu text="Rate App" />
      <ItemListMenu text="Help Center" />
      <ItemListMenu text="Privacy & Policy" />
      <ItemListMenu text="Terms & Conditions" />
    </View>
  );
};

const ProfileTabSection = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Account'},
    {key: '2', title: 'FoodMarket'},
  ]);
  const renderScenes = SceneMap({
    1: Account,
    2: FoodMarket,
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

export default ProfileTabSection;

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
