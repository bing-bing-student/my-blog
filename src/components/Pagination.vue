<template>
    <div class="text-c mb-20" id="moreBlog">
        <el-pagination background layout="prev, pager, next" :total="total" :current-page="currentPage"
            :page-size="pageSize" @current-change="handlePageChange" class="radius" />
    </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
const props = defineProps({ total: Number, currentPage: Number, pageSize: Number })

let total = ref(props.total);

const emit = defineEmits(['handleCurrentChange'])

let currentPage = ref(1);
let pageSize = ref(9);

const handlePageChange = (newPage) => {
    // currentPage.value = newPage;
    emit('handleCurrentChange', newPage)
};

watchEffect(() => {
    total.value = props.total;
    currentPage.value = props.currentPage;
    pageSize.value = props.pageSize;
});

</script>

<style scoped>
.radius {
    padding: 6px;
    background-color: white;
    display: flex;
    justify-content: center;
}
</style>