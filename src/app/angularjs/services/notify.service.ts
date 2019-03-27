import {module} from '../angularjsapp';
import './string.service';

export const notifyService = module.service('notifyService', [
  '$window',
  'stringService',
  (win, stringService) => {
    let msgs = [];
    return {
      notify: msg => {
        msgs.push(msg);
        if (msgs.length === 3) {
          msgs.push(stringService.getString());
          win.alert(msgs.join('\n'));
          msgs = [];
        }
      }
    };
  }
]);
