import React, { Component } from 'react'
import { Button, InputItem, Checkbox } from 'antd-mobile';
import { Link } from 'react-router-dom';
import { reg,valitecode } from '../../api/apis'

import './reg.scss'
const AgreeItem = Checkbox.AgreeItem;


// 注册
export default class Reg extends Component {
    state={
        acc:'', //用户名
        pwd:'', //密码
        code:'获取验证码', //显示的验证码
        inputCode:'', //用户输入的验证码
        error:'', //失败提示信息
        displayError:'none'  //错误信息显示隐藏
    }
    render() {
        let {acc,pwd,code,inputCode,error,displayError}=this.state
        return (
            <div className='reg'>
                <InputItem placeholder="请输入手机号"  clear value={acc} onChange={this.accChange}></InputItem>
                <InputItem placeholder="请输入密码" clear value={pwd} onChange={this.pwdChange}></InputItem>
                <InputItem placeholder="请输入验证码" value={inputCode} onChange={this.codeChange} onExtraClick={this.clickCode.bind(this)} extra={code}></InputItem>
                <AgreeItem data-seed="logId">我已同意<span>《用户服务协议》及《隐私权政策》</span></AgreeItem>
                <p style={{display:displayError,color:'red'}}>{error}</p>
                <Button onClick={this.reg.bind(this)}>注册</Button>
                <Link to='/login' className='toLogin'>已有账号</Link>
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
    codeChange=(val)=>{
        let valCode = parseInt(val)
        this.setState({
            inputCode:valCode
        })
    }

    // 点击验证码按钮
    clickCode(){
        valitecode().then(res=>{
            let val = parseInt(res.data)
            this.setState({
                code:val
            })          
        })
    }
    
    // 点击注册按钮
    reg(){
        if(this.state.acc===''){
            this.setState({
                displayError:'block',
                error:'用户名不能为空！'
            })
        }else if(this.state.pwd.length<6||this.state.pwd.length>16){
            this.setState({
                displayError:'block',
                error:'密码必须在6~16个字符之间！'
            })
        }else if(this.state.inputCode!==this.state.code){
            this.setState({
                displayError:'block',
                error:'验证码错误！'
            })
        }else{
            reg(this.state.acc,this.state.pwd).then(res=>{
                // console.log(res);
                window.location.href='/#/login'
            })
        }
        
    }
}
