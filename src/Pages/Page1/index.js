import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import setUserInfo from 'Store/actions/user';

const Page1 = ({ userInfo, setUserInfo }) => {
  console.log(userInfo);
  return (
    <>
      <button onClick={() => setUserInfo({ userInfo, c: 'ccc' })}></button>
      <pre>{JSON.stringify(userInfo)}</pre>
    </>
  );
};

const mapStateToProps = ({ userReducer }) => {
  return {
    userInfo: userReducer.get('userInfo'),
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setUserInfo,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Page1);
