<script setup>
import timeLine from '../components/timeLine.vue'
import hotTips from '@/components/hotTips.vue'
import categoryCard from '@/components/categoryCard.vue'
import toolsCard from '@/components/toolsCard.vue'
</script>

<template>
    <section class="container pt-20">
        <div class="col-sm-9 col-md-9">
            <timeLine></timeLine>
        </div>

        <div class="col-sm-3 col-md-3">
            <hotTips></hotTips>
            <categoryCard></categoryCard>
            <toolsCard></toolsCard>
        </div>
    </section>
</template>

<style scoped></style>
