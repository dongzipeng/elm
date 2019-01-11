// ajax 的封装函数 返回  respons对象 = response.data

import axios from 'axios'

export default function ajax (url = '', data = {}, type = 'GET') {
  // 这里的参数的是 高介函数
  return new Promise(function (resolve, reject) {
    let promise
    if (type === 'GET') {
      // 准备 url query 参数数据
      let dataStr = '' // 数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送 get 请求
      promise = axios.get(url)
    } else {
      // 发送 post 请求
      promise = axios.post(url, data)
    }
    // 这里的函数的调用 用的是new 的 promise
    promise.then(response => {
      resolve(response.data)
    })
      .catch(error => {
        reject(error)
      })
  })
}
