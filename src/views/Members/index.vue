<template>
  <div>
    <div class="box">
        <div class="box1">

        </div>
    </div>
    <TeamIntro/>
    <div class="memBox">
      <MemberBox />
    </div>  
  </div>
</template>

<script>
import TeamIntro from '@/components/TeamIntro/TeamIntro.vue'
import MemberBox from '@/components/MemberBox/index.vue'
export default {
  data() {
    return {
      pageTitle: '页面标题',
      text: '1111'
    };
  },
  components: {
    TeamIntro,
    MemberBox
  }
}; 
</script>

<style>

.banner{
  width: 1400px;
    height: inherit;
    margin: 0 auto;
    /* position: absolute;
    left: 50%;
    transform: translate(-50%,0); */
}

.box{
    width: 100%;
    height: 575px;
    background-color: #BB2316;
}

.box1{
    width: 1040px;
    height: 420px;
    background-color: white;
    top: 68px;
    position: relative;
    left: 50%;
    transform: translate(-50%,0);
}

.memBox{
  width: 1400px;
    height: inherit;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 90px;
    padding-bottom: 50px;
}

</style>