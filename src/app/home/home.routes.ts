import {PageNotFoundComponent} from '../not-found.component';
import {HomeComponent} from './home.component';

export const homeRoutes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '', redirectTo: 'data-table', pathMatch: 'full'
      },
      {
        path: 'data-table',
        loadChildren: './data-table/data-table.module#MyDataTableModule',
        title1: '数据管理',
        title2: '基础表格'
      },
      {
        path: 'form',
        loadChildren: './form/form.module#FormModule',
        title1: '数据管理',
        title2: '表单'
      },
      {
        path: '**',
        component: PageNotFoundComponent
      },
    ]
  }
];
