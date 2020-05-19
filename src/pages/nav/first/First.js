import React, { Component } from 'react'
import { Carousel,Grid,WhiteSpace,WingBlank,NavBar,SearchBar  } from 'antd-mobile';

import { gethouselist } from '../../../api/apis'

import './first.scss'



export default class First extends Component {
    state = {
        city:'定位中',  //顶部定位
        data: ['banner1', 'banner2', 'banner3','banner4','banner5'], //轮播
        imgHeight: 176,
        // 导航图标
        icon_nav:[
            {icon:'icon_nav01',text:'新房',bg:'#ff5a5f'},
            {icon:'icon_nav02',text:'二手房',bg:'#a782b9'},
            {icon:'icon_nav03',text:'租房',bg:'#f6d149'},
            {icon:'icon_nav04',text:'商铺写字楼',bg:'#f9db9f'},
            {icon:'icon_nav05',text:'卖房',bg:'#ffb650'},
            {icon:'icon_nav06',text:'海外房产',bg:'#57aff8'},
            {icon:'icon_nav07',text:'小区房价',bg:'#00e4dd'},
            {icon:'icon_nav08',text:'问答',bg:'#d29bcb'}
        ],
        // 房产全百科
        icon_intro:[
            {icon:'icon_intro01',text:'我要贷款'},
            {icon:'icon_intro02',text:'房贷计算'},
            {icon:'icon_intro03',text:'知识'},
            {icon:'icon_intro04',text:'扫一扫'}
        ],
        // 猜你喜欢房屋列表
        houseList:[]
      }
    
    //  导航图标
    iconNav = this.state.icon_nav.map((navVal) => ({
        icon: require(`../../../assets/imgs/${navVal.icon}.png`),
        text: `${navVal.text}`,
        bg:`${navVal.bg}`
      }));

    // 房产全百科循环数据
    intro = this.state.icon_intro.map((introVal) => ({
        icon: require(`../../../assets/imgs/${introVal.icon}.png`),
        text: `${introVal.text}`
      }));

      

    render() {
        return (
            <div className='first'>
                {/* 顶部显示条 */}
                <NavBar
                    mode="light"
                    icon={<span onClick={this.clickTitle.bind(this,'/#/city')}>{this.state.city}▼</span>}
                    rightContent={[
                        <div  className='seeMap' onClick={this.clickTitle.bind(this,'/#/map') }>
                            <img src={require('../../../assets/imgs/seeMap.png')} alt='' />                            
                        </div>
                    ]}
                    >
                    <div className='searchBtn' onClick={this.clickTitle.bind(this,'/#/search')}>
                        <SearchBar placeholder="挑好房，上房产App" />
                    </div>
                </NavBar>
                
                {/* 轮播 */}
                <Carousel
                    autoplay  //自动播放
                    infinite  //循环播放
                    >
                    {this.state.data.map(val => (
                        <a key={val}
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                        <img
                            src={require('../../../assets/imgs/'+ val +'.jpg')}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        </a>
                    ))}
                </Carousel>
                    
                {/* 图标导航按钮 */}
                <Grid data={this.iconNav} hasLine={false}
                    renderItem={dataItem => (
                        <div style={{ padding:'10px' }}>
                            <div style={{ width: '60px', height: '60px',background:dataItem.bg,borderRadius:'50%',padding:'10px',display:'flex',justifyContent:'center' }}>
                                <img src={dataItem.icon} style={{width:'100%',display:'block'}} alt="" />                            
                            </div>
                            <div style={{ color: '#888', fontSize: '14px', marginTop: '10px' }}>
                                <span>{dataItem.text}</span>
                            </div>
                        </div>
                    )}
                />
                <WhiteSpace size="md" style={{background:'#f5f5f5'}} />

                {/* 房产全百科 */}
                <WingBlank size="lg" style={{paddingTop:'10px'}}>
                    <span style={{color:'#00bc5b',fontSize:'16px',marginRight:'10px'}}>房产全百科</span>
                    <span style={{fontSize:'12px',color:'f6f6f6'}}>专业的买房攻略</span>
                </WingBlank>
                <Grid data={this.intro} hasLine={false}
                    renderItem={dataItem => (
                        <div style={{ padding:'10px' }}>
                            <div style={{ width: '60px', height: '60px',padding:'10px',display:'flex',justifyContent:'center'}}>
                                <img src={dataItem.icon} style={{width:'100%',display:'block'}} alt="" />                            
                            </div>
                            <div style={{ color: '#888', fontSize: '14px', marginTop: '10px' }}>
                                <span>{dataItem.text}</span>
                            </div>
                        </div>
                    )}
                />
                <WhiteSpace size="md" style={{background:'#f5f5f5'}} />

                {/* 猜你喜欢 */}
                <div className='guessLike'>
                    <WingBlank size="lg" style={{paddingTop:'10px',fontSize:'16px'}}>猜你喜欢</WingBlank>
                    {
                        this.state.houseList.map((val,i)=>(
                            <div className='likeSingle' key={i}>
                                <div className='houseImg'>
                                    <img src={'http://129.211.169.131:33833'+val.imgs} />
                                </div>
                                <div className='houseInfo'>
                                    <p>{val.name}</p>
                                    <span>{val.area} {val.range}</span>
                                    <span>{val.type} {val.point}平</span>
                                </div>
                                <span>{val.price}/平</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
    
    // 初始化渲染
    componentDidMount(){
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
                    // map.setBounds(citybounds);
                }
            } else {
                console.log(result.info);
                
            }
        });
        


        // 调用猜你喜欢接口获取数据列表
        gethouselist().then(list=>{
            this.setState({
                houseList:list.data
            })
        })

    }

    // 点击顶部导航条跳转相应页面
    clickTitle(url){
        window.location.href=url;
    }
}
