import { Directive } from "vue";
import * as  directives  from "./focus";
// const directives = { focus, alert };
console.log(directives)
export default {
  install(app: any) {
    Object.keys(directives).forEach((key: any) => {
      // console.log(directives)
      app.directive(key, (directives as { [key: string]: Directive })[key]);
    });
  },
};
