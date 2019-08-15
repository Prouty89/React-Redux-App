import axios from 'axios';

export const FETCH_CITY_DATA_START = 'FETCH_CITY_DATA_START';
export const FETCH_CITY_DATA_SUCCESS = 'FETCH_CITY_DATA_SUCCESS';
export const FETCH_CITY_DATA_FAILURE = 'FETCH_CITY_DATA_FAILURE';

export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_CITY_DATA_START });
    axios
      .get('https://indian-cities-api-nocbegfhqg.now.sh/cities?City_like=Mumb')
      .then(res => {
        console.log('API response', res);
        dispatch({ type: FETCH_CITY_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_CITY_DATA_FAILURE, payload: err.response });
      });
  };
};