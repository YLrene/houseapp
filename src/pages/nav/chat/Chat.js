import React, { Component } from 'react'
import { Button,WhiteSpace } from 'antd-mobile'

import './chat.scss'

export default class Chat extends Component {
    render() {
        return (
            <div className='chat'>
                <div className='chatBox'>
                    <div className='head'>
                        <img src={require('../../../assets/imgs/head.jpg')} />                        
                    </div>
                    <p>
                        置业顾问：
                        <span>张小妹</span>
                    </p>
                    <p>专业服务诚信做人诚心做事！</p>
                    <Button size="small" inline>我要聊天</Button>
                </div>
            </div>
        )
    }
}
