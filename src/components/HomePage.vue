<template>
 <div class='homepage'>
  <div class="content">
   <div class='box' id='box1'></div>
   <div class='box' id='box2'> </div>
   <p>{{msg}}</p>
   <div class='box' id='box3'></div>
   <div class='box' id='box4'></div>
  </div>
 </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      msg:'专注web开发'
    }
  },
  methods: {

   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .homepage{
 height: 550px;
 background: url(../assets/back.png) no-repeat;
 background-size: 100% 120%;
 color: #fff;
 font-size: 28px;
 animation: bg infinite 100s linear alternate;
 }
 @keyframes bg {
 0% {background-size: 110% 130%; }
 10% {background-size: 111% 131%; }
 20% {background-size: 112% 132%; background-position: bottom;}
 30% {background-size: 113% 133%; }
 40% {background-size: 114% 134%;}
 50% {background-size: 115% 135%;background-position: left;}
 60% {background-size: 116% 136%;}
 70% {background-size: 117% 137%;}
 80% {background-size: 118% 138%;background-position: right;}
 90% {background-size: 119% 139%;}
 100% {background-size: 120% 140%;}
 }
 .content{
 display: inline-block;
 position: relative;
 top: 30%;
 }
 p{
 text-shadow: 0px 0px 10px rgba(255,255,255,0.5);
 letter-spacing: 10px;
 font-size: 40px;
    font-weight: bold;
    color: #000
 }
 .box{
 display: inline-block;
 width: 100px;
 height: 20px;
 }
 #box1{
 border-left:8px solid;
 border-top: 8px solid;
 position: relative;
 right: 150px;
 bottom: 20px;
 border-color: #000;
 }
 #box2{
 border-top: 8px solid;
 border-right: 8px solid;
 position: relative;
 left: 150px;
 bottom: 20px;
 border-color: #000;
 }
 #box3{
 border-left: 8px solid;
 border-bottom: 8px solid;
 position: relative;
 right: 150px;
 top: 20px;
 border-color: #000;
 }
 #box4{
 border-right: 8px solid;
 border-bottom: 8px solid;
 position: relative;
 left: 150px;
 top: 20px;
 border-color: #000;
 }
</style>
