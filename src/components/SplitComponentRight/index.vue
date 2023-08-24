<template>
  <div class="split-component">
    <div class="split-contianer">
    <div class="image-section">
      <div class="image-container">
        <slot name="image">
          <img src="默认图片路径" alt="默认图片">
        </slot>
      </div>
    </div>
    <div class="text-section" >
      <div class="text-container">
        <slot name="text">默认文本内容</slot>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.split-component{
  font-family: Arial, sans-serif;
  margin: 10px 20px; 
}

.split-contianer {
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  margin: 20px;
  margin-bottom: 40px;
  width: 553px;
  height: 200px;
  border: 1px solid #BF2A12;
}

.image-container {
  width: 325px;
}

.text-container{
  width: 228px;
  height: 200px;
  background-color: #BF2A12;
  line-height: 200px;
  /* width: 40%; */
}

@media (max-width: 768px) {
  .split-component{
    font-family: Arial, sans-serif;
    margin: 10px 20px; 
  }

  .split-contianer {
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    margin: 20px;
    margin-bottom: 40px;
    width: 300px;
    height: 200px;
    border: 1px solid #BF2A12;
  }

  .image-container {
    width: 120px;
  }

  .text-container{
    width: 180px;
    height: 200px;
    background-color: #BF2A12;
    line-height: 200px;
    overflow: auto;
    font-size: small;
    /* width: 40%; */
  }
}
</style>
