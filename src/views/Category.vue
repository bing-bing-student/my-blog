<template>
    <section class="container pt-20">
        <div class="col-sm-9 col-md-9">
            <titleTips :tipMsg="categoryName" class="titleTips"></titleTips>
            <template v-for="(blogInfo) in blogs" :key="blogInfo.id">
                <blogCategoryCard :blog="blogInfo"></blogCategoryCard>
            </template>
            <Pagination :total="total" :currentPage="currentPage" :pageSize="pageSize"
                @handleCurrentChange="handleCurrentChange">
            </Pagination>
        </div>

        <div class="col-sm-3 col-md-3">
            <hotTips></hotTips>
            <categoryCard></categoryCard>
            <toolsCard></toolsCard>
        </div>

    </section>
</template>

<script setup>
import titleTips from '@/components/titleTips.vue'
import blogCategoryCard from '@/components/blogCategoryCard.vue'
import hotTips from '@/components/hotTips.vue'
import categoryCard from '@/components/categoryCard.vue'
import toolsCard from '@/components/toolsCard.vue'
import Pagination from '@/components/Pagination.vue'

import { ref, onMounted, computed, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
let categoryName = ref(route.query.name)

// 当路由变化时，你需要更新分类名和重新获取对应分类下的博客列表
watch(() => route.query.name, async (newName) => {
    categoryName.value = newName;
    // 同时，根据新的分类名重新获取数据
    await fetchCategoryBlogs(newName);
});
// 用于获取对应分类下的博客列表的函数
async function fetchCategoryBlogs(labelName) {
    try {
        const response = await window.$axios.get('/user/category?label=' + labelName);
        total.value = response.data.blogList.length;
        allBlogs.value = response.data.blogList;
    } catch (error) {
        console.error(error);
    }
}
onMounted(() => {
    fetchCategoryBlogs(categoryName.value);
});

let allBlogs = ref([])      // 所有的博客文章

let currentPage = ref(1)    // 初始页码为1
const pageSize = 9          // 每页的文章数量，每页最多9篇文章
let total = ref(0)          // 文章总数

//发送axios请求
//请求的数据是一个数组，数组的长度就是totalPages的值
//这个数组通过props传递给blogIndexCard组件
onMounted(async () => {
    const response = await window.$axios.get('/user/category?label=' + categoryName.value);
    total.value = response.data.blogList.length;
    allBlogs.value = response.data.blogList;
}
);

let handleCurrentChange = (newPage) => {
    currentPage.value = newPage;
};

let blogs = computed(() => {
    if (allBlogs.value) {
        const start = (currentPage.value - 1) * pageSize;
        const end = start + pageSize;
        return allBlogs.value.slice(start, end);
    } else {
        return [];
    }
});

</script>

<style scoped>
.titleTips {
    margin-top: 0;
}
</style>