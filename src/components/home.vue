<template>
  <div class="hello">
      <p>{{msg}}</p>
      <router-link :to="{path:'/home/child1',query:{name:'zhangsan',height:'1.88'}}">child1</router-link>


            <button @click="but2">but</button>
      
              <router-view></router-view>
             
      
  </div>
</template>

<script>
export default {

  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
     id:'zhangsan',
      id2:'lishi',
      path:'/home/child1'
    }
  }, methods:{
      but1(){
          this.$router.replace("/home/child1")
      },
      but2(){
          this.$router.replace("/home/child2/"+this.id2)
          
      }
  },
  created(){
    console.log('created')
    
  },
  destroyed(){
    console.log('destoryed')
  },
  // keep alive 标签    活跃
  activated(){
    this.$router.replace(this.path)
    console.log('activated')
  },
  deactivated(){
    console.log('deactivated')
  },
  beforeRouteLeave(to, from, next){
      this.path=this.$route.path;
      next()

  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
