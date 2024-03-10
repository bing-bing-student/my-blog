<template>
    <section class="container pt-20">

        <!-- 大图片和博客内容模块开始 -->
        <div class="col-sm-9 col-md-9">
            <bigPicture></bigPicture>
            <titleTips :tipMsg="'最新发布'"></titleTips>
            <blogPanel></blogPanel>
        </div>

        <!--右边模块开始-->
        <div class="col-sm-3 col-md-3">
            <Statement></Statement>
            <Search></Search>
            <hotTips></hotTips>
            <categoryCard></categoryCard>
            <toolsCard></toolsCard>
        </div>
    </section>

</template>

<script setup>
import bigPicture from '@/components/bigPicture.vue'
import titleTips from '@/components/titleTips.vue'
import blogPanel from '@/components/blogPanel.vue'
import Statement from '@/components/Statement.vue'
import Search from '@/components/Search.vue'
import hotTips from '@/components/hotTips.vue'
import categoryCard from '@/components/categoryCard.vue'
import toolsCard from '@/components/toolsCard.vue'
</script>

<style scoped>
@media (max-width: 560px) {
    section {
        width: 89vw !important;
    }
}
</style>