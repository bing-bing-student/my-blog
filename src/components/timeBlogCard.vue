<template>
    <div class="cd-timeline-content">
        <!-- <div class="demo-collapse">
            
        </div> -->
        <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item :title="`文章数：${articles.length}`">
                <ul>
                    <li v-for="(article, index) in articles" :key="index" class="blogCard">
                        <router-link :to="`/Blog/${article.id}`">
                            <i class="article-title">{{ article.title }}</i>
                            <p class="createTime">
                                <i class="iconfont icon-calendar-v2">&nbsp;&nbsp;{{ article.createTime }}</i>
                            </p>
                        </router-link>
                    </li>
                </ul>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue'

const activeNames = ref(['1'])
const handleChange = (val: string[]) => {
    console.log(val)
}

defineProps({ articles: { type: Array } });
</script>

<style scoped>
.cd-timeline-content li a {
    line-height: 34px;
    white-space: nowrap;
    overflow: hidden;
    list-style: decimal-leading-zero inside;
    font-style: oblique;
    font-size: 14px;
    background-color: #fff;
    height: 34px;

    display: flex;
    align-content: center;
    justify-content: space-between;
}

.cd-timeline-content li a i,
.cd-timeline-content li a p {
    flex-shrink: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

:deep(.el-collapse-item__header) {
    font-size: 18px !important;
    font-weight: 500 !important;
    color: #222226;
}

.article-title {
    max-width: 50%;
}

.cd-timeline-content i {
    font-style: normal;
}

.cd-timeline-content li a:hover {
    background-color: #efefef;
}

.cd-timeline-content a:hover {
    border-radius: 3px;
    cursor: pointer;
    text-decoration: none;
    color: #fc5531;
}

ul {
    list-style: none;
}
</style>