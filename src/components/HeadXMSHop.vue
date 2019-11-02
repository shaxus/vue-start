<template>
    <!--小米商城头部-->
 <div class="head_bar">
        <div class="head_bar_left" style="position: absolute;top: 10px;left:150px;">
          <span>小米商城</span>
          <el-divider direction="vertical"></el-divider>
          <span>MIUI</span>
          <el-divider direction="vertical"></el-divider>
          <span>loT</span>
          <el-divider direction="vertical"></el-divider>
          <span>云服务</span>
          <el-divider direction="vertical"></el-divider>
          <span>金融</span>
          <el-divider direction="vertical"></el-divider>
          <span>有品</span>
          <el-divider direction="vertical"></el-divider>
          <span>小爱开放平台</span>
          <el-divider direction="vertical"></el-divider>
          <span>企业团购</span>
          <el-divider direction="vertical"></el-divider>
          <span>资质证照</span>
          <el-divider direction="vertical"></el-divider>
          <span>协议规则</span>
          <el-divider direction="vertical"></el-divider>
          <span>下载app</span>
          <el-divider direction="vertical"></el-divider>
          <span>Select Location</span>
        </div>
       <div class="head_bar_right" style="position: absolute;top: 10px;right: 150px;">
         <span>登录</span>
         <el-divider direction="vertical"></el-divider>
         <span>注册</span>
         <el-divider direction="vertical"></el-divider>
         <span>消息通知</span>
        <span style="display: inline-block">
           <i class="el-icon-shopping-cart-2">购物车<span>({{shopValue}})</span></i>
        </span>
       </div>
       <div class="site_header">
         <div class="container">
           <!--logo-->
           <div class="header_logo">
             <a class="logo ir">
                  <!--<img src="../../static/images/mi-logo.png" alt="MILogo" title="MI" style="" />-->
             </a>
           </div>
           <!--nav-->
           <div class="header_nav">

           </div>
           <!--search-->
           <div class="header_search">

           </div>
         </div>
       </div>
 </div>
</template>

<script>
    export default {
        name: "HeadXMSHop",
        data(){
          return {
            headData: ["小米商城","MIUI","loT","云服务","金融"
            ,"有品","小爱开放平台","企业团购","资质证照","协议规则","下载app","Select Location"],
            height: 40 + "px",
            shopValue: 0
          }
        }
    }
</script>

<style scoped>
.head_bar{
  width: 100%;
  height: 40px;
  background: #333;
  color: #b0b0b0;
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: 12px;
}

  .site_header .container {
    position: relative;
  }

  .site_header {
    z-index: 20;
    height: 100px;
    margin-top: 40px;
    margin-left: 145px;
  }
.site_header .header_logo {
  float: left;
  width: 62px;
  margin-top: 22px;
}
  .site_header .logo{
    position: relative;
    display: block;
    width: 55px;
    height: 55px;
    overflow: hidden;
    background: #ff6700 url("../../static/images/mi-logo.png") no-repeat;
    /**background: url(../../static/images/mi-logo.png) no-repeat 50% 50%;*/
    /*animation: demo 1s 1;*/
  }
  .ir {
    display: block;
    text-align: center;
    /*text-indent: -9999em;*/
    overflow: hidden;
  }
  .logo:hover{
    text-decoration: none;
    /*background: #FFFFFF url("../../static/images/links/home.png") no-repeat;*/
    cursor: pointer;
    /*transform:translate(150px,100px);*/

  }
@keyframes demo
{
  from {left:0px;}
  to {left:300px;}
}
  a {
    color: #757575;
  }

a:-webkit-any-link {
  color: -webkit-link;
  cursor: pointer;
  text-decoration: underline;
}
</style>
