<template>
  <div class="achievements">
      <div v-for="(item) in achievement" :key="item.id" class="achBox">
      <div class="photoBox">
          <img src='' alt="">
      </div>
      <div class="titleBox">{{ item.title }}</div>
  </div>
  </div>
</template>

<script>
export default {
data() {
  return {
    achievement:[
      {
          id:1,
          photo:'../../static/team.jpg',
          title:'长征路，长征精神'
      },
      {
          id:2,
          photo:'../../static/team.jpg',
          title:'长征路，长征精神'
      },
      {
          id:3,
          photo:'../../static/team.jpg',
          title:'长征路，长征精神'
      },
      {
          id:4,
          photo:'../../static/team.jpg',
          title:'长征路，长征精神'
      }

    ]
  };
}
};
</script>

<style>

.achievements{
  width: 1400px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 100px;
  padding-top: 20px;
  padding-bottom: 50px;
  margin: 0 auto;
}

.achBox{
  width: 558px;
  height: 420px;
  background-color: #fff;
  display: flex;
  box-shadow: 0px 5px 6px 1px rgb(0 0 0 / 16%);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

.photoBox{
  width: 510px;
  height: 321px;
  padding-top: 10px;
  border: 5px solid #AC4747;
  background-color: #fff;
}

.photoBox>img{
  width: 492px;
  height: 306px;
  background-color: grey;
}

.titleBox{
  font-size: 26px;
  font-family: Microsoft YaHei-Bold, Microsoft YaHei;
  font-weight: bold;
  color: #3D3D3D;
}

</style>