<template>
    <div class="bg-fff box-shadow radius mb-20">
        <div class="tab-category">
            <a href=""><strong>博客分类</strong></a>
        </div>
        <div class="tab-category-item">
            <ul class="index_recd">
                <li class="index_recd_item" v-for="label in labels">
                    <router-link :to="'/category/?name=' + label.name" :key="$route.fullPath">
                        <p>{{ label.name }}</p>
                        <span class="article_num">({{ label.articleCount }})</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';

let labels = ref([]);

onMounted(async () => {
    try {
        const response = await window.$axios.get('/user/getLabelList');
        labels.value = response.data.labelList;
    } catch (error) {
        console.error(error);
    }
});

</script>

<style scoped>
.tab-category a {
    display: inline-block;
    border-bottom: 3px solid #9E9E9E;
    margin: 0 5px;
    pointer-events: none;
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
    padding: 10px 15px 10px 15px;
}

.index_recd li {
    background-color: #fff;
    line-height: 32px;
    height: 35px;
    white-space: nowrap;
    overflow: hidden;
    font-style: oblique;
    font-size: 14px;
}

.article_num {
    color: #222;
    width: 50px;
}


.index_recd li a {
    color: #f22c00;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    display: inline-block;
    vertical-align: top;

    display: flex;
    align-content: center;
    justify-content: space-between;
}

.index_recd li a p{
    font-style: normal;
}
.index_recd li a span{
    width: 50px;
    font-style: normal;
}

.index_recd li:hover {
    border-radius: 3px;
    cursor: pointer;
    background-color: #efefef;
}

.index_recd .index_recd_item a:hover {
    text-decoration: none;
    color: #fc5531;
}
</style>