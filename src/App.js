// 入口视图
import React, { Component } from 'react'

import MainRouter from './router/MainRouter'

// 引入路由组件

export default class App extends Component {
    render() {
        return (
            <MainRouter></MainRouter>
        )
    }
}
