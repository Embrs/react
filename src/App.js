import { hot } from 'react-hot-loader/root';
import React from 'react';
import './App.scss';
import RouteHander from './Route';
import { Navbar } from './Components';
import routes from './Route/routes';
import { FormattedMessage } from 'react-intl';

function App({ setLocale }) {
  return (
    <div className="App">
      <Navbar />
      <button onClick={() => setLocale('en')}>英文</button>
      <button onClick={() => setLocale('zh-Hant')}>中文</button>
      <FormattedMessage id="app.learn" values={{ name: 'React' }} />
      {RouteHander(routes)}
    </div>
  );
}

export default hot(App);
