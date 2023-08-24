<template>
  <div class="app-home">
    <img src="../../static/home.png" alt="">
    <img src="../../static/introduce.jpg" alt="" class="introduce">

    <div class="bome-message">
      <MessageBox title="标题框" :text="text" />
      <MessageBox title="标题框" :text="text" />
    </div>

    <img src="../../static/achievement.jpg" alt="" class="introduce">

    <div>
      <MediaDisplay title="媒体展示">
        <img src="../../static/achievement.jpg" alt="" class="introduce">
      </MediaDisplay>
      <MediaDisplay title="媒体展示">
      </MediaDisplay>
    </div>

    <img src="../../static/team.jpg" alt="" class="introduce">

    <div class="split">
      <div class="split-img">
        <SplitComponent>
          <template v-slot:text>
            <p>这里是文字内容</p>
          </template>
          <template v-slot:image>
            <img src="../../static/team.jpg" alt="" class="introduce">
          </template>
        </SplitComponent>

        <SplitComponentRight>
          <template v-slot:text>
            <p>这里是文字内容</p>
          </template>
          <template v-slot:image>
            <img src="../../static/team.jpg" alt="" class="introduce">
          </template>
        </SplitComponentRight>
      </div>

      <div class="split-text">
        文字
      </div>
    </div>

  </div>
</template>

<script>
import MessageBox from "@/components/MessageBox";
import MediaDisplay from "@/components/MediaDisplay";
import SplitComponent from "@/components/SplitComponent";
import SplitComponentRight from "@/components/SplitComponentRight";
export default {
  data() {
    return {
      pageTitle: '页面标题',
      text: '1111'
    };
  },
  components: {
    MessageBox,
    MediaDisplay,
    SplitComponent,
    SplitComponentRight
  }
};
</script>

<style scoped>
.introduce{
  width: 70%;
  margin-top: 30px;
  margin-bottom: 10px;
}
.bome-message{
  display: flex;
  justify-content: center;
}
.split{
  display: flex;
  justify-content: center;
  margin: 70px;
  /* margin: 40px auto; */
}
.split-img{
  /* display: block; */
  margin-right: 150px;
}
.split-text{
  width: 500px;
  height: 200px;
  /* margin: auto; */
  border: 1px solid #BF2A12;
}
@media (max-width: 768px) {
  .split-text{
    display: none;
  }
}
</style>