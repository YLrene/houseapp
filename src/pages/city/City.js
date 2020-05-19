import React, { Component } from 'react'
import { NavBar,Icon } from 'antd-mobile'

import myjson from '../../json/citys.json'

import BScroll from 'better-scroll'

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
                    >选择城市
                </NavBar>
                {/* 城市列表 */}
                <div className='cityList' id='mycitybox'>
                    <div>
                        {/* <p className='cityTitle'>当前定位</p>
                        <div className='cityName'>成都</div> */}
                        <p className='cityTitle'>热门城市</p>
                        {
                            myjson.hotcitys.map(obj=>(
                                <p className='hotcity'>{obj}</p>
                            ))
                        }
                        <div>
                            {
                                myjson.allcitys.map(obj=>
                                    <div>
                                        <p id={obj.title} className='cityTitle'>{obj.title}</p>
                                    {
                                        obj.children.map(childname=>(
                                            <div className='cityName'>{childname}</div>
                                        ))
                                    }
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    
                </div>
                
                {/* 右侧导航条 */}
                <div className='right_bar'>
                    {
                        myjson.allcitys.map(obj=>(
                            <p onClick={this.clickRight.bind(this,obj.title)}>{obj.title}</p>
                        ))
                    }
                </div>
            </div>
        )
    }

    // 初始化页面完成时
    componentDidMount(){
        this.cityBS = new BScroll('#mycitybox',{
            click:true  // 允许better-scroll可点事件
        })
        
    }

    // 点击右侧的导航字母，跳转到对应的标签城市
    clickRight(val){
        console.log(val);
        
        this.cityBS.scrollToElement('#'+val,500)
    }
}
