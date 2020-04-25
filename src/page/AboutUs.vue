<template>
    <div>
        <TopNav v-bind:activeindex="number"></TopNav>
    
<div class="aboutus">
 <div class="title">
  <el-divider content-position="center">个人信息</el-divider>
  <p><el-tag>厦门理工学院</el-tag><el-tag>本科</el-tag></p>
 </div>
 <el-card class="box-card" style="margin-bottom: 20px;">
  <div class="text item">
 
  </div>
  <div class='topMask square'></div><div class='topMask circular'></div>
 </el-card>
 </div>
        </div>
</template>

<script>
    import TopNav from '../components/TopNav'
export default {
  name: 'AboutUs',
  data () {
    return {
      msg:'',
      number:'2',
      dis2:true
    }
  },
  components: {
        TopNav,
      },
  methods: {

   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .aboutus .grid-content.line{
 border-right: 1px solid #ddd;
 height: 150px;
 }
 .aboutus .el-card__header{
 background: #545c64;
 }
 .aboutus .el-card__body{
 padding: 50px 20px;
 }
 .aboutus .el-timeline-item__wrapper{
 top: -8px;
 }
 .aboutus .title p .el-tag{
 margin: 0px 5px;
 cursor: pointer;
 }
 .aboutus{
 font-size: 14px;
 text-align: left;
 padding: 0px 100px;
     margin-top: 50px;
 }
 .intro{
 width: 200px;
 border: 1px solid #ddd;
 border-radius: 5px;
 }
 .text {
 font-size: 14px;
 text-align: left;
 line-height: 30px;
 text-indent: 2em;
 }
 .box-card{
 position: relative;
 }
 .item {
 display: inline-block;
 margin: 30px 50px;
 }
 .clearfix:before,
 .clearfix:after {
 display: table;
 content: "";
 }
 .clearfix:after {
 clear: both
 }
 .clearfix span{
 color: #fff;
 font-weight: bold;
 }
 .title p{
 color: #8c8888;
 font-size: 20px;
 text-align: center;
 }
 .grid-content .large{
 font-size: 16px;
 color: #409EFF;
 font-weight: bold;
 }
 .topMask{
 width: 100px;
 height: 100px;
 background-color: rgba(68,138,255,0.2);
 transform: rotate(45deg);
 position: absolute;
 }
 .square{
 border-radius: 5px;
 top: 0px;
 }
 .circular{
 border-radius: 50%;
 top:80px;
 left: 80%;
 background-color: rgba(255, 208, 75,0.2);
 }
 .aboutus .title {
     font-size: 20px
 }
 .el-divider__text{
     font-size: 20px
 }
</style>
