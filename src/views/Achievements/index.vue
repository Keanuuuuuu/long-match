<template>
  <div>
    <AchieveBox />
    <PhotoBox />
  </div>
</template>

<script>
import AchieveBox from '@/components/AchieveBox/AchieveBox.vue';
import PhotoBox from '@/components/PhotoBox'

export default {
  data() {
    return {
      pageTitle: '3', // 根据页面进行相应调整
    };
  },
  components: {
    AchieveBox,
    PhotoBox
  }
};
</script>