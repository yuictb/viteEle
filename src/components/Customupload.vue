<template>
  <el-upload
    class="avatar-uploader"
    ref="uploadRef"
    multiple
    drag
    :action="action"
    :limit="limit"
    :auto-upload="isauto"
    :accept="accept"
    :list-type="listType"
    :file-list="fileList"
    :on-success="handleAvatarSuccess"
    :on-error="handleAvatarErroe"
    :before-upload="beforeAvatarUpload"
    :on-remove="handleRemove"
    :on-exceed="handleExceed"
    :on-preview="handlePreview"
    :http-request="custload"
    :before-remove="beforeRemove"
  >
    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
    <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
    <template #tip>
      <div class="el-upload__tip">
        {{ tips }}
      </div>
    </template>
  </el-upload>
  <el-button v-if="!props.isauto" type="success" @click="submitUpload"
    >确定上传</el-button
  >
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
// import { upload  } from "../apis/index";
import { Message, Plus } from "@element-plus/icons-vue";

import type { UploadProps, UploadInstance, UploadUserFile } from "element-plus";
const uploadRef = ref<UploadInstance>();
// 点击列表的操作
const handlePreview: UploadProps["onPreview"] = (uploadFile) => {
  emits("downfile", uploadFile);
};
// 自定义上传
const custload = (options: any) => {
  console.log(options, "=====");
  emits("uploadfile", options);
};
const submitUpload = () => {
  uploadRef.value!.submit();
};
interface Propsrule {
  tips?: string; //提示用户上传文件属性 大小
  action?: string;
  limit?: number; // 此处限制上传文件个数
  accept?: string; // 限制上传文件类型
  listType?: string; // 文件列表展示类型
  fileList?: object[]; // 上传文件数据
  fileSize?: number; // 限制文件大小 单位( M )
  isauto?: boolean; // 是否开启自动上传功能
}
const props = withDefaults(defineProps<Propsrule>(), {
  tips: "提示用户上传文件类型",
  action: "",
  limit: 2,
  accept:
    ".doc,.docx,.pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  listType: "text",
  fileList: () => [],
  fileSize: 2,
  isauto: true,
});
const emits = defineEmits([
  "fileRemove",
  "downfile",
  "uploadfile",
  "update:fileList",
]);
const imageUrl = ref("");
const handleExceed = () => {
  ElMessage.error(`最多上传${props.limit}个文件`);
};

// 符合验证规则,文件上传成功操作
const handleAvatarSuccess: UploadProps["onSuccess"] = (
  response,
  uploadFile
) => {
  console.log(response);
  console.log(uploadFile);
  imageUrl.value = URL.createObjectURL(uploadFile.raw!);
};
// 文件上传失败的钩子
const handleAvatarErroe: UploadProps["onError"] = (response, uploadFile) => {
  console.log(uploadFile);
};

// 文件上传前的验证
const beforeAvatarUpload: UploadProps["beforeUpload"] = (rawFile) => {
  if (rawFile.size / 1024 / 1024 > props.fileSize) {
    ElMessage.error("文件超出规定大小");
    return false;
  }
};
// 删除列表文件前的钩子
const beforeRemove: UploadProps["beforeRemove"] = (uploadFile, uploadFiles) => {
  return ElMessageBox.confirm(
    `你确定要删除 ${uploadFile.name} ?`,
    "提示",
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  ).then(
    () => true,
    () => false
  );
};
// 移除列表文件的操作
const handleRemove: UploadProps["onRemove"] = (file, uploadFiles) => {
  emits("fileRemove", file);
  ElMessage({
    message: "删除成功",
    type: "success",
  });
};

// const handleChange: UploadProps["onChange"] = (uploadFile, uploadFiles) => {
//   fileList.value = fileList.value.slice(-3);
//   console.log(fileList);
// };
</script>

<style scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
