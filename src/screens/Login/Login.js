import React,{ useState } from 'react';
import {useDispatch} from "react-redux"
import http from "../../services/mirage/api"
import { saveToken, AuthState } from "../../Redux/reducers/authslice"
import { randomBytes } from 'crypto';

import { setUser } from "../../Redux/reducers/userslice";
import {
  Form,
  Input,
  Button,
} from 'antd';
import "./Login.scss"


const Login = () => {
  const generateToken = () => randomBytes(8).toString('hex');
  const dispatch=useDispatch();
  var id=0;

 
  
  const submitForm1 = (values) => {
    console.log(values)
    const user={
      id: id + 1 ,
      username: values.username,
      email: values.email,
      password: values.password
  }
  console.log(user)
    const token = generateToken();
    dispatch(saveToken(token))
    dispatch(setUser(user))
  }
  
  const submitForm = (values) => {
    const user={
      id: id + 1 ,
    
      username: values.username,
      email: values.email,
      password: values.password
  }
  const setitem=(user)=>{
    localStorage.setItem("user_id",user.id);
    localStorage.setItem("user_name",user.username);
    localStorage.setItem("user_email",user.email);

  }
 setitem(user);
    const path =  "/auth/signup";
    http
      .post(path,user)
      .then((res) => {
        const { user, token } = res;
        if (res) {
          const { user, token } = res;
          dispatch(saveToken(token));
          dispatch(setUser(user));
          dispatch(AuthState(true));
          localStorage.setItem("token",token);

        }
     else {
     
       dispatch(setUser(user))

     }
      })
      .catch((error) => {
        console.log(error);
      })
   
  };


    
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
  };
  const buttonLayout={
    wrapperCol:{offset:11,span:8}
  }
 

  return (
    <>
      <Form
    
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={submitForm}
      
      >
          <Form.Item 
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input />
        </Form.Item>
        <Form.Item 
        label="Email"
        name="email"
        rules={[    
          {
          type: 'email',
          message: 'The input is not valid E-mail!',
        },
        {
          required: true,
          message: 'Please input your E-mail!',
        },]}>
          <Input />
        </Form.Item>
     
      
        <Form.Item 
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}>
      <Input.Password />
        </Form.Item>
        
      
        
    
        <Form.Item {...buttonLayout}>
          <Button htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default Login;