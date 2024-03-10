<template>
    <div class="chat-container">

        <div class="chat-history">
            <div v-for="(message, index) in messages" :key="index" class="message" :class="{ user: message.isUser }">
                <dialogueCard :message="message"></dialogueCard>
            </div>
        </div>

        <div class="chat-input">
            <input type="text" v-model="inputText" @keyup.enter="sendMessage" placeholder="请输入问题..." />
            <button @click="sendMessage">发送</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import DialogueCard from '../components/DialogueCard.vue';

const messages = ref([]);
const inputText = ref('');

messages.value.push({ text: '基于阿里云百炼的AI大语言模型', isUser: false });

const sendMessage = () => {
    if (inputText.value.trim() !== '') {
        messages.value.push({ text: inputText.value, isUser: true });
        inputText.value = '';
        // 在这里可以调用 API 发送消息并获取回复
        setTimeout(() => {
            messages.value.push({ text: 'AI功能尽情期待。。。', isUser: false });
        },);
    }
};
</script>

<style scoped>
:deep(.el-card__body) {
    padding: 15px;
}

.chat-container {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 240px);
    padding: 42px 4% 15px 4%;
}

.chat-history {
    flex: 1;
    overflow-y: auto;
    margin-bottom: 15px;
    padding: 0px 5%;
}

.message {
    display: flex;
    margin-bottom: 10px;
    padding: 5px 10px;
    min-width: 100px;
    max-width: 50%;
    word-wrap: break-word;
    font-size: 15px;
}

.message.user {
    justify-content: flex-end;
    margin-left: auto;
}

.chat-input {
    width: 85%;
    display: flex;
    margin-left: auto;
    margin-right: auto;
}

.chat-input input {
    flex: 1;
    padding: 10px;
    font-size: 16px;
    border-radius: 2px;
}

.chat-input button {
    padding: 10px 20px;
    font-size: 16px;
}
</style>