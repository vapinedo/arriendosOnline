import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SubmenuComponent } from './components/layout/sidebar/submenu/submenu.component';
import { MainmenuComponent } from './components/layout/sidebar/mainmenu/mainmenu.component';

const modules = [
  CommonModule,
  RouterModule,
  MaterialModule,
  ReactiveFormsModule,
  FormsModule,
  ToastrModule.forRoot({
    maxOpened: 3,
    autoDismiss: true,
    timeOut: 5000,
    positionClass: 'toast-top-right',
    preventDuplicates: true,
  })
];

const components = [
  SubmenuComponent,
  MainmenuComponent
];

@NgModule({
  declarations: [components],
  imports: [modules],
  exports: [components, modules]
})
export class SharedModule { }