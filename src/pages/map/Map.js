import React, { Component } from 'react'
import { NavBar,Icon } from 'antd-mobile'

export default class Map extends Component {
    state={
            city:'定位中' //当前城市
        }
    render() {
        return (
            <div className='map'>
                <NavBar
                    mode="light"
                    icon={<Icon type="cross" color='#fff' />}
                    onLeftClick={() => window.location.href='/#/'}
                    style={{background:'#00bc5b'}}
                    >{this.state.city}
                </NavBar>
                {/* 装地图的盒子，必须内联设置大小 */}
                <div id='myMap' style={{width:'100%',height:'400px'}}></div>
            </div>
        )
    }

    componentDidMount(){
        var map = new window.AMap.Map("myMap", {
            resizeEnable: true,
            center: [116.397428, 39.90923],
            zoom: 13
        });

        //顶部初始化获取用户所在城市信息
        //实例化城市查询类
        var that = this;
        var citysearch = new window.AMap.CitySearch();
        //自动获取用户IP，返回当前城市
        citysearch.getLocalCity(function(status, result) {
            if (status === 'complete' && result.info === 'OK') {
                if (result && result.city && result.bounds) {
                    var cityinfo = result.city;
                    var citybounds = result.bounds;
                    
                    that.setState({
                        city:cityinfo
                    })
                    
                    //地图显示当前城市
                    map.setBounds(citybounds);
                }
            } else {
                console.log(result.info);
                
            }
        });
    }
}
