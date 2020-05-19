import React, { Component } from 'react'

// 路由容器HashRouter：所有组件切换都会发生在HashRouter中。 和Vue中的<view-router>相同
import { HashRouter,Switch,Route } from 'react-router-dom'
// 路线切换组件Route：4个大页面：登录 注册 导航 选择城市
// 多路线匹配用Switch：匹配下面包裹每一个路线切换组件Route，匹配成功一个，就返回并渲染
import Nav from '../pages/nav/Nav'
import Login from '../pages/login/Login'
import Reg from '../pages/reg/Reg'
import City from '../pages/city/City'
import Search from '../pages/search/Search'
import Map from '../pages/map/Map'
import Error404 from '../pages/error404/Error404'

export default class MainRouter extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    {/* exact精确匹配 */}
                    <Route path='/' exact component={Nav}></Route>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/reg' component={Reg}></Route>
                    <Route path='/city' component={City}></Route>
                    <Route path='/search' component={Search}></Route>
                    <Route path='/map' component={Map}></Route>
                    {/* 不加path路径，代表上面路径都没匹配上，默认渲染的一个页面，可以是首页，也可以设置报错页 */}
                    <Route component={Error404}></Route>                    
                </Switch>
            </HashRouter>
        )
    }
}
