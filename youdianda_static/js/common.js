// 上面这个代码处理过度动画（默认加上不用管）
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.body.classList.add('sidenav-pinned')
    document.body.classList.add('ready')
  }, 200)
})

axios.defaults.baseURL = 'http://124.223.14.236:8060/admin'

axios.interceptors.request.use(
  (config) => {
    config.headers['x-token'] = localStorage.getItem('token')
    return config
  },
  (e) => Promise.reject(e)
)

axios.interceptors.response.use(
  // 直接拿到数据,数据脱壳
  (res) => res.data, // http响应状态码为2xx和3xx进入第一个函数
  (e) => { // http响应状态码为4xx和5xx, 进入第二个函数
    if (e.response.status === 401) {
      localStorage.clear()
      location.href = './login.html'
    }
    return Promise.reject(e)
  }
)
