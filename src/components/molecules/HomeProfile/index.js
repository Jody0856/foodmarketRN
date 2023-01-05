import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ProfileDummy} from '../../../assets';
import {getData} from '../../../utils';
const HomeProfile = () => {
  const [photo, setPhoto] = useState(ProfileDummy);
  useEffect(() => {
    getData('userProfile').then(res => {
      setPhoto({uri: `https://${res.profile_photo_url}`});
    });
  }, []);
  return (
    <View style={styles.profileContainer}>
      <View>
        <Text style={styles.appName}>FoodMarket</Text>
        <Text style={styles.appDesc}>Let’s get some foods</Text>
      </View>
      <Image source={photo} style={styles.profile} />
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 32,
    paddingBottom: 24,
    backgroundColor: 'white',
    paddingHorizontal: 24, //left and right, paddingVertical top and bottom
  },
  profile: {width: 50, height: 50, borderRadius: 8},
  appName: {
    color: '#020202',
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
  },
  appDesc: {fontFamily: 'Poppins-Light', color: '#8D92A3', fontSize: 14},
});
