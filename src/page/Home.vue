<template>
  <div class="home">
    <TopNav></TopNav>
    <HomePage></HomePage>
<!--    <AboutUs></AboutUs>-->
<!--    <Work></Work>
    <Project></Project>
    <Skill></Skill>-->
  </div>
</template>

<script>
    import TopNav from '../components/TopNav'
    import HomePage from '../components/HomePage'
    export default {
      name: 'HelloWorld',
      data () {
        return {
          msg: ''
        }
      },
      components: {
        TopNav,
        HomePage,
      },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
