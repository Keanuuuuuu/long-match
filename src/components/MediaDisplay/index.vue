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

<style scoped> 
.media-container {
  width: 558px;
  height: 421px;
  background: #FFFFFF;
  box-shadow: 0px 5px 6px 1px rgba(0, 0, 0, 0.16);
  border-radius: 0px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: inline-block;
  margin: 40px 20px;
}

.media-content {
  width: 514px;
  height: 329px;
  border-radius: 0px;
  margin: 5px auto;
  opacity: 1;
  border: 3px solid #AC4747;
  display: flex;
  align-items: center;
  justify-content: center;
}

.media-title {
  width: 558px;
  height: 65px;
  margin: 10px auto;
  font-family: 'Microsoft YaHei-Bold', 'Microsoft YaHei';
  font-weight: bold;
  line-height: 65px;
  font-size: 30px;
  color: #3D3D3D;
  text-align: center;
}
@media (max-width: 768px) {
  .media-container {
  width: 320px;
  height: 280px;
  background: #FFFFFF;
  box-shadow: 0px 5px 6px 1px rgba(0, 0, 0, 0.16);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
}

.media-content {
  width: 310px;
  height: 180px;
  border-radius: 0px;
  margin: 5px auto;
  opacity: 1;
  border: 3px solid #AC4747;
  display: flex;
  align-items: center;
  justify-content: center;
}

.media-title {
  width: 320px;
  height: 30px;
  margin: 10px auto;
  font-family: 'Microsoft YaHei-Bold', 'Microsoft YaHei';
  font-weight: bold;
  line-height: 30px;
  font-size: 15px;
  color: #3D3D3D;
  text-align: center;
}
}
</style>
