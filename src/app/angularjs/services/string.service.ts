import {module} from '../angularjsapp';

// Services
module.service('stringService', () => {
  return {
    getString: () => {
      return `Howdie I'm from AngularJs service injected into AngularJs Service Not Registered in Angular`;
    }
  };
});
