<template>
  <div class="custom-component">
    <div class="text-box" :style="{ width: textWidth + 'px', height: textHeight + 'px' }">
      <div class="title-box">{{ title }}</div>
      <div class="content">{{ text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    text: String,
    textWidth: String,
    textHeight: String,
  },
};
</script>

<style scoped>
.custom-component {
  align-items: center;
  justify-content: center;
  display: flex;
  box-sizing: border-box;
  margin: 43px;
}

.title-box {
  position: absolute;
  top: -39px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #BF2A12;
  color: white;
  padding: 5px 20px;
  border-radius: 5px;
  font-size: 29px;
  font-family: Microsoft YaHei-Regular, Microsoft YaHei;
  font-weight: 400;
  width: 352px;
  height: 78px;
  line-height: 78px;
}

.text-box {
  position: relative;
  /* padding: 30px; */
  border: 1px solid #BF2A12;
  margin-top: 20px;
  overflow-wrap: break-word;
  font-size: 22px;
  color: #333;
  border-radius: 15px;
  width: 538px;
  height: 731px;
  line-height: 1.5;
  font-weight: bold;
}

.content{
  font-size: 22px; 
  line-height: 1.5; 
  margin: 20px;
  margin-top: 100px; 
  text-align: left; 
  word-wrap: break-word;
}

@media (max-width: 768px) {
  .custom-component {
    align-items: center;
    justify-content: center;
    display: inline-block;
    margin: 0 10px;
  }
  .title-box {
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #BF2A12;
    color: white;
    text-align: center;
    border-radius: 5px;
    font-size: 1px;
    white-space:nowrap;
    width: 40px;
    height: 15px;
    line-height: 15px;
  }

  .text-box {
    position: relative;
    border: 1px solid #BF2A12;
    margin-top: 20px;
    overflow-wrap: break-word;
    font-size: 1px;
    color: #333;
    border-radius: 15px;
    width:  115px;
    height: 200px;
  }


  .text-box {
    position: relative;
    border: 1px solid #BF2A12;
    margin-top: 20px;
    overflow-wrap: break-word;
    font-size: 1px;
    color: #333;
    border-radius: 15px;
    width: 150px;
    height: 300px;
  }

  .content{
    font-size: 1px; 
    line-height: 1.5; 
    margin: 20px;
    margin-top: 10px; 
    text-align: left; 
    word-wrap: break-word;
  }
}
</style>
