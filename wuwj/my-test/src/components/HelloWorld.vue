<template>
  <div class="hello">
  	<img src="/static/image/1.png">
  <p> skill list:</p>
 <label>vue
  <el-progress style="width: 200px;" :text-inside="true" :stroke-width="18" :percentage="30" ></el-progress></label>
   <label>python
  <el-progress style="width: 200px;" :text-inside="true" :stroke-width="18" :percentage="70" ></el-progress></label>
     <label>java
  <el-progress style="width: 200px;" :text-inside="true" :stroke-width="18" :percentage="20" ></el-progress></label>
       <label>c
  <el-progress style="width: 200px;" :text-inside="true" :stroke-width="18" :percentage="20" ></el-progress></label>

  </div>
</template>

<script>
export default {
  data() {
      return {
       

      };
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
