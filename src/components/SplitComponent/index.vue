<template>
  <div class="split-component">
    <div class="split" :class="{ 'reverse-layout': textOnLeft }">
    <div class="text-section" >
      <div class="text-container">
        <slot name="text">默认文本内容</slot>
      </div>
    </div>
    <div class="image-section">
      <div class="image-container">
        <slot name="image">
          <img src="默认图片路径" alt="默认图片">
        </slot>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  props: {
    textOnLeft: Boolean, // 控制文字是否在左侧
  },
};
</script>

<style>
.split-component{
  position: relative;
  display: inline-block;
  font-family: Arial, sans-serif;
  margin: 0 20px;
}

.split {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  width: 300px;
  height: 150px;
  border: 1px solid #BF2A12;
}

.reverse-layout {
  flex-direction: row-reverse; /* 文字在左侧时翻转布局 */
}

.image-section {
  flex: 6;
}

.image-container {
}

.text-container{
  flex: 4;
  background-color: #BF2A12;
  height: 150px;
  line-height: 150px;
  /* width: 40%; */
}
</style>
