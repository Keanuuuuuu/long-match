<template>
  <div class="introBanner">
   <div class="centerBanner">
      <div class="map"><img src="../../static/map.png" alt=""></div>
      <div class="textBox">{{ text }}</div>            
   </div>
  </div>
</template>

<script>
export default {
data() {
  return {
    text: '内容'
  };
}
};
</script>

<style>

.introBanner{
  width: 100%;
  height: 720px;
  background-color: #BB2316;
}

.centerBanner{
  width: 1400px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin:0 auto;
}

.map{
  margin-top: 46px;
  margin-left: 76px;
  margin-right: 85px;
}

.map,.map>img{
  width: 764px;
  height: 632px;
}

.textBox{
  width: 483px;
  height: 562px;
  background-color: #ffffff;
  margin-top: 81px;
}

</style>