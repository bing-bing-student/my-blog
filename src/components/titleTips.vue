<template>
    <div class="mt-20 bg-fff box-shadow radius mb-5">
        <div class="tab-category">
            <a href=""><strong class="current">{{ props.tipMsg }}</strong></a>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({ tipMsg: String })
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
</style>