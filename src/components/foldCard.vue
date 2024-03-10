<template>
  <div class="demo-collapse">
    <el-collapse v-model="activeNames" @change="handleChange">

      <el-collapse-item title="" name="1">
        <div>
        </div>
      </el-collapse-item>

    </el-collapse>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeNames = ref(['1'])
const handleChange = (val: string[]) => {
  console.log(val)
}
</script>