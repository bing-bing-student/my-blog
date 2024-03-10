<template>
    <div class="bg-fff box-shadow radius mb-20">
        <div class="tab-category">
            <a href=""><strong>工具 | 文档 | 社区</strong></a>
        </div>
        <div class="tab-category-item">
            <div class="tags">
                <a v-for="(link) in links" :key="link.id" :href="link.url" :class="`tags${getRandomClass()}`" target="_blank" rel="noopener noreferrer">
                    {{ link.name }}
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

let links = ref([]);

async function fetchToolsList() {
    try {
        const response = await window.$axios.get('/user/getToolsList');
        links.value = response.data.toolsList;
    } catch (error) {
        alert(error);
    }
}

fetchToolsList();

const getRandomClass = () => {
    const x = 9;
    const y = 0;
    const rand = Math.floor(Math.random() * (x - y + 1) + y);
    return rand;
};
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
    padding: 10px 10px 10px 15px;
}

.tags a {
    height: 26px;
    line-height: 26px;
    padding-right: 6px
}

.tags a:hover {
    color: #F00;
    text-decoration: underline
}
</style>