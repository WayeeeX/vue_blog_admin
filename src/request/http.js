import router from '@/router'
import store from '@/store'
import axios from 'axios'

const baseURL = 'http://127.0.0.1:3000'

const http = axios.create({
  baseURL,
  timeout: 2000,
})

http.interceptors.request.use(
  (config) => {
    const token = store.state.token
    token && (config.headers.token = token)
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

http.interceptors.response.use(
  (resp) => {
    if (resp.status === 200) {
      return Promise.resolve(resp)
    } else {
      return Promise.reject(resp)
    }
  },
  (err) => {
    /* if (err.response.status) {
      switch (err.response.status) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。
        case 401:
          router.replace({
            path: '/login',
            query: { redirect: router.currentRoute.fullPath },
          })
          break
        // 403 token过期
        // 登录过期对用户进行提示
        // 清除本地token和清空vuex中token对象
        // 跳转登录页面
        case 403:
          this.$message({
            type: 'warning',
            showClose: true,
            message: '登录过期，请重新登录',
            duration: 1000,
          })
          localStorage.removeItem('token')
          sessionStorage.removeItem('token')
          store.commit('SET_TOKEN', null)
          setTimeout(() => {
            router.replace({
              path: '/login',
              query: { redirect: router.currentRoute.fullPath },
            })
          }, 3000)
          break
        case 404:
          router.replace({
            path: '/404',
          })
          break
        default:
          this.$message({
            type: 'warning',
            message: '未知错误',
            showClose: true,
          })
      }
    } */
	return Promise.reject(err.response)
  }
)

export function post(url, params) {
  return new Promise((resolve, reject) => {
    http
      .post(url, params)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export function get(url, params=null) {
  return new Promise((resolve, reject) => {
    http
      .get(url, { params })
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
