<template>
    <div class="bg-fff box-shadow radius mb-20">
        <div class="tab-category">
            <a href=""><strong>热门推荐</strong></a>
        </div>
        <div class="tab-category-item">
            <ul class="index_recd">
                <li class="hotTips" v-for="(article, index) in hotTops.data" :key="index">
                    <router-link :to="`/Blog/${article.id}`">
                        <span>{{ article.title }}</span>
                        <p class="hits">
                            <i class="iconfont icon-eye" title="点击量"></i>
                            <span style="font-size: 14px">{{ article.views }}</span>
                        </p>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import { RouterLink } from 'vue-router';

let hotTops = reactive({ data: [] })

onMounted(async () => {
    try {
        const response = await window.$axios.get('/user/hotTops')
        hotTops.data = response.data.hotTops
    } catch (error) {
        alert(error)
    }
})
</script>

<style scoped>
.tab-category a {
    display: inline-block;
    border-bottom: 3px solid #9E9E9E;
    margin: 0 5px;
    pointer-events: none;
}

.index_recd .hotTips a:hover {
    text-decoration: none;
    color: #fc5531;
}

.index_recd li:hover {
    border-radius: 3px;
    cursor: pointer;
    background-color: #efefef;
}

.tab-category strong {
    color: #fff;
    background-color: #555555;
    margin: -1px 0 5px 0;
    display: inline-block;
    padding: 4px 15px;
    font-size: 14px;
}

.tab-category-item {
    border-top: 1px solid #EDEDED;
    padding: 10px 10px 10px 15px;
}

.index_recd li {
    background-color: #fff;
    line-height: 35px;
    height: 35px;
    white-space: nowrap;
    overflow: hidden;
    font-style: oblique;
    font-size: 14px;
}

.index_recd li a {
    color: #f22c00;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}

.index_recd li a span {
    max-width: 68%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    vertical-align: top;
    font-style: normal;
}

.index_recd li a .hits {
    color: #666;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 55px;
}

.index_recd li a .hits i {
    font-weight: 500;
}
</style>