import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyBComponent } from './lazy-b.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [LazyBComponent],
  imports: [
    HeaderModule,
    CommonModule,
    RouterModule.forChild([
      {path: '', redirectTo: 'lazy-b', pathMatch: 'full'},
      {path: 'lazy-b', component: LazyBComponent},
    ])
  ]
})
export class LazyBModule { }
