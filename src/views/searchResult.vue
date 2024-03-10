<template>
    <section class="container pt-20">
        <div class="col-sm-9 col-md-9">
            <titleTips :tipMsg="msg" class="titleTips"></titleTips>
            <blogCategoryCard v-for="result in displayedResults" :key="result.id" :blog="result" />
            <Pagination :total="store.state.search.total" :currentPage="currentPage" :pageSize="pageSize"
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
import { ref, onMounted, computed,nextTick } from 'vue'
import { useRoute } from 'vue-router';
import { useStore } from 'vuex'

const store = useStore()
const route = useRoute();
const searchResults = ref([])
const msg = ref('')

let currentPage = ref(1)    // 初始页码为1
let pageSize = ref(9)       // 每页的文章数量，每页最多9篇文章
let total = ref(0)          // 文章总数

const displayedResults = computed(() => {
    if (searchResults.value) {
        const start = (currentPage.value - 1) * pageSize.value;
        const end = start + pageSize.value;
        return searchResults.value.slice(start, end);
    } else {
        return [];
    }
});

onMounted(async () => {
    const keyword = route.query.name
    await store.dispatch('search/search', keyword)

    searchResults.value = store.state.search.searchResults
    total.value = store.state.search.total
    msg.value = store.state.search.msg
})

function handleCurrentChange(page) {
    currentPage.value = page;
    nextTick(() => {
        displayedResults.value;
    });
}

</script>

<style scoped>
.titleTips {
    margin-top: 0;
}
</style>