import axios from 'axios';
import {API_HOST} from '../../config';
export const getFoodData = () => dispatch => {
  axios
    .get(`${API_HOST.url}/food`)
    .then(res => {
      dispatch({type: 'SET_FOOD', value: res.data.data.data});
    })
    .catch(err => {
      console.log(err);
    });
};
export const getFoodDataByTypes = types => dispatch => {
  axios
    .get(`${API_HOST.url}/food?types=${types}`)
    .then(res => {
      const data = res.data.data.data;
      if (types === 'new_taste') {
        dispatch({type: 'SET_NEW_TASTE', value: data});
      } else if (types === 'popular') {
        dispatch({type: 'SET_POPULAR', value: data});
      } else if (types === 'recommended') {
        dispatch({type: 'SET_RECOMMENDED', value: data});
      }
    })
    .catch(err => {
      console.log(err);
    });
};
