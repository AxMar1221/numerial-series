import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FibonacciComponent } from './components/fibonacci/fibonacci.component';
import { HomeComponent } from './components/home/home.component';
import { PrimosComponent } from './components/primos/primos.component';
import { TriangularComponent } from './components/triangular/triangular.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'primos', component: PrimosComponent},
  { path: 'fibonacci', component: FibonacciComponent},
  { path: 'triangular', component: TriangularComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
