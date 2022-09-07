import { server } from "../utils/request";
// 文件上传 - 获取文件列表
export const getFilelist = () => {
  return server.post("/oss/list");
};
// 文件上传 - 上传
export const upload = (rawFile: any) => {
  let fd = new FormData();
  fd.append("file", rawFile);
  return server("/oss/upload", {
    method: "post",
    data: fd,
    headers: { "Content-Type": "multipart/form-data" },
  });
};
// 文件上传 - 下载
export const downFile=(params:any)=>{
   console.log(params)
    return server.post('/oss/download',params)
}
// 文件上传 - 删除文件
export const delFile=(params:any)=>{
  return server.post('/oss/delete',params)
}