import { ElMessage, ElMessageBox } from "element-plus";
export const messtest=(type:any,message:any)=>{
    return ElMessage({
        type,
        message
    })
}
export const interactiveBox=(content:any,type:any)=>{
    return ElMessageBox.confirm( content,
    'Waring',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type
    }
  )
}