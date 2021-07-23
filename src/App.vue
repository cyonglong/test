<template>
  <div id="app">
  <router-link to="/home" tag="button" replace="" active-class="active">home</router-link>

  <router-link to="/HelloWorld" replace="" >HelloWorld</router-link>
  <router-link :to="'/user/'+userid" replace="" >user</router-link>
  
  <button @click="btnclick">anniu</button>
     <keep-alive exclude="user">
              <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      userid:'list',
        id:'zhangsan',
        id2:'lishi'
    }
  },
  methods:{
btnclick(){
  this.$router.replace('/home')
  // this.$router.push('/home')
}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
