<template>
  <Pagenation
    :total="5000"
    v-model:currentPage="currentPage"
    v-model:pageSize="pageSize"
    layout="sizes, prev,pager,next,jumper "
    @getCurrentpage="getCurrentpage"
  />
</template>
<script lang="ts" setup>
import { ref ,watch} from "vue";
let currentPage = ref(1);
let pageSize=ref(10)
console.log(currentPage);
const getCurrentpage = (page: number) => {
  console.log(page);
};
watch([currentPage,pageSize],(newvalue,oldvalue)=>{
     console.log(newvalue,oldvalue)
})
</script>
