<template>
  <div class="itrBox">
    <div class="introduce">
      <div class="introTitle">{{title}}</div>
      <div class="introBox">{{content}}</div>
    </div>        
  </div>
</template>

<script>

export default {
  data(){
    return {
      title:'团队介绍',
      content:'文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字'
    }
  }
}

</script>

<style>

.itrBox{
  width: 1400px;
  margin: 0 auto;
}

.introduce{
  width: 1400px;
  height: 575px;
  margin-top: 58px;
  position: relative;
  left: 50%;
  transform: translate(-50%,0); 
}

.introTitle{
  font-size: 32px;
  color:#BB2316;
  font-weight: bold;
  text-align: left;
}

.introBox{
  width: 1280px;
  height: 410px;
  background-color: white;
  border: #CB3C2F solid 1px;
  border-top: #CB3C2F solid 10px;
  margin-top: 30px;
  font-size: 20px;
  color:#3D3D3D;
  padding: 60px;
  padding-top: 80px;
}

</style>