<!--
 * @Descripttion: 
 * @version: 0.11
 * @Author: 前领
 * @Date: 2019-08-27 17:15:16
 * @copyright: Copyright (c) 2019,Hand
 -->
<template>
  <div class="home">
    <h2 v-rainbow>{{title}}</h2>
    <div class="header">
      <input type="text" v-model="search" placeholder="请输入搜索内容">
      <button>搜索</button>
    </div>
    <div class="box" v-for="(item,index) in filteredBlogs" :key="index">
      <router-link :to="{name:'SingleBlog',query:{id:item._id}}"><h3 v-rainbow>{{item.title}}</h3></router-link>
      <p class="content" v-rainbow>{{item.content | snippet}}</p>
      <section>
        <span>作者：{{item.author}}</span>
        <div>
          <span>分类:</span>
          <span v-for="(items,index) in JSON.parse(item.categarits)" :key="index">{{items}}</span>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
export default {
  name: 'home',
  components: {
  
  },
  data(){
    return {
      title:'博客总览',
      blogs:[],
      search:''
    }
  },
  created(){
    axios.get("/api/data").then(res=>{
      //this.blogs=res.body.slice(0,10);
      this.blogs=res.data;
    })
  },
  computed:{
    filteredBlogs:function(){
      return this.blogs.filter(blog=>{
        return blog.title.match(this.search);
      })
    }
  },
  filters:{
    snippet(value){
      return value.slice(0,10)+'...';
    }
  },
}
</script>
<style scoped>
  h2{
    text-align: center;
  }
  .header{
    text-align: center;
  }
  .box{
    width: 80%;
    background: rgba(91, 134, 134, 0.6);
    padding:10px 60px;
    margin: 10px auto;
    box-sizing: border-box;
    box-shadow: inset 0 1px 6px #000;
    border-radius: 6px;
  }
  .page{
    display: inline-block;
  }
  section div{
    display: inline-block;
    float: right;
  }
  section div span{
    margin:0 10px;
  }
  .content{
    text-indent: 2em;
    font-size: 18px;
  }
</style>
