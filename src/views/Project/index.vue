<template>
  <div>
    <img src="../../static/组 66@2x.png" alt="">

    <div class="pro-message-box">
      <MessageBox title="标题框" :text="text" />
      <MessageBox title="标题框" :text="text"/>
    </div>

    <div class="pro">
      <div class="pro-title">项目简介</div>
      <div class="pro-index">

      </div>
    </div>
  </div>
</template>

<script>
import MessageBox from "@/components/MessageBox";
export default {
  data() {
    return {
      pageTitle: '页面标题', // 根据页面进行相应调整
      text:'等我1达娃大碗大碗大碗大碗大碗大碗大碗大碗的大碗大碗大碗大碗大大'
    };
  },
  components: {
    MessageBox,
  }
};
</script>

<style>
.pro-message-box{
  margin: 50px;
  display: flex;
  justify-content: center;
}

.pro{
  width: 1100px;
  margin: 100px auto;
}
.pro-title{
  width: 182px;
  height: 60px;
  font-size: 30px;
  font-family: Microsoft YaHei-Bold, Microsoft YaHei;
  font-weight: bold;
  color: #BB2316;
  letter-spacing: 10px;
}
.pro-index{
  margin: 0% auto;
  width: 1100px;
  height: 970px;
  background: #FFFFFF;
  border-radius: 0px 0px 0px 0px;
  opacity: 1;
  border: 1px solid #707070;
  border-top: 10px solid #CB3C2F;
}

@media (max-width: 768px) {
  .pro{
    width: 300px;
    margin: 10px auto;
  }
  .pro-title{
    width: 182px;
    height: 30px;
    font-size: 20px;
    font-family: Microsoft YaHei-Bold, Microsoft YaHei;
    font-weight: bold;
    color: #BB2316;
    letter-spacing: 10px;
  }
  .pro-index{
    margin: 0% auto;
    width: 300px;
    height: 500px;
    background: #FFFFFF;
    border-radius: 0px 0px 0px 0px;
    opacity: 1;
    border: 1px solid #707070;
    border-top: 10px solid #CB3C2F;
  }
}
</style>
