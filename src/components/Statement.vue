<template>
    <div class="panel panel-default mb-20">
      <div class="panel-body">
        <i class="iconfont" style="float: left;">&#xe600;&nbsp;&nbsp;</i>
        <swiper
          :modules="modules" 
          :slides-per-view="1"
          :autoHeight="true"
          :direction="'vertical'"
          :speed="500"
          :rewind="true"
          :autoplay="{ delay: 2500, disableOnInteraction: false }"
          :loop="true">
          <swiper-slide class="bd">博客网站上线,欢迎访问</swiper-slide>
          <swiper-slide class="bd">本站内容仅供学习和参阅,不做任何商业用途</swiper-slide>
        </swiper>
      </div>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules';

const modules = [Autoplay];

</script>

<style scoped>
.panel-body {
  height: 20px;
  display: flex;
  align-items: center; /* 竖直方向上居中对齐 */
  justify-content: flex-start; /* 水平方向左对齐 */
}
.bd{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 12px;
  z-index: 0;
  white-space: nowrap;
  text-overflow: ellipsis !important; /* 使用省略号表示溢出的文本 */
}
</style>
  