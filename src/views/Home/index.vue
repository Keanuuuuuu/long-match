<template>
  <div class="app-home">
    <img src="../../static/home.png" alt="">
    <img src="../../static/introduce.jpg" alt="" class="introduce">

    <div>
      <MessageBox title="标题框" :text="text" />
      <MessageBox title="标题框" :text="text"/>
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

    <div>
      <SplitComponent :textOnLeft="true">
      <template v-slot:text>
        <p>这里是文字内容</p>
      </template>
      <template v-slot:image>
        <img src="../../static/team.jpg" alt="" class="introduce">
      </template>
    </SplitComponent>

    <SplitComponent :textOnLeft="false">
      <template v-slot:text>
        <p>这里是文字内容</p>
      </template>
      <template v-slot:image>
        <img src="../../static/team.jpg" alt="" class="introduce">
      </template>
    </SplitComponent>
    </div>
  </div>
</template>

<script>
import MessageBox from "@/components/MessageBox";
import MediaDisplay from "@/components/MediaDisplay";
import SplitComponent from "@/components/SplitComponent";
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
    SplitComponent
  }
};
</script>

<style>
.introduce{
  width: 70%;
  margin-top: 30px;
  margin-bottom: 10px;
}
</style>