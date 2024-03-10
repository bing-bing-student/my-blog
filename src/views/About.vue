<template>
    <section class="container">
        <div class="container-fluid">
            <div class="about">
                <h2>Just about me</h2>
                <ul>
                    <li>1. 昵称：{{ info.name }}</li>
                    <li>2. 性别：{{ info.sex }}</li>
                    <li>3. 职业：{{ info.profession }}</li>
                    <li>4. 定位：{{ info.position }}</li>
                    <li>5. 编程语言：{{ info.language }}</li>
                </ul>
                <h2>About my website</h2>
                <ul>
                    <li>域名信息：{{ info.domain }}</li>
                    <li>博客内容：{{ info.introduction }}</li>
                    <li>本站定位：{{ info.location }}</li>
                </ul>
                <h2>Contact me</h2>
                <ul>
                    <li>邮箱：{{ info.email }}</li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const info = ref({})

onMounted(async () => {
    const response = await window.$axios.get('/user/getAboutMeInfo')
    info.value = response.data.about
})
</script>

<style scoped>
.container:after {
    overflow-y: auto;
    content: "";
    display: block;
    clear: both;
}

.about_c,
.about {
    margin: 20px 0;
}

.about h2:nth-of-type(1) {
    font-size: 28px;
    font-family: 'Architects Daughter', cursive;
    margin: -25px 0 10px 0;
}

.about h2 {
    font-size: 28px;
    font-family: 'Architects Daughter', cursive;
    margin: 20px 0 10px 0;
}

.about ul {
    width: 90%;
}

.about li {
    font-size: 14px;
    margin-bottom: 15px;
}

@media (max-width: 560px) {
    .about h2:nth-of-type(1) {
        font-size: 26px;
        font-family: 'Architects Daughter', cursive;
        margin: -25px 0 8px 0;
    }

    .about h2 {
        font-size: 26px;
        font-family: 'Architects Daughter', cursive;
        margin: 15px 0 8px 0;
    }

    .about li {
        font-size: 14px;
        margin-bottom: 10px;
    }
}
</style>