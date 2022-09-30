import { CombosComponent } from './components/produtos/combos/combos.component';
import { BuildsComponent } from './components/produtos/builds/builds.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'produtos', component:BuildsComponent},
  {path:'produtos/combos', component:CombosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
