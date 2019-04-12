import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const testRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(testRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
