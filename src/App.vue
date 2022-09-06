<template>
  <Fileupload
  tips="上传类型大小"
  action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
  accept=".png"
  :fileSize="2"
  listType="text"
  :limit="5"
  :fileList="fileList"
  @fileRemoves="fileRemove"
  @downfile="downfile"
   />
</template>

<script setup lang="ts">
  import {ref} from 'vue';
  import type {UploadUserFile} from 'element-plus'
  import Fileupload from "./components/Fileupload.vue";

// import HelloWorld from "./components/HelloWorld.vue";
// import Test from "./components/Test.vue";
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
const fileRemove=(fs:any)=>{
   console.log(fs);
   console.log()
   fileList.value.splice(1)
}
function downfile(ele:any){
   console.log(ele)
}

</script>
