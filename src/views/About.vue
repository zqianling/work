
<template>
  <div class="about">
    <header>写博客</header>
    <form action="javascript:;">
      <table class="table">
        <tr>
          <td>主题</td>
          <td><textarea name="write" id="" cols="60" rows="2" v-model="blog.title" required></textarea></td>
        </tr>
        <tr>
          <td>内容</td>
          <td><textarea name="write" id="" cols="60" rows="3" v-model="blog.content" required></textarea></td>
        </tr>
        <tr>
          <td>分类</td>
          <td>
            <label>ES6</label>
            <input type="checkbox" value="es6" v-model="blog.categarits">
            <label>HTML</label>
            <input type="checkbox" value="html" v-model="blog.categarits">
            <label>TS</label>
            <input type="checkbox" value="ts" v-model="blog.categarits">
            <label>Javascript</label>
            <input type="checkbox" value="javascript" v-model="blog.categarits">
            <label>CSS</label>
            <input type="checkbox" value="css" v-model="blog.categarits">
            <label>vue</label>
            <input type="checkbox" value="vue" v-model="blog.categarits">
            <label>react</label>
            <input type="checkbox" value="react" v-model="blog.categarits">
          </td>
        </tr>
        <tr>
          <td>作者</td>
          <td>
            <select v-model="blog.author">
              <option v-for="(names,index) in authors" :key="index">{{names}}</option>
            </select>
          </td>
        </tr>
      </table>
      <div class="footer">
        <button @click="handleSave">添加博客</button>
        <input type="reset">
      </div>
    </form>
  </div>
</template>
<script>
import axios from 'axios'
import qs from 'qs'
export default {
  name:'about',
  data(){
    return {
      blog:{
        title:'',
        content:'',
        categarits:[],
        author:''
      },
      authors:['领哥','亮哥','谦哥'],
      rata:0
    }
  },
  methods:{
    handleSave(){
      if(this.blog.title&&this.blog.content&&this.blog.author){
        var data=qs.stringify({
          title:this.blog.title,
          content:this.blog.content,
          categarits:JSON.stringify(this.blog.categarits),
          author:this.blog.author
        });
        axios.post("/api/upData",data)
        .then(res=>{if(confirm(`恭喜您，数据提交成功
        继续添加数据`)){
          this.blog={categarits:[]}
        }})
      }else{
        alert("对不起提交失败，数据不能为空");
      }
    }
  }
}
</script>
<style scoped>
  header{
    text-align: center;
    margin: 30px auto 0;
    font-size: 30px;
    font-family: '隶书';
    position: relative;
    width: 116px;
  }
  header::after{
    content: '';
    position: absolute;
    bottom:-3px;
    width: 116px;
    left: 0;
    height: 1px;
    box-shadow: 0 0 10px 1px rebeccapurple;
    background: rebeccapurple;
  }
  .table{
    width: 80%;
    margin:0 auto;
  }
  tr td{
    padding:26px 10px;
  }
  tr td:nth-child(1){
    width: 30%;
    text-align: right;
  }
  .footer{
    width: 180px;
    margin:0 auto;
  }
  .footer button,.footer input{
    display: inline-block;
    width: 80px;
  }
  .footer button{
    margin-right:20px;
  }
  input[type="checkbox"]{
    margin-right: 20px;
  }
</style>