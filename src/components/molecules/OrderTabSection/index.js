import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React, {useEffect} from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {ItemListFood} from '../../../components';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../../assets';
import {useNavigation} from '@react-navigation/native';
import {getInProgress, getPastOrders} from '../../../redux/action';
import {useDispatch, useSelector} from 'react-redux';
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
const InProgress = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {inProgress} = useSelector(state => state.orderReducer);
  useEffect(() => {
    dispatch(getInProgress());
  }, []);
  return (
    <View style={styles.renderStyle}>
      {inProgress.map(order => {
        return (
          <ItemListFood
            key={order.id}
            image={{uri: order.food.picturePath}}
            onPress={() => navigation.navigate('OrderDetail', order)}
            type="in-progress"
            items={order.quantity}
            price={order.total}
            name={order.food.name}
          />
        );
      })}
    </View>
  );
};
const PastOrders = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {pastOrders} = useSelector(state => state.orderReducer);
  useEffect(() => {
    dispatch(getPastOrders());
  }, []);
  return (
    <View style={styles.renderStyle}>
      {pastOrders.map(order => {
        return (
          <ItemListFood
            key={order.id}
            image={{uri: order.food.picturePath}}
            onPress={() => navigation.navigate('OrderDetail', order)}
            type="past-orders"
            items={order.quantity}
            price={order.total}
            name={order.food.name}
            date={order.created_at}
            status={order.status}
          />
        );
      })}
    </View>
  );
};

const OrderTabSection = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'In Progress'},
    {key: '2', title: 'Past Orders'},
  ]);
  const renderScenes = SceneMap({
    1: InProgress,
    2: PastOrders,
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

export default OrderTabSection;

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
