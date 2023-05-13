import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { BookpageComponent } from './bookpage/bookpage.component';
import { BookafilgthComponent } from './bookafilgth/bookafilgth.component';

const routes: Routes = [
  {path:'', component:HomepageComponent},
  {path:'home', component:HomepageComponent},
  {path:'bookpage', component:BookpageComponent},
  {path:'bookflight', component:BookafilgthComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
