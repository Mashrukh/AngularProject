import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthGuard } from './user/auth.guard';


const routes: Routes = [
  { path: '', component: HomePageComponent},
  // Dynamically import the user module only when login route is hit. This is to lazy load the user module
  { path: 'login', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  {path: 'kanban', loadChildren:() => import ('./kanban/kanban.module').then(m=> m.KanbanModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
