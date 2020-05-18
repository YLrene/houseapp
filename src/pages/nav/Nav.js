import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';

// 引入二级页面
import First from './first/First'
import Chat from './chat/Chat'
import Pat from './pat/Pat'
import My from './my/My'

// 导航
export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedTab: 'first',  //默认选中的按钮
        };
      }
    

    render() {
        return (
                <div className='nav' style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                    <TabBar
                    unselectedTintColor="#949494"  //未选中的字体颜色
                    tintColor="#00bc5b"  //选中的字体颜色
                    barTintColor="white"  //背景色
                    >
                    <TabBar.Item
                        title="首页"
                        key="home"
                        icon={<div style={{
                        width: '22px',
                        height: '22px',
                        background: 'url('+require('../../assets/imgs/icon_home.png')+') center center /  21px 21px no-repeat' }}/>
                        }
                        selectedIcon={<div style={{
                        width: '22px',
                        height: '22px',
                        background: 'url('+require('../../assets/imgs/icon_home_s.png')+') center center /  21px 21px no-repeat' }}/>
                        }
                        selected={this.state.selectedTab === 'first'}  //selectedTab选中谁就显示哪个按钮
                        onPress={() => {
                        this.setState({
                            selectedTab: 'first',
                        });
                        }}
                        data-seed="logId" >
                        <First></First>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                        <div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url('+require('../../assets/imgs/icon_chat.png')+') center center /  21px 21px no-repeat' }}/>
                        }
                        selectedIcon={
                        <div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url('+require('../../assets/imgs/icon_chat_s.png')+') center center /  21px 21px no-repeat' }}/>
                        }
                        title="微聊"
                        key="chat"
                        selected={this.state.selectedTab === 'chat'}
                        onPress={() => {
                        this.setState({
                            selectedTab: 'chat',
                        });
                        }}
                        data-seed="logId1">
                        <Chat></Chat>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                        <div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url('+require('../../assets/imgs/icon_pat.png')+') center center /  21px 21px no-repeat' }}/>
                        }
                        selectedIcon={
                        <div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url('+require('../../assets/imgs/icon_pat_s.png')+') center center /  21px 21px no-repeat' }}/>
                        }
                        title="推荐"
                        key="pat"
                        selected={this.state.selectedTab === 'pat'}
                        onPress={() => {
                        this.setState({
                            selectedTab: 'pat',
                        });
                        }} >
                        <Pat></Pat>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{ uri: require('../../assets/imgs/icon_my.png')}}
                        selectedIcon={{ uri: require('../../assets/imgs/icon_my_s.png')}}
                        title="我的"   //按钮文字
                        key="my"   // id  不重复  唯一标识
                        selected={this.state.selectedTab === 'my'}
                        onPress={() => {
                        this.setState({
                            selectedTab: 'my',
                        });
                        }} >
                        {/* 渲染页面内容 */}
                        <My></My>
                    </TabBar.Item>
                    </TabBar>
                </div>
        )
    }
}
