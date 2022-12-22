import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Header, TextInput, Button, Gap} from '../../components';
import {useForm} from '../../utils';
import axios from 'axios';
const SignIn = ({navigation}) => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [form, setForm] = useForm({email: '', password: ''});

  const onSubmit = () => {
    console.log('Tesz');
    axios
      .post('https://foodmarketrn.jodyproject.com/api/login', form)
      .then(res => {
        console.log('Success');
        console.log(res.json());
      })
      .catch(err => {
        console.log('error');
        console.log(err);
      });
  };
  return (
    <View style={styles.page}>
      <Header title="Sign In" subtitle="Find your best ever meal" />
      <View style={styles.container}>
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
        <Button text="Sign In" onPress={onSubmit} />
        <Gap height={12} />
        <Button
          text="Create New Account"
          color="#8D92A3"
          textColor="white"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignIn;

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
});
