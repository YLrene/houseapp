// 统一封装接口
import axios from 'axios'
import qs from 'qs'

// 设置服务器IP
axios.defaults.baseURL='http://129.211.169.131:33833'

// 也可以设置公共的的路径，然后进行拼接
// const SERVE_IP='http://129.211.169.131:33833'

// 登录
export const login = (acc,pwd)=>axios.post('/login.php',qs.stringify({acc,pwd}))

// 注册
export const reg = (acc,pwd)=>axios.post('/reg.php',qs.stringify(acc,pwd))

// 注册验证码
export const valitecode = ()=>axios.get('/valitecode.php')

// 猜你喜欢列表
export const gethouselist = ()=>axios.get('/gethouselist.php')