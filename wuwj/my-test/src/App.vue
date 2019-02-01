<head><script type="text/javascript" src="/static/js/jquery.min.js">
</script></head>
<template>
  <div id="app">
<div>
<el-menu :router="routers" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="/">首页</el-menu-item>
   <el-menu-item index="/Hellotest/" >工作台</el-menu-item>
   <el-menu-item index="/writings/" >文章</el-menu-item>

 </el-menu>
   <router-view/>
 </div>
</div>
</template>

<script>
export default {
 data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        routers:true,
      };
    },
    methods: {
      handleSelect(key, keyPath) {

      }
    }
}
</script>


