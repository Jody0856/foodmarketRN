import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  Header,
  ItemListFood,
  ItemValue,
  Button,
  Gap,
  Loading,
} from '../../components';
import axios from 'axios';
import {getData} from '../../utils';
import {API_HOST} from '../../config';
import {WebView} from 'react-native-webview';
const OrderSummary = ({navigation, route}) => {
  const {item, transactions, userProfile} = route.params;
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [paymentURL, setPaymentURL] = useState('https://google.com');

  const OnCheckOut = () => {
    const data = {
      food_id: item.id,
      user_id: userProfile.id,
      quantity: transactions.totalItem,
      total: transactions.total,
      status: 'PENDING',
    };
    getData('token').then(resToken => {
      axios
        .post(`${API_HOST.url}/checkout`, data, {
          headers: {
            Authorization: resToken.value,
          },
        })
        .then(res => {
          setIsPaymentOpen(true);
          setPaymentURL(res.data.data.payment_url);
        })
        .catch(err => {
          console.log('error', err);
        });
    });
  };

  const onNavChange = state => {
    const titleWeb = 'Laravel';
    if (state.title === titleWeb) {
      navigation.reset({index: 0, routes: [{name: 'SuccessOrder'}]});
    }
  };

  if (isPaymentOpen) {
    return (
      <>
        <Header
          title="Payment"
          subtitle="You deserve better meal"
          onBack={() => setIsPaymentOpen(false)}
        />
        <WebView
          source={{uri: paymentURL}}
          onNavigationStateChange={onNavChange}
          startInLoadingState={true}
          renderLoading={() => <Loading />}
        />
      </>
    );
  } else {
    return (
      <ScrollView>
        <Header
          title="Order Summary"
          subtitle="You deserve better meal"
          onBack={() => navigation.goBack()}
        />

        <View style={styles.content}>
          <Text style={styles.label}>Item Ordered</Text>
          <ItemListFood
            type="order-summary"
            name={item.name}
            price={item.price}
            items={transactions.totalItem}
            image={{uri: item.picturePath}}
          />
          <Text style={styles.label}>Details Transaction</Text>
          <ItemValue
            label={item.name}
            value={transactions.totalPrice}
            type="currency"
          />
          <ItemValue
            label="Driver"
            value={transactions.driver}
            type="currency"
          />
          <ItemValue label="Tax 10%" value={transactions.tax} type="currency" />
          <ItemValue
            label="Total Price"
            value={transactions.total}
            valueColor="#1ABC9C"
            type="currency"
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Deliver to:</Text>
          <ItemValue label="Name" value={userProfile.name} />
          <ItemValue label="Phone No." value={userProfile.phoneNumber} />
          <ItemValue label="Address" value={userProfile.address} />
          <ItemValue label="House No." value={userProfile.houseNumber} />
          <ItemValue label="City" value={userProfile.city} />
        </View>
        <View style={styles.button}>
          <Button text="Checkout Now" onPress={OnCheckOut} />
        </View>
        <Gap height={40} />
      </ScrollView>
    );
  }
};

export default OrderSummary;

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: 24,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 8,
  },
  button: {
    paddingHorizontal: 24,
    marginTop: 24,
  },
});
