<template>
    <!-- 时间线 -->
    <el-timeline>
        <el-timeline-item class="my-custom-timeline-item" v-for="(activity, index) in activities" :key="index"
            :timestamp="activity.timestamp" type="success" placement="top" size="large">
            <!-- 卡片 -->
            <el-col :span="24">
                <el-card shadow="hover">
                    <!-- 卡片内容 -->
                    <timeBlogCard :articles="activity.articles"></timeBlogCard>
                </el-card>
            </el-col>
        </el-timeline-item>
    </el-timeline>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import timeBlogCard from './timeBlogCard.vue';

let activities = ref([]);

onMounted(async () => {
    const response = await window.$axios.get('/user/getBlogOnceYear');
    activities.value = response.data.blogList;
});

</script>

<style>
.my-custom-timeline-item .el-timeline-item__tail {
    left: 4px;
    border-left: 3px solid #fff;
}

.my-custom-timeline-item .el-timeline-item__timestamp.is-top {
    font-size: 18px;
}

.my-custom-timeline-item .el-timeline-item__wrapper {
    top: -5px;
}

@media (max-width: 576px) {
    .my-custom-timeline-item .el-timeline-item__wrapper {
        padding-left: 15px;
        top: -5px;
    }
}
</style>