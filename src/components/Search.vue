<template>
    <div>
        <div class="panel panel-default mb-20">
            <div class="search_session">
                <form id="search" action='#' method="get" accept-charset="utf-8" target="_self"
                    @submit.prevent="search">
                    <input type="text" name="q" maxlength="20" placeholder="请输入关键词..." v-model="keyword">
                    <input type="hidden" name="sitesearch" value="index.html">
                    <button type="submit" class="submit iconfont">&#xeafe;</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute,useRouter } from 'vue-router';
import { useStore } from 'vuex'

const store = useStore();
const route = useRoute();
const router =useRouter();
const searchResults = ref([])
const keyword = ref(route.query.name || '')

onMounted(async () => {
    if (route.query.name) {
        await searchBlogs()
    }
})

async function searchBlogs() {
    await store.dispatch('search/search', keyword.value)
    searchResults.value = store.state.search.searchResults
}

async function search() {
  const query = keyword.value ? { name: keyword.value } : undefined
  router.push({ path: '/search-results', query })
}
</script>


<style scoped>
.search_session {
    padding: 0;
    height: 42px;
}

form {
    display: flex;
    align-content: center;
    justify-content: space-between;
}

.search_session form input {
    border: transparent;
    padding: 0 15px;
    background-color: #f6f6f6;
    font-size: 16px;
    width: 100%;
    height: 42px;
}

.search_session form button {
    border: transparent;
    font-size: 22px;
    background-color: #fff;
    height: 42px;
    margin: 0 9px;
}
</style>