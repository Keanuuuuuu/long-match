<template>
  <div class="media-container">
    <div class="media-content">
      <slot></slot>
    </div>
    <div class="media-title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style>
.media-container {
  width: 35vw;
  height: 25vw;
  background: #FFFFFF;
  box-shadow: 0px 5px 6px 1px rgba(0, 0, 0, 0.16);
  border-radius: 0px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: inline-block;
  margin: 0 20px;
}

.media-content {
  width: 30vw;
  height: 16vw;
  border-radius: 0px;
  margin: 5px auto;
  opacity: 1;
  border: 3px solid #AC4747;
  display: flex;
  align-items: center;
  justify-content: center;
}

.media-title {
  width: 35vw;
  height: 5vw;
  margin: 10px auto;
  font-family: 'Microsoft YaHei-Bold', 'Microsoft YaHei';
  font-weight: bold;
  line-height: 5vw;
  font-size: 2vw;
  color: #3D3D3D;
  text-align: center;
}
</style>
