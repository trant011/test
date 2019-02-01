<template>
  <div class="hello">
<el-tabs  :tab-position="tabPosition" style="height: 200px;" v-model="activeName">
    <el-tab-pane label="webpack" name="webpack">
      <p>
        1.首先需要安卓nodejs<br>
        2.npm install<br>
        3.npm install vue-cli -g<br>
        4.vue init<br>
      </p>
    </el-tab-pane>

    <el-tab-pane v-for="data in writelist.data" :label="data" :name="data" >
      {{ writejson[data] }}
    </el-tab-pane>
  </el-tabs>
  
  </div>
</template>

<script>
export default {
   data() {
      return {

        tabPosition: 'left',
        docker:'',
        writelist:'',
        writejson:{'data':''},
        activeName:'0',
      };
    },
    mounted(){
        this.$http.get('http://'+window.location.host+':8002/writtingdata/').then(function(data){
            this.writelist = data.body;
          });
    },
    watch:{
      'activeName':function(val){ 
      const qs = require('qs');   
        let send = qs.parse("param="+val)
          this.$http.post('http://'+window.location.host+':8002/writtingdata/',{"param":val}).then(function(data){
            this.writejson[val] =data.body;
          });
        
      }
    },
    methods:{
     
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
