import axios from 'axios';
export const setLoading = value => {
  return {type: 'SET_LOADING', value}; //value : value
};

export const getCities = () => dispatch => {
  axios
    .get(`http://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=21`)
    .then(res => {
      const city = [];
      const data = res.data.kota_kabupaten;
      data.map(item => {
        city.push({label: item.nama, value: item.nama, id: item.id});
      });

      dispatch({type: 'SET_CITY', value: city});
    })
    .catch(err => console.log('er', err));
};
