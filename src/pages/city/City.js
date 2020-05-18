import React, { Component } from 'react'
import { NavBar,Icon } from 'antd-mobile'

import './city.scss'

// 城市
export default class City extends Component {
    render() {
        return (
            <div className='City'>
                <NavBar
                    mode="light"
                    icon={<Icon type="cross" color='#000' />}
                    onLeftClick={() => window.location.href='/#/'}
                    >选择城市</NavBar>
                    {/* 城市列表 */}
                    <div className='cityList'>
                        <div className='cityTitle'>当前定位</div>
                        <div className='cityName'>成都</div>
                        <div className='cityTitle'>热门城市</div>
                        <div className='cityName'>北京</div>
                        <div className='cityName'>上海</div>
                        <div className='cityName'>深圳</div>
                        <div className='cityTitle'>A</div>
                        <div className='cityTitle'>B</div>
                        <div className='cityTitle'>C</div>
                        <div className='cityName'>重庆</div>
                        <div className='cityTitle'>A</div>
                        <div className='cityTitle'>B</div>
                        <div className='cityTitle'>A</div>
                        <div className='cityTitle'>B</div>
                        <div className='cityTitle'>A</div>
                        <div className='cityTitle'>B</div>
                        <div className='cityTitle'>A</div>
                        <div className='cityTitle'>B</div>
                        <div className='cityTitle'>A</div>
                        <div className='cityTitle'>B</div>
                        <div className='cityTitle'>A</div>
                        <div className='cityTitle'>B</div>
                        <div className='cityTitle'>A</div>
                        <div className='cityTitle'>B</div>

                        
                    </div>
            </div>
        )
    }
}
