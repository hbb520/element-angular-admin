import {LoginComponent} from './login/login.component';

export const appRoutes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
    {
      path: 'home',
      loadChildren: './home/home.module#HomeModule'
    },
  {
    path: '**',
    component: LoginComponent
  }
];
