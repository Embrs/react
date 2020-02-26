import axios from 'axios';
import config from './config';
// import errorCode from './errorCode';
// import { ToQuerystr, Has } from 'utils';
import { ToQuerystr } from 'utils';

const axiosIns = axios.create(config);

// 回傳攔截
axiosIns.interceptors.response.use(
  response => {
    // if (!Has(response, "data") || !Has(response.data, "status")) {
    //     return null;
    //   }
    //   const code = response.data.status['code'];
    //   if (`${code}` === "0") return response.data || true;
    //   Message.destroy();
    //   if (`${code}` === ErrorCode(code)) return Message.error(`Error: ${code}`); // 未編列的異常碼
    //   if (`${code}` === "220") return null; // 不顯示查無資料
    //   return null;
    // },
    // error => {
    //   Message.destroy();
    //   Message.error(i18n.tc(ErrorCode(error.response.status)));
    //   return null;
    // }
    return response;
  },
  error => {
    return null;
  }
);

/**
 * Get method
 * @param { String } uri
 * @param { Object } headers
 */
const Get = (uri, Params, headers) =>
  new Promise(resolve => {
    axiosIns.get(uri + ToQuerystr(Params), { headers }).then(response => resolve(response));
  });

/**
 * Post method
 * @param { String } uri
 * @param { Object } Params
 * @param { Object } headers
 */
const Post = (uri, Params, headers) =>
  new Promise(resolve => {
    axiosIns.post(uri, JSON.stringify(Params), { headers }).then(response => resolve(response));
  });

/**
 * Put method
 * @param { String } uri
 * @param { Object } Params
 * @param { Object } headers
 */
const Put = (uri, Params = {}, headers) =>
  new Promise(resolve => {
    axiosIns.put(uri, JSON.stringify(Params), { headers }).then(response => resolve(response));
  });

/**
 * Delete method
 * @param { String } uri
 * @param { Object } Params
 * @param { Object } headers
 */
const Delete = (uri, Params = {}, headers) =>
  new Promise(resolve => {
    axiosIns
      .delete(uri, { data: JSON.stringify(Params) }, { headers })
      .then(response => resolve(response));
  });

export { Get, Post, Put, Delete };
