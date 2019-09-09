<!--
 * @Descripttion: 
 * @version: 0.11
 * @Author: 前领
 * @Date: 2019-08-27 17:15:16
 * @copyright: Copyright (c) 2019,Hand
 -->
<template>
  <div class="singleBlog">
    <h2>博客主题：{{blog[0].title}}</h2>
    <p>博客内容为：</p>
    <p class="larst">{{blog[0].content}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
export default {
  name: 'single-blog',
  data(){
    return {
      title:'博客总览',
      blog:[{}],
      id:this.$route.query.id
    }
  },
  watch:{
    id(newValue,oldValue){
      this.id=newValue;
    }
  },
  activated(){
    this.id=this.$route.query.id;
    axios.get('/api/data').then(res=>{
      this.blog=res.data.filter(item=>item._id===this.id);
      // this.blog=data.body;
    })
  },
  computed:{
    ids(){
      this.id=this.$route.query.id
    }
  }
}
</script>
<style scoped>
  .singleBlog{
    width: 80%;
    margin:0 auto;
    background-image: linear-gradient(rgba(228, 198, 224, 0.2),rgba(117, 170, 230, 0.9));
    padding:60px 30px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
  }
  h2{
    text-align: center;
  }
  .header{
    text-align: center;
  }
  .larst{
    text-indent: 2em;
  }
  p{
    font-size: 18px;
  }
</style>
