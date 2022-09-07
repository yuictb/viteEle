import { Directive } from "vue";
export const focus: Directive = {
  mounted(el: any, binding: any) {
    const { value } = binding;
      el.value=value.a
      el.focus()
  },
};
export const alert:Directive={
    mounted(el:any){
        console.log('调用')
    }
}
