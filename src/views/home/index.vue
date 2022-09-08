<template>
  <Customupload
    tips="自定义提示用户上传文件类型大小 "
    accept=".png"
    :isauto="true"
    :fileSize="2"
    listType="text"
    :limit="5"
    v-model:fileList="fileList"
    @fileRemove="fileRemove"
    @downfile="downfile"
    @uploadfile="uploadfile"
  />
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { ElMessage } from "element-plus";
import type { UploadUserFile } from "element-plus";
import { getFilelist, upload, downFile, delFile } from "../../apis/index";
const fileList = ref<UploadUserFile[]>([
  {
    name: "food.jpeg",
    url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
  },
  {
    name: "food2.jpeg",
    url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
  },
]);
// 获取文件列表
// getFilelist().then((res: any) => {
//   console.log(res);
//   fileList.value = res;
// });
// 上传功能
const uploadfile = (fl: any) => {
  console.log(fl);
  upload(fl.file).then((res: any) => {
    if (res) {
      ElMessage({ message: "上传成功", type: "success" });
    } else {
      ElMessage({ message: "上传失败请重新上传", type: "error" });
    }
  });
};
// 删除列表文件
const fileRemove = (fs: any) => {
  delFile({ uid: fs.uid }).then((res: any) => {
    console.log(res);
  });
  console.log(fs);
  // fileList.value.splice(1);
};
// 下载文件
function downfile(ele: any) {
  downFile({ uid: ele.uid, name: ele.name }).then((res: any) => {
    window.location = res;
  });
  console.log(ele);
}
</script>
