import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch } from 'react-router-dom';
import { setConfig } from 'react-hot-loader';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import en from 'i18n/en.js';
import zh from 'i18n/zh.js';
import store from './Store';

// close hot loader warning
setConfig({
  showReactDomPatchNotification: false,
});

const langs = {
  'zh-TW': zh,
  'zh-Hant': zh,
  en: en,
};

const Root = () => {
  const [locale, setLocale] = useState(navigator.language);

  let messages = zh;
  if (locale && langs[locale]) {
    messages = langs[locale];
  }

  return (
    <Provider store={store}>
      <IntlProvider locale={locale} key={locale} defaultLocale="en" messages={messages}>
        <BrowserRouter>
          <Switch>
            <App setLocale={setLocale} />
          </Switch>
        </BrowserRouter>
      </IntlProvider>
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
