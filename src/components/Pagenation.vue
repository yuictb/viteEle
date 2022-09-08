<template>
  <div class="demo-pagination-block">
    <el-pagination
      :current-page="currentPage"
      :page-size="pageSize"
      :page-sizes="[10, 20, 30, 40]"
      background
      :layout="layout"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";

interface ContentRule {
  total: number;
  currentPage:number;
  pageSize:number;
  layout?:string
}
const emits=defineEmits(['getCurrentpage','update:currentPage','update:pageSize'])
const props= withDefaults(defineProps<ContentRule>(), {
    total:0,
    currentPage:1,
    pageSize:10,
    layout:'prev, pager, next'
});
const handleSizeChange = (val: number) => {
   emits('update:pageSize',val) 
};
const handleCurrentChange = (val: number) => {
  emits('update:currentPage',val)
};
</script>
<style scoped>
.example-pagination-block + .example-pagination-block {
  margin-top: 10px;
}
.example-pagination-block .example-demonstration {
  margin-bottom: 16px;
}
</style>
