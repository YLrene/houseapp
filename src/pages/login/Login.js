import React, { Component } from 'react'
import { Flex,WingBlank,Button, InputItem, WhiteSpace } from 'antd-mobile';
import { Link } from 'react-router-dom';
import { login } from '../../api/apis'

// 引入登录样式
import './login.scss'

// 登录
export default class Login extends Component {
    state={
        acc:'', //用户名
        pwd:'', //密码
        error:'none' //是否显示错误信息
    }
    render() {
        let {acc,pwd,error}=this.state
        return (
            <div className="login">
                <WhiteSpace size="lg" />
                <Flex justify='center'>
                    <img src={require('../../assets/imgs/logo.png')} alt='加载失败'/> 
                </Flex>
                
                <WhiteSpace size="xl" />

                <WingBlank size="lg">
                    <InputItem placeholder="请输入手机号" clear value={acc} onChange={this.accChange}>
                        <div style={{ backgroundImage: 'url('+require('../../assets/imgs/user.png')+')', backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <InputItem placeholder="请输入密码" type='password' clear value={pwd} onChange={this.pwdChange}>
                        <div style={{ backgroundImage: 'url('+require('../../assets/imgs/pwd.png')+')', backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>

                    <p style={{'display':error,'color':'red'}}>用户名或密码错误，请重新输入</p>
                    <WhiteSpace size="md" />
                    <Button onClick={this.clickLogin.bind(this)}>登录</Button>

                    <WhiteSpace size="md" />
                    <Flex className='to' justify='between'>
                        <Link to='/reg'>手机快速注册</Link>
                        <Link to=''>忘记密码？</Link>
                    </Flex>
                </WingBlank>

                <Flex justify='center'>
                    <div className='agreement'>登录/注册即代表同意《房地产用户协议》</div>
                </Flex>
            </div>
        )
    }

    // 监听输入框值改变
    accChange=(val)=>{
        this.setState({
            acc:val
        })
    }
    pwdChange=(val)=>{
        this.setState({
            pwd:val
        })
    }
    // 点击登录按钮
    clickLogin(){
        // 在this上设置一个点击属性，判断用户是否点击了登录按钮，实现防抖节流
        if(this.isClick) return  //如果this.isClick==true代表2秒还没过，直接返回
              
        this.isClick = true  // 表示已点了登录按钮

        // 设置延时函数，在两秒内不能重复点击
        setTimeout(()=>{
            this.isClick = false  //两秒后可再次点击
        },2000)           
        
        
        // 调用login登录方法
        login(this.state.acc,this.state.pwd).then((res)=>{
            // console.log(res);
            if(res.data==='ok'){
                // 验证成功跳转首页
                window.location.href='/#/'
            }else{
                // 验证失败显示错误信息
                this.setState({
                    error:'block'
                })
            }
        })
    }
    
}
