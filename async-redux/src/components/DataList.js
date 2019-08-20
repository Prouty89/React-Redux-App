import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getData } from '../actions';

import Data from './Data';

const DataList = props => {
  return (
    <>
      <h3>Get To Know the Cities of India</h3>
      <button className="return-btn" onClick={props.getData}>
        {props.isLoading ? (
          <Loader type="ThreeDots" color="#333" height={40} width={40} />
        ) : (
          'Get City Data'
        )}
      </button>
      {props.locations &&
        props.locations.map( item => <Data key={item.data} location={item} />)}
    </>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    locations: state.locations
  };
};
export default connect(
  mapStateToProps,
  { getData }
)(DataList);