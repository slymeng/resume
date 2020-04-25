<template>
  <div class="menupage">
<el-menu
  class="el-menu-demo"
  :default-active="$route.path"
  mode="horizontal"
  @select="handleSelect" 
  background-color="#545c64" 
  text-color="#fff" 
  active-text-color="#ffd04b"
  router
  >
  <el-menu-item index="/">首页</el-menu-item>
  <el-menu-item index="/aboutus">个人信息</el-menu-item>
  <el-menu-item index="/work">工作经历</el-menu-item>
  <el-menu-item index="/project">项目介绍</el-menu-item>
  <el-menu-item index="/skill">技术掌握</el-menu-item>
</el-menu>

  </div>
</template>

<script>
export default {
  name: 'TopNav',
  props: ['activeindex','ifdisabled'],
  data () {
    return {
      activeIndex: this.activeindex,
    }
  },
  methods: {
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
//        if(key === '2'){
//            this.$router.push({ path: "/aboutus" });
//        }
//        if(key === '1'){
//            this.$router.push({ path: "/" });
//        }
//        var name = ''
//  if (key === '1') name = 'homepage'
//  if (key === '4') name = 'project'
//  if (key === '3') name = 'work'
//  if (key === '2') name = 'aboutus'
//  if (key === '5') name = 'skill'
//  console.log(name);
//  var targetEle = document.querySelector('.' + name)
//  var offsetTop = targetEle.offsetTop
//  console.log(offsetTop);
//  document.documentElement.scrollTop = offsetTop -90
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
