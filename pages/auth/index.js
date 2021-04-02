/* import {request}from "../../request/index.js";
import regeneratorRuntime from '../../lib/runtime/runtime';
import {login} from "../../utils/asyncWx.js";
Page({
  //获取用户信息
  async handleGetUserInfo(e){
    try {
      //1 获取用户信息
      const {encryptedData,rawData,iv,signature}=e.detail;
      //2 获取小程序登陆成功后的code
      const {code}=await login();
      const loginParams={encryptedData,rawData,iv,signature,code};
      //3 发送请求 获取用户的token
      const {token}=await request({url:"/users/wxlogin",data:loginParams,method:"post"});
      //4 把token存入缓存中 同时跳回上一个页面
      wx.setStorageSync("token", token); 
      wx.navigateBack({delta:1}) ;     
    } catch (error) {
      console.log(error);
    }
  }
}) */

import {request} from '../../request/index.js';
import regeneratorRuntime from '../../lib/runtime/runtime';
import {login} from '../../utils/asyncWx.js';

Page({
  //获取用户信息
  async handleGetUserInfo(e){
    try {
      //1 获取用户信息
    const {encryptedData,iv,rawData,signature} = e.detail;
    //2 获取小程序登录后的code
    const {code} = await login();
    const loginParams = {encryptedData,iv,rawData,signature,code};
    //3 发送请求 获取用户token
    const res = await request({url:"/users/wxlogin",data:loginParams,method:"post"})
    
    
    //4 把token存入缓存中，同时跳转回上个页面
    wx.setStorageSync("token", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIzLCJpYXQiOjE1NjQ3MzAwNzksImV4cCI6MTAwMTU2NDczMDA3OH0.YPt-XeLnjV-_1ITaXGY2FhxmCe4NvXuRnRB8OMCfnPo");
    // wx.setStorageSync("token", "123456");
    
    wx.navigateBack({
      delta: 1
    });
    } catch (error) {
      console.log(error);
    }
  }
})