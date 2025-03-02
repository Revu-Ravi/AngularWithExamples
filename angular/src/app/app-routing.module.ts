import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { IfComponent } from './components/if/if.component';
import { ForComponent } from './components/for/for.component';
import { CourceComponent } from './components/course/cource.component';
import { CourceDetailsComponent } from './components/cource-details/cource-details.component';
import { SelectedItemsComponent } from './components/selected-items/selected-items.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { adminAccessGuard } from './admin-access.guard';
import { APICallsComponent } from './components/api-calls/api-calls.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'admin',component:AdminHomeComponent,canActivate:[adminAccessGuard]},
  {path:'if' , component:IfComponent},
  {path:'cource',component:CourceComponent},
  {path:'courceDetails',component:CourceDetailsComponent},
  {path:'for',component:ForComponent},
  {path:'selectedItems/:id',component:SelectedItemsComponent},
  {path:'apiCalls', component:APICallsComponent},
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
