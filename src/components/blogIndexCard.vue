<template>
    <li class="no_pic">
        <h4 class="title">
            <router-link :to="`/blog/${blog.id}`" @click="goToBlogDetail">{{ blog.title }}</router-link>
        </h4>
        <div class="desc">{{ blog.content }}</div>
        <div class="date_hits">

            <span><i class="iconfont icon-calendar-v2"></i>&nbsp;&nbsp;{{ blog.createTime }}</span>
            <span><i class="iconfont icon-eye"></i>
                <p>&nbsp;{{ blog.views }}</p>
            </span>
        </div>
    </li>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();

const props = defineProps({
    blog: Object
});

let blog = ref(props.blog);

const goToBlogDetail = () => {
    store.commit('pagination/setCurrentPage', store.state.pagination.currentPage);
};
</script>

<style scoped>
.no_pic {
    padding: 15px;
}

ul {
    list-style: none;
}

li .desc {
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

li {
    position: relative;
    height: 110px;
    margin-bottom: 15px;
    padding: 15px 15px 15px 200px;
    list-style: none;
    background-color: #fff;
    border: solid 1px #ddd;
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.06);
    transition: all .2s ease-out;
}

li .date_hits {
    display: flex;
    align-content: center;
    justify-content: start;
}

li .date_hits {
    float: left;
    position: relative;
    line-height: 20px;
    font-size: 15px;
    color: #666;
    top: 9px;
}

.date_hits {
    width: 120%;
}

li .date_hits span:nth-child(1) {
    width: 120px;
}

li .date_hits span:nth-child(2) {
    width: 75px;
}

li .date_hits span:nth-child(2) p {
    position: relative;
    top: -23px;
    left: 18px;
}

.iconfont {
    font-family: "iconfont" !important;
    font-size: 14px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

* {
    word-wrap: break-word;
}


li .date_hits span {
    float: left;
    display: block;
    margin-right: 35px;
    height: 20px;
    line-height: 20px;
}

li .date_hits span a {
    color: skyblue;
}

li .date_hits span a:hover {
    text-decoration-line: none;
}
li .title a{
    color: #4dd0e1;
}

li .title a:hover {
    text-decoration: none;
    color: #fc5531;
}

@media (max-width: 560px) {
    .date_hits {
        width: 110%;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    li .date_hits span:nth-child(1) {
        width: 130px;
    }

    li .date_hits span:nth-child(2) {
        width: 40px
    }
}
</style>