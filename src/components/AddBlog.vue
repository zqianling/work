<!--
 * @Descripttion: 
 * @version: 0.11
 * @Author: 前领
 * @Date: 2019-08-27 18:10:33
 * @copyright: Copyright (c) 2019,Hand
 -->
<template>
  <div class="addblog">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'addblog',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
