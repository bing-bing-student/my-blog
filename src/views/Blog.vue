<template>
    <section class="container pt-20">
        <div class="row w_main_row">
            <div class="col-md-10 col-sm-10 col-lg-10 w_main_left">
                <div class="panel panel-default  mb-20">
                    <div class="panel-body pt-10 pb-10">
                        <h1 class="c_titile">{{ title }}</h1>
                        <p class="box_c">
                            <span class="d_time">发布时间：{{ createTime }}</span>
                            <span>类别：{{ label }}</span>
                            <span>阅读：{{ views }}</span>
                        </p>

                        <div>
                            <MdPreview :editorId="state.id" :model-value="previewData" mode="preview"
                                :showCodeRowNumber=true style="word-break: normal;">
                            </MdPreview>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-2 col-sm-2 col-lg-2">
                <div class="catalog">
                    <MdCatalog :editorId="state.id" :scrollElement="scrollElement" :theme="state.theme"
                        :text="state.text" />
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue';
import { useRoute, onBeforeRouteUpdate } from 'vue-router';
import { MdPreview, MdCatalog } from 'md-editor-v3';

import 'md-editor-v3/lib/style.css';
import 'md-editor-v3/lib/preview.css';

let previewData = ref('')
let title = ref('')
let createTime = ref('')
let label = ref('')
let views = ref('')


const state = reactive({
    theme: 'default',
    text: '标题',
    id: 'my-editor'
});

const scrollElement = document.documentElement;

// 封装获取数据的函数
async function fetchData(id) {
    try {
        const response = await window.$axios.get(`/user/getArticle?id=${id}`, {});
        previewData.value = response.data.article.content;
        title.value = response.data.article.title;
        createTime.value = response.data.article.createTime;
        label.value = response.data.article.label;
        views.value = response.data.article.views;
    } catch (error) {
        alert(error);
    }
}

onBeforeRouteUpdate(async (to, from, next) => {
    const blogId = to.params.id;
    await fetchData(blogId);
    next();
});

onMounted(async () => {
    const route = useRoute();
    const id = route.params.id;
    await fetchData(id);
});
</script>

<style scoped>
.catalog {
    z-index: -1;
    border-top: 1px solid #EDEDED;
    background-color: #fff;
    padding: 10px;
    position: fixed;
    font-size: 13px;
    max-width: 13%;
    min-width: 13%;
    overflow-y: auto;
}

.container:after {
    content: "";
    display: block;
    clear: both;
}

.w_main_left {
    font: 12px Microsoft YaHei, STKaiti, STXihei;
    color: #756F71;
}

.c_titile {
    font-weight: 600;
    font-size: 2.3rem;
    text-align: center;
    color: #222226;
    font-weight: bold;
}


.box_c {
    border: #888 1px dashed;
    text-align: center;
    padding: 6px 0;
    margin: 0px 20px;
    color: #333;
}
@media (max-width: 1000px) {
    section {
        width: 89vw !important;
    }
}

@media (max-width: 560px) {


    .c_titile {
        font-size: 1.6rem;
    }

    .box_c {
        font-size: 12px !important;
    }

    .panel-body {
        padding: 0px;
    }

    .panel {
        margin: -20px;
    }

    :deep(.default-theme h3:before) {
        bottom: 4px !important;
    }

    :deep(.default-theme h3:after) {
        bottom: 6px !important;
    }
}

.box_c span {
    margin: 0 10px;
}

:deep(.default-theme pre code .code-block) {
    display: inline-block;
    vertical-align: bottom;
    overflow-x: auto;
    white-space: pre;
    text-wrap: nowrap;
}

/* 图片样式定义 */
:deep(.default-theme img) {
    border: 0px solid var(--md-theme-border-color);
}

/* 开始自定义H2的样式 */
:deep(.default-theme h2),
:deep(.default-theme h3),
:deep(.default-theme h4),
:deep(.default-theme h5),
:deep(.default-theme h6) {
    margin: 1.0em 0 .8em;
    font-weight: 600;
    color: var(--md-theme-color);
    position: relative;
    cursor: text;

}

:deep(.default-theme h2:after),
:deep(.default-theme h2:before) {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
}

:deep(.default-theme h2:before) {
    width: 24px;
    height: 24px;
    left: 0;
    top: 0;
    margin: auto;
    background-size: 24px 24px;
    background-image: url(../assets/img/h2_before.png);
}

:deep(.default-theme h2:after) {
    right: 0;
    content: "";
    width: 40%;
    height: 10px;
    margin: auto;
    display: inline-block;
    border-top-right-radius: 24px;
    background: linear-gradient(90deg, #fff, #4dd0e1);
    max-width: 50vw;
}

:deep(h2) {
    display: block;
    border-bottom: 4px solid #4dd0e1;
    position: relative;
    font-size: 1.8rem;
    padding: 7px 32px;
    margin: 23px 0;
}

:deep(.on-focus-mode h2.md-end-block.md-heading:not(.md-focus):not(.md-focus-container):after) {
    background-color: var(--blur-text-color) !important;
}

/* 结束自定义H2的样式 */
/* 开始自定义H3的样式 */
:deep(.default-theme h3:before) {
    border-bottom: 2px solid #4dd0e1;
    width: 100%;
    content: "";
    display: block;
    height: 28px;
    position: absolute;
    left: 0;
    top: 8px;
    bottom: -2px;
    margin: auto;
    background-size: 28px 28px;
    background-image: url(../assets/img/h3_before.png);
    background-repeat: no-repeat;
    animation: h3AnimationBefore 2s infinite alternate;
}

/* 动画效果 */
@keyframes h3AnimationBefore {
    0% {
        width: 28px;
    }

    25% {
        width: 100%;
    }

    50% {
        width: 100%;
    }

    100% {
        width: 100%;
    }
}

:deep(.default-theme h3:after) {
    content: "";
    display: block;
    width: 28px;
    height: 28px;
    position: absolute;
    border: 2px solid #4dd0e1;
    border-radius: 50%;
    right: -15px;
    top: 8px;
    bottom: 0;
    margin: auto;
    background-size: 28px 28px;
    background-image: url(../assets/img/h3_after.png);
    animation: h3AnimationAfter 2s infinite alternate;
}

@keyframes h3AnimationAfter {
    0% {
        transform: rotate3d(0, 0, 1, 0);
    }

    10% {
        transform: rotate3d(0, 0, 1, 0);
    }

    50% {
        transform: rotate3d(0, 0, 1, -360deg);
    }

    100% {
        transform: rotate3d(0, 0, 1, -360deg);
    }
}

:deep(.default-theme h3) {
    margin: 8px 0 !important;
    font-size: 1.4rem;
    position: relative !important;
    padding: 4px 32px !important;
    width: max-content !important;
}

:deep(.on-focus-mode h3.md-end-block.md-heading:not(.md-focus):not(.md-focus-container):after) {
    background-color: var(--blur-text-color) !important;
}

/* 结束自定义H3的样式 */
:deep(.default-theme h4) {
    font-size: 1.2rem;
}

:deep(.default-theme h5) {
    font-size: 1rem;
}

:deep(.default-theme pre) {
    padding: 0;
    border: 0;
    margin: 10px 0px;
}

:deep(.default-theme p) {
    line-height: 1.6;
    margin: 0;
    padding: .3rem 0;
}

:deep(.default-theme ul li p) {
    line-height: 1.6;
    margin: 0;
    padding: 0;
}

:deep(.default-theme ul>li) {
    list-style: disc;
}

:deep(.default-theme ul > li ul > li) {
    list-style-type: circle;
}

:deep(.default-theme ul > li ul > li ul > li) {
    list-style-type: square;
}

:deep(.default-theme ul li) {
    line-height: 1.6;
    margin: .1em 0;
}

:deep(.default-theme ul li p) {
    word-break: normal !important;
}

:deep(.default-theme ul li) {
    word-break: normal !important;
}

:deep(.default-theme ol>li) {
    word-break: normal !important;
}

:deep(.default-theme p) {
    word-break: normal !important;
}

:deep(.default-theme blockquote) {
    padding: .2em 1.2em;
    background-color: #e4f8fb;
    border-left: 5px solid #4dd0e1;
}
</style>