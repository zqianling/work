<!--
 * @Descripttion: 
 * @version: 0.11
 * @Author: 前领
 * @Date: 2019-08-27 17:05:01
 * @copyright: Copyright (c) 2019,Hand
 -->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" class="blog" tag="div" exact @click="handleChange"><section :class="{active:isActive==1}" id="1" @click="handleChange">{{theme}}</section></router-link>
      <router-link to="/about" class="write" tag="div" exact><section @click="handleChange" :class="{active:isActive==2}" id="2">{{write}}</section></router-link>
    </div>
    <keep-alive>
       <router-view/>
    </keep-alive>
  </div>
</template>
<script>
  export default {
    name: 'app',
    data(){
      return {
        theme:'博客',
        write:'写博客',
        isActive:1
      }
    },
    methods:{
      handleChange(event){
        if(event.target.id==1){
          this.isActive=1;
        }else if(event.target.id==2){
          this.isActive=2;
        }
      }
    }
  }
</script>
<style>
body{
  margin:0;
  padding:0;
}
#nav{
  width: 100%;
  height: 106px;
  background: rgb(201, 27, 27);
  text-align: center;
  font-size: 20px;
  line-height: 76px;
  color:#fff;
}
#nav div{
  display: inline-block;
  width: 96px;
  height: 76px;
  margin: 0 10px;
  margin-top: 15px;
  user-select: none;
}
#nav div:hover{
  cursor: pointer;
}
.router-link-active{
  background: #ccc;
  color:black;
  border-radius: 6px;
}
</style>