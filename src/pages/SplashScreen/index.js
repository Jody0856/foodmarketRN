import React, {useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Logo} from '../../assets';
import {getData} from '../../utils';
const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      //navigate bisa back ke halaman sebelumnya
      //replace cuman bisa sekali
      getData('token').then(res => {
        console.log('token', res);
        if (res) {
          navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
        } else {
          navigation.replace('SignIn');
        }
      });
    }, 2000);
  }, []); //diberikan array kosong agar tidak terus rerender
  return (
    <View style={styles.splashContainer}>
      <Logo />
      <View style={styles.gap} />

      <Text style={styles.textSplash}>FoodMarket</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  splashContainer: {
    backgroundColor: '#FFC700',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gap: {height: 38},
  textSplash: {color: '#020202', fontSize: 32, fontFamily: 'Poppins-Medium'},
});
export default SplashScreen;
