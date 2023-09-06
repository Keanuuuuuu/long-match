<template>
  <div class="top-navbar">
    <router-link to="/" class="nav-item">首页</router-link>
    <router-link to="/project" class="nav-item">项目简介</router-link>
    <router-link to="/achievements" class="nav-item">成果展示</router-link>
    <router-link to="/members" class="nav-item">成员介绍</router-link>
  </div>
</template>

<style scoped>
.top-navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #8A1805;
  color: white;
  font-weight: bold;
  height: 60px;
  padding: 0px 50px;
}

.nav-item {
  text-decoration: none;
  color: white;
  padding: 0 20px;
  height: 60px;
  line-height: 60px;
}

@media (max-width: 768px) {
  .top-navbar {
    /* transform: scale(0.8); 整体缩小效果 */
    height: 40px; /* 调整高度 */
  }

  .nav-item {
    padding: 5px 10px; /* 调整 padding 大小 */
    font-size: 12px; /* 调整字体大小 */
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
  }

  .nav-item:hover {
    background-color: #681304; /* 鼠标悬停时的背景颜色 */
  }
}

.nav-item:hover {
  background-color: #681304; /* 鼠标悬停时的背景颜色 */
}
</style>
