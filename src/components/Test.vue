<template>
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button @click="jump" type="primary">Primary</el-button>
    <el-button @click="test02" type="success">Success</el-button>
  </el-row>
</template>
<script setup lang="ts">
import { messtest, interactiveBox } from '../utils/ele'
const jump = () => {
  messtest('warning', '这是一个内容')
}
const test02 = () => {
  interactiveBox('确定吗?', 'warning').then(() => {
    messtest('success', '恭喜你修改成功')
  }).catch(() => {
    
  })
}

</script>