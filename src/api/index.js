// 通过api的接口文档 来设置 接口的请求函数 （如有10个api,就有10个接口函数）

// 引入 ajax.js
import ajax from './ajax'

// 这里的通用的名称 req + xxx

/**

 访问的 url 要求携带的参数
 parnm 传递参数 不带 ?
 query 传递参数 带 ?
 不带 ? 直接 + 参数
 带 ? 需要 { 参数1, 参数2}

**/

// 根据经纬度获取位置详情
export function reqAddress (geohash) {
  ajax('/api/position/' + geohash)
}

// 获取食品分类列表
export function reqCategorys () {
  ajax('/api/index_category')
}

// 根据经纬度获取商铺列表
export function reqShops (latitude, longitude) {
  ajax('/api/position/', {latitude, longitude})
}

// 根据经纬度和关键字搜索商铺列表

// 获取一次性验证码

// 用户名密码登陆

// 发送短信验证码

// 手机号验证码登陆

// 根据会话获取用户信息

// 用户登出
