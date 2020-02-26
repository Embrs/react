import React from 'react';
import Api from 'Api/service';

const ApiLogin = async () => {
  const res = await Api.Login({ account: 'admin', password: '9527' });
  console.log(res);
};

function Login() {
  return (
    <div>
      <div></div>
      <input></input>
      <button onClick={ApiLogin}>To Login</button>
    </div>
  );
}

export default Login;
