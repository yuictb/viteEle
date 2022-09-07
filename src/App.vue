<template>
  <!-- <Fileupload
    tips="上传类型大小"
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    accept=".png"
    :fileSize="2"
    listType="text"
    :limit="5"
    :fileList="fileList"
    @fileRemoves="fileRemove"
    @downfile="downfile"
  /> -->
  <Customupload
    tips="自定义提示用户上传文件类型大小 "
   
    accept=".png"
    :fileSize="0.000008"
    listType="text"
    :limit="1"
    :fileList="fileList"
    @fileRemoves="fileRemove"
    @downfile="downfile"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { UploadUserFile } from "element-plus";
import { getfile } from "./apis/index";
// getfile().then((res: any) => {
//   console.log(res);
//   fileList.value=res
// });
// let tyu=encodeURI("/^1[3-9]\d{9}$/");
// console.log(tyu)
// console.log(decodeURI(tyu))
let pattern="/^1[3-9]\d{9}$/";
let regpattern=new RegExp(pattern)
// console.log( new RegExp(pattern))
// console.log(new RegExp(pattern).test('15836636532'))
const str = "(^$)|(^0?(13|14|15|17|18|19)[0-9]{9}$)";
const reg = new RegExp(str);
// console.log(reg);
const fileList = ref<UploadUserFile[]>([
  // {
  //   name: "food.jpeg",
  //   url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
  // },
  // {
  //   name: "food2.jpeg",
  //   url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
  // },
]);
const fileRemove = (fs: any) => {
  console.log(fs);
  fileList.value.splice(1);
};
function downfile(ele: any) {
  console.log(ele);
}
</script>
