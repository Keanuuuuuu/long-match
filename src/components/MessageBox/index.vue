<template>
  <div class="custom-component">
    <div class="text-box" :style="{ width: textWidth, height: textHeight }">
      <div class="title-box">{{ title }}</div>
      {{ text }}
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

<style>
.custom-component {
  align-items: center;
  justify-content: center;
  display: inline-block;
  margin: 0 20px;
}

.title-box {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #BF2A12;
  color: white;
  padding: 5px 20px;
  border-radius: 5px;
  font-size: 14px;
  width: 5vw;
  height: 2vw;
}

.text-box {
  position: relative;
  padding: 10px;
  border: 1px solid #BF2A12;
  margin-top: 20px;
  overflow-wrap: break-word;
  font-size: 14px;
  color: #333;
  border-radius: 15px;
  width: 30vw;
  height: 30vw;
}
</style>
