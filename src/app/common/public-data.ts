import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';

/***********************接口地址前缀*********************/
export const beforeUrl = '';

//页面跳转动画
export const pageAnimation = trigger('pageAnimation', [
  state('in', style({opacity: 1, transform: 'translateY(0)'})),
  transition('void => *', [
    style({
      opacity: 1,
      transform: 'translateY(40px)'
    }),
    animate('400ms  ease-out')
  ]),
  transition('* => void', [
    animate('400ms  ease-out', style({
      opacity: 0,
      transform: 'translateY(40px)'
    }))
  ])
]);
