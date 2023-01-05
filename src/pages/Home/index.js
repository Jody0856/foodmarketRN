import {StyleSheet, View, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {FoodDummy1, FoodDummy2, FoodDummy3} from '../../assets';
import {FoodCard, Gap, HomeTabSection, HomeProfile} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {getFoodData} from '../../redux/action';
const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {food} = useSelector(state => state.homeReducer);
  useEffect(() => {
    dispatch(getFoodData());
  }, []);
  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <View style={styles.page}>
        <HomeProfile />
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.foodCardContainer}>
              <Gap width={24} />
              {food.map(itemFood => {
                return (
                  <FoodCard
                    key={itemFood.id}
                    name={itemFood.name}
                    image={{uri: itemFood.picturePath}}
                    rating={itemFood.rate}
                    onPress={() => navigation.navigate('FoodDetail', itemFood)}
                  />
                );
              })}
            </View>
          </ScrollView>
        </View>
        <View style={styles.tabContainer}>
          <HomeTabSection />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {flex: 1},

  foodCardContainer: {
    flexDirection: 'row',
    marginVertical: 24,
  },
  tabContainer: {
    flex: 1,
  },
});
