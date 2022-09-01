import { Directive } from "vue";
import { focus, alert } from "./focus";
const directives = { focus, alert };

export default {
  install(app: any) {
    Object.keys(directives).forEach((key: any) => {
      app.directive(key, (directives as { [key: string]: Directive })[key]);
    });
  },
};
