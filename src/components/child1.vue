<template>
  <div class="hello">
     <ul>
         <li>1</li>
         <li>2</li>
         <li>3</li>
         <li>4</li>
         <li>5</li>
         </ul>
        <p>{{$route.query}}</p>
  </div>
</template>

<script>
export default {
        name:'child1',
        methods:{
          id1(){
            return this.$route.params.id
          }
        }
        
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
