<template>
    <div class="art_content">

        <ul class="index_arc">
            <template v-for="(blogInfo) in blogs" :key="blogInfo.id">
                <blogIndexCard :blog="blogInfo"></blogIndexCard>
            </template>
        </ul>
        <Pagination :total="total" :currentPage="currentPage" :pageSize="pageSize"
            @handleCurrentChange="handleCurrentChange">
        </Pagination>
    </div>

</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import blogIndexCard from './blogIndexCard.vue';
import Pagination from './Pagination.vue';
import { useStore } from 'vuex';

const store = useStore();
let allBlogs = ref([])      // 所有的博客文章

// let currentPage = ref(store.state.currentPage);
let currentPage = computed(() => store.state.pagination.currentPage);
const pageSize = 9          // 每页的文章数量，每页最多9篇文章
let total = ref(0)           // 文章总数

//发送axios请求
//请求的数据是一个数组，数组的长度就是totalPages的值
//这个数组通过props传递给blogIndexCard组件
onMounted(async () => {
    const response = await window.$axios.get('/user/');
    total.value = response.data.blogList.length;
    allBlogs.value = response.data.blogList;
});

let handleCurrentChange = (newPage) => {
  store.commit('pagination/setCurrentPage', newPage);
};

//分页模块
let blogs = computed(() => {
    if (allBlogs.value.length === 0) {
        return [];
    }
    let start = (currentPage.value - 1) * pageSize;
    let end = start + pageSize;
    return allBlogs.value.slice(start, end);
});

</script>


<style scoped>
ul {
    list-style: none;
}

.index_arc .no_pic {
    padding: 20px;
}

.index_arc li {
    position: relative;
    height: 115px;
    margin-bottom: 15px;
    padding: 15px 15px 15px 200px;
    list-style: none;
    background-color: #fff;
    border: solid 1px #ddd;
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.06);
    transition: all .2s ease-out;
}

.index_arc li .desc {
    height: 48px;
    line-height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-top: 8px;
    color: #333;
}

.index_arc li:hover {
    box-shadow: 0 9px 18px rgba(0, 0, 0, 0.18);
    transition: all .3s ease-out;
    border-bottom: 1px solid #ccc;
}
</style>