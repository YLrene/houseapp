import React, { Component } from 'react'

import { Flex,WhiteSpace,WingBlank } from 'antd-mobile'

import './my.scss'

export default class My extends Component {
    render() {
        return (
            <div className='my'>
                {/* 头部信息 */}
                <div className='topHead'>
                    <Flex justify='around'>
                        <img className='head' src={require('../../../assets/imgs/head.jpg')} />
                        <div className='headSpan'>
                            <span>登录/注册</span>
                            <span>可以与经纪人发起聊天</span>
                        </div>
                        <img className='set_up' src={require('../../../assets/imgs/set_up.png')} />
                    </Flex>
                    <Flex>
                        <div className='headNum'>
                            <p>0</p>
                            <img src={require('../../../assets/imgs/wallet.png')} />
                            <span>钱包</span>
                        </div>
                        <div className='headNum'>
                            <p>0</p>
                            <img src={require('../../../assets/imgs/discount.png')} />
                            <span>优惠</span>
                        </div>
                        <div className='headNum'>
                            <p>0</p>
                            <img src={require('../../../assets/imgs/integral.png')} />
                            <span>积分</span>
                        </div>
                    </Flex>
                </div>
                
                {/* 信息列表 */}
                <div className='myList'>
                <WhiteSpace size="md" style={{background:'#f5f5f5'}} />
                    <WingBlank size="lg">
                        <div className='mySingle'>
                            <img src={require('../../../assets/imgs/listIntegral.png')} />
                            <span>我的积分</span>
                            <span>></span>
                        </div>
                        <div className='mySingle'>
                            <img src={require('../../../assets/imgs/listSubscribe.png')} />
                            <span>我的订阅</span>
                            <span>></span>
                        </div>
                        <div className='mySingle'>
                            <img src={require('../../../assets/imgs/listContacts.png')} />
                            <span>微聊联系人</span>
                            <span>></span>
                        </div>
                    </WingBlank>
                    <WhiteSpace size="md" style={{background:'#f5f5f5'}} />
                    <WingBlank size="lg">
                        <div className='mySingle'>
                            <img src={require('../../../assets/imgs/listCalculator.png')} />
                            <span>房贷计算器</span>
                            <span>></span>
                        </div>
                        <div className='mySingle'>
                            <img src={require('../../../assets/imgs/listHouse.png')} />
                            <span>我的房子</span>
                            <span>></span>
                        </div>
                    </WingBlank>
                    <WhiteSpace size="md" style={{background:'#f5f5f5'}} />
                    <WingBlank size="lg">
                        <div className='mySingle'>
                            <img src={require('../../../assets/imgs/listRecord.png')} />
                            <span>我的看房记录</span>
                            <span>></span>
                        </div>
                        <div className='mySingle'>
                            <img src={require('../../../assets/imgs/listMy.png')} />
                            <span>我的问答</span>
                            <span>></span>
                        </div>
                    </WingBlank>
                    <WhiteSpace size="md" style={{background:'#f5f5f5'}} />
                    <WingBlank size="lg">
                        <div className='mySingle'>
                            <img src={require('../../../assets/imgs/listSetup.png')} />
                            <span>设置</span>
                            <span>></span>
                        </div>
                        <div className='mySingle'>
                            <img src={require('../../../assets/imgs/listOpinion.png')} />
                            <span>意见反馈</span>
                            <span>></span>
                        </div>
                    </WingBlank>
                </div>
            </div>
        )
    }
}
