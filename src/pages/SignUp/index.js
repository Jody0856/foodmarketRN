import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {Header, TextInput, Button, Gap} from '../../components';
import {useSelector, useDispatch} from 'react-redux';
import {useForm, showMessage} from '../../utils';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
const SignUp = ({navigation}) => {
  //const globalState = useSelector(state => state.globalReducer); //calling reducer
  const [form, setForm] = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });
  const [photo, setPhoto] = useState('');
  const dispatch = useDispatch();

  const onSubmit = () => {
    navigation.navigate('SignUpAddress');
    // if (validatePassword()) {
    //   dispatch({type: 'SET_REGISTER', value: form}); //calling reducer to change the values
    //   navigation.navigate('SignUpAddress');
    // }
  };

  const validatePassword = () => {
    if (form.name === null || form.name === '') {
      showMessage(`Name must be filled`);
      return false;
    } else if (form.email === null || form.email === '') {
      showMessage(`Email must be filled`);
      return false;
    } else if (form.password === null || form.password === '') {
      showMessage(`Password must be filled`);
      return false;
    } else if (form.password.length < 8) {
      showMessage(`Password must be at least 8 characters`);
      return false;
    } else if (form.password != form.password_confirmation) {
      showMessage(`Password confirmation doesn't match, please type again`);
      return false;
    }
    return true;
  };
  const addPhoto = () => {
    launchImageLibrary(
      {quality: 0.5, maxWidth: 200, maxHeight: 200},
      response => {
        if (response.didCancel || response.error) {
          showMessage('Anda tidak memilih photo');
        } else {
          const responseData = response.assets[0];
          const source = {uri: responseData.uri};
          const dataImage = {
            uri: responseData.uri,
            type: responseData.type,
            name: responseData.fileName,
          };
          setPhoto(source);
          dispatch({type: 'SET_PHOTO', value: dataImage});
          dispatch({type: 'SET_UPLOAD_STATUS', value: true});
        }
      },
    );
    // You can also use as a promise without 'callback':
    // const result = await launchImageLibrary(options?);
  };
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.page}>
        <Header title="Register" subtitle="Register and Eat" />
        <View style={styles.container}>
          <View style={styles.photo}>
            <TouchableOpacity onPress={addPhoto}>
              <View style={styles.borderPhoto}>
                {photo ? (
                  <Image style={styles.photoContainer} source={photo} />
                ) : (
                  <View style={styles.photoContainer}>
                    <Text style={styles.addPhoto}>Add Photo</Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          </View>
          <TextInput
            label="Full Name"
            placeholder="Type your full name"
            value={form.name}
            onChangeText={value => setForm('name', value)}
          />
          <Gap height={24} />
          <TextInput
            label="Email Address"
            placeholder="Type your email address"
            value={form.email}
            onChangeText={value => setForm('email', value)}
          />
          <Gap height={24} />
          <TextInput
            label="Password"
            placeholder="Type your password"
            value={form.password}
            onChangeText={value => setForm('password', value)}
            secureTextEntry
          />
          <Gap height={24} />
          <TextInput
            label="Password Confirmation"
            placeholder="Type your password Again"
            value={form.password_confirmation}
            onChangeText={value => setForm('password_confirmation', value)}
            secureTextEntry
          />
          <Gap height={24} />
          <Button text="Continue" onPress={onSubmit} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    //backgroundColor: 'white',
  },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
  addPhoto: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    color: '#8D92A3',
    textAlign: 'center',
  },
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#F0F0F0',
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderPhoto: {
    width: 110,
    height: 110,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#8D92A3',
    borderRadius: 110,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 26,
  },
});
