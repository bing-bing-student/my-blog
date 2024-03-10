<template>
    <div class="flex flex-wrap gap-4">
        <el-card shadow="always">{{ message.text }}</el-card>
    </div>
</template>

<script setup>

// 使用 defineProps 定义组件接收的属性
const props = defineProps({
    message: Object
});
</script>