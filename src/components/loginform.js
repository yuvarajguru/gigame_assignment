import React, { Component } from 'react'
import '../styles/login.css'
import {
    Form, Icon, Input, Button, Checkbox,
  } from 'antd';
  
  class LoginForm extends React.Component {
    componentDidMount(){
        const data = localStorage.getItem('username');
        if(data===''){
            window.location.pathname = '/landing';
           // history.push('location')
        }
        console.log(data);
     }
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          const value=JSON.parse(JSON.stringify(values))
          console.log(value)
          //if(value.userName ==='' && value.password===''){

            localStorage.setItem('username',value.userName);
            localStorage.setItem('password',value.password);
            window.location.pathname = '/landing';
         // }else{
          //     alert('please provide corect credentials')
          // }
        }
      });
    }
  
    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <Form onSubmit={this.handleSubmit} className="login-form">
        <center><h1 style={{fontStyle:"oblique"}}>Gigamein</h1></center>
          <Form.Item>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </Form.Item>
          <Form.Item>
                     
            <Button type="primary" htmlType="submit" style={{width:"100%"}} className="login-form-button">
              Log in
            </Button>
         
          </Form.Item>
        </Form>
      );
    }
  }
  
  const LoginFormComponent = Form.create()(LoginForm);
  export default LoginFormComponent;
