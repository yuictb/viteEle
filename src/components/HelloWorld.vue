<template>
  <el-form :model="modelcontent" ref="ruleFormRef" :rules="rules" status-icon label-width="auto">
    <el-form-item prop="userName" label="用户名">
      <el-input v-model.trim="modelcontent.userName"></el-input>
    </el-form-item>
    <el-form-item prop="passwd" label="密码">
      <el-input  v-model.trim="modelcontent.passwd"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">Submit</el-button>
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-form>
   <input v-focus="{a:3}" type="text">
   <button v-alert>按钮</button>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
let modelcontent = reactive({
  userName: '',
  passwd: ''
})
let rules = reactive<FormRules>({
  userName: [
    { required: true, message: "请输入校验名称", trigger: "blur" },
    { pattern: /^1[3-9]\d{9}$/, message: '手机号格式不正确', trigger: 'blur' }
  ]
})
const ruleFormRef = ref<FormInstance>();
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    console.log(valid)
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

</script>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
