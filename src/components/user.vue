<template>
  <div class="hello">
     
      <p>{{useid}}</p>
  </div>
</template>

<script>
export default {
  name:'user',
  data () {
    return {

      msg: 'Welcome to Your Vue.js App'
      
    }
  },
  computed:{
      useid(){
          return this.$route.params.useid
      }
  },
   created(){
    console.log('created')
    
  },
  destroyed(){
    console.log('destoryed')
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
