import axios from 'axios';
import {API_HOST} from '../../config';
import {getData} from '../../utils';
export const getOrders = () => dispatch => {
  // return () => {} // simplified of () => dispatch => {}
  getData('token').then(resToken => {
    axios
      .get(`${API_HOST.url}/transaction`, {
        headers: {
          Authorization: resToken.value,
        },
      })
      .then(res => {
        console.log('get', res.data.data.data);
        dispatch({type: 'SET_ORDER', value: res.data.data.data});
      })
      .catch(err => {
        console.log('err', err.response);
      });
  });
};
export const getInProgress = () => dispatch => {
  // return () => {} // simplified of () => dispatch => {}
  //use axios.all([]) to get  multiple endpoint at once, and axios.spread to get the response
  getData('token').then(resToken => {
    axios
      .all([
        axios.get(`${API_HOST.url}/transaction?status=PENDING`, {
          headers: {
            Authorization: resToken.value,
          },
        }),
        axios.get(`${API_HOST.url}/transaction?status=SUCCESS`, {
          headers: {
            Authorization: resToken.value,
          },
        }),
        axios.get(`${API_HOST.url}/transaction?status=ON_DELIVERY`, {
          headers: {
            Authorization: resToken.value,
          },
        }),
      ])
      .then(
        axios.spread((res, res2, res3) => {
          const pending = res.data.data.data;
          const success = res2.data.data.data;
          const onDelivery = res3.data.data.data;
          dispatch({
            type: 'SET_IN_PROGRESS',
            value: [...pending, ...success, ...onDelivery],
          });
        }),
      )
      .catch(err => {
        console.log('err', err.response);
      });
  });
};
export const getPastOrders = () => dispatch => {
  // return () => {} // simplified of () => dispatch => {}
  getData('token').then(resToken => {
    axios
      .all([
        axios.get(`${API_HOST.url}/transaction?status=CANCELLED`, {
          headers: {
            Authorization: resToken.value,
          },
        }),
        axios.get(`${API_HOST.url}/transaction?status=DELIVERED`, {
          headers: {
            Authorization: resToken.value,
          },
        }),
      ])
      .then(
        axios.spread((res1, res2) => {
          const cancel = res1.data.data.data;
          const delivered = res2.data.data.data;
          dispatch({type: 'SET_PAST_ORDERS', value: [...cancel, ...delivered]});
        }),
      )
      .catch(err => {
        console.log('err post order', err.response);
      });
  });
};
