import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IlSuccessSignUp} from '../../assets';
import {Button, Gap} from '../../components';
const SuccessSignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <IlSuccessSignUp />
      <Gap height={30} />
      <Text style={styles.title}>Yeay! Completed</Text>
      <Gap height={6} />
      <Text style={styles.subTitle}>Now you are able to order</Text>
      <Text style={styles.subTitle}>some foods as a self-reward</Text>
      <Gap height={30} />
      <View style={styles.buttonContainer}>
        <Button
          text="Find Foods"
          onPress={() =>
            navigation.reset({index: 0, routes: [{name: 'MainApp'}]})
          }
        />
      </View>
    </View>
  );
};

export default SuccessSignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#020202',
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
  },
  subTitle: {
    color: '#8D92A3',
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 80,
  },
});
