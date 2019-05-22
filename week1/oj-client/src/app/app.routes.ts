import {Routes, RouterModule} from '@angular/router';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { ProblemDatailComponent } from './components/problem-datail/problem-datail.component';
const routes: Routes = [{
  path: '',
  redirectTo: 'problems',
  pathMatch: 'full'
},
  {
    path: 'problems',
    component: ProblemListComponent
  },
  {
    path: 'problems/:id',
    component: ProblemDatailComponent
  },
  {
    path: '**',
    redirectTo: 'problems',
  }
// tslint:disable-next-line:eofline
];

// tslint:disable-next-line:eofline
export const routing = RouterModule.forRoot(routes);
