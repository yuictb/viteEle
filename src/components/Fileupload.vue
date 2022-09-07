<!-- <template>
  <el-upload
    class="avatar-uploader"
    multiple
    drag
    :action="action"
    :limit="limit"
    :accept="accept"
    :list-type="listType"
    v-model:file-list="fileList"
    :on-success="handleAvatarSuccess"
    :on-error="handleAvatarErroe"
    :before-upload="beforeAvatarUpload"
    :before-remove="beforeRemove"
    :on-remove="handleRemove"
    :on-exceed="handleExceed"
    :on-preview="handlePreview"
  >
    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
    <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
    <template #tip>
      <div class="el-upload__tip">
        {{ tips }}
      </div>
    </template>
  </el-upload>
</template>
<script lang="ts" setup>
import { ref, defineProps, defineEmits } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { upload, download ,delfile} from "../apis/index";
import { Message, Plus } from "@element-plus/icons-vue";

import type { UploadProps, UploadUserFile } from "element-plus";
import { reject } from "lodash";
const handlePreview: UploadProps["onPreview"] = (uploadFile) => {
  emits("downfile", uploadFile);
  download({uid:uploadFile.uid})
};
const props = defineProps({
  tips: {
    type: String,
    default: "提示用户上传文件类型大小",
  },
  action: {
    type: String,
    default: "",
  },
  limit: {
    type: Number,
    default: 2,
  },
  accept: {
    // default:'.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    type: String,
    default: "",
  },
  listType: {
    type: String,
    default: "text",
  },
  fileList: {
    type: Array,
    default: () => {
      // name: 'food.jpeg',      //默认类型
      // url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
    },
    return: [],
  },
  fileSize: {
    type: Number,
    default: 2,
  },
});
const emits = defineEmits(["fileRemoves", "downfile"]);
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
  // upload(rawFile).then((res: any) => {
  //   console.log(res);
  // });
  return true;
};
// 删除列表文件前的钩子
const beforeRemove: UploadProps["beforeRemove"] = (uploadFile, uploadFiles) => {
  console.log(uploadFile.uid)
  let flag:boolean=true
  delfile({uid:uploadFile.uid}).then((res:any)=>{
     console.log(res);
     flag=res
  })
  return ElMessageBox.confirm(`确认要删除 ${uploadFile.name} ?`, "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  }).then(
    () => true
  ).catch(()=>false);
};
// 移除列表文件的操作
const handleRemove: UploadProps["onRemove"] = (file, uploadFiles) => {
  console.log(file, uploadFiles);
  // delfile({uid:file.uid).then((res:any)=>{
     
  // })
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
</style> -->
