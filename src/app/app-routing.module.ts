import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { ConceptComponent } from './concept/concept.component';
import { TeamComponent } from './team/team.component';
import { SuperComponent } from './super/super.component';
import { KeyComponent } from './key/key.component';
import { BlogComponent } from './blog/blog.component';
import { CleaningComponent } from './cleaning/cleaning.component';
import { OptiComponent } from './opti/opti.component';
import { CarWashComponent } from './car-wash/car-wash.component';


const routes: Routes = [
  {path:'',component:  HomeComponent},
  {path:'book',component:  BookComponent},
  {path:'concept',component:  ConceptComponent},
  {path:'team',component:  TeamComponent},
  {path:'super',component:   SuperComponent},
  {path:'key',component:   KeyComponent},
  {path:'blog',component:   BlogComponent},
  {path:'cleaning',component:    CleaningComponent},
  {path:'opti',component:    OptiComponent},
  {path:'car_wash',component:    CarWashComponent}
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
