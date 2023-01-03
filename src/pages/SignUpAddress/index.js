import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {Header, TextInput, Button, Gap, Select} from '../../components';
import {useForm, showMessage} from '../../utils';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';

const SignUpAddress = ({navigation}) => {
  const [form, setForm] = useForm({
    phoneNumber: '',
    address: '',
    houseNumber: '',
    city: 'Batam',
  });
  const dispatch = useDispatch();
  const {registerReducer, photoReducer} = useSelector(state => state);
  const onSubmit = () => {
    const data = {
      ...form,
      ...registerReducer,
    };
    dispatch({type: 'SET_LOADING', value: true});
    axios
      .post('https://foodmarketrn.jodyproject.com/api/register', data)
      .then(res => {
        console.log('data success', res.data);
        if (photoReducer.isUploadPhoto) {
          const photoForUpload = new FormData();
          photoForUpload.append('file', photoReducer);
          console.log('photoForUpload', photoForUpload);
          axios
            .post(
              'https://foodmarketrn.jodyproject.com/api/user/photo',
              photoForUpload,
              {
                headers: {
                  Authorization: `${res.data.data.token_type} ${res.data.data.access_token}`,
                  'Content-Type': 'multipart/form-data',
                },
              },
            )
            .then(resUpload => console.log('Success Upload', resUpload))
            .catch(err => showMessage('Upload photo tidak berhasil'));
        }
        dispatch({type: 'SET_LOADING', value: false});
        showMessage('Register Success', 'success');
        navigation.replace('SuccessSignUp');
      })
      .catch(err => {
        dispatch({type: 'SET_LOADING', value: false});
        let errors = err?.response?.data?.errors;
        const errors_map = new Map(Object.entries(errors));
        for (let value of errors_map.values()) {
          showMessage(value[0]);
        }
      });
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.page}>
        <Header title="Address" subtitle="Make sure it’s valid" onBack />
        <View style={styles.container}>
          <TextInput
            label="Phone No."
            placeholder="Type your phone number"
            value={form.phoneNumber}
            onChangeText={value => setForm('phoneNumber', value)}
          />
          <Gap height={16} />
          <TextInput
            label="Address"
            placeholder="Type your address"
            value={form.address}
            onChangeText={value => setForm('address', value)}
          />
          <Gap height={16} />
          <TextInput
            label="House No."
            placeholder="Type your house number"
            value={form.houseNumber}
            onChangeText={value => setForm('houseNumber', value)}
          />
          <Gap height={16} />
          <Select
            label="City"
            value={form.city}
            onSelectChange={value => setForm('city', value)}
          />
          <Gap height={24} />
          <Button text="Sign Up Now" onPress={onSubmit} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpAddress;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
