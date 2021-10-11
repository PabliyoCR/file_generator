import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { FontsComponent } from './fonts/fonts.component';
import { SettingUpScssComponent } from './setting-up-scss.component';

const routes: Routes = [
  {
    path: '',
    component: SettingUpScssComponent,
  },
  {
    path: 'bootstrap',
    component: BootstrapComponent,
  },
  {
    path: 'fonts',
    component: FontsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingUpScssRoutingModule {}
export const routingComponents = [BootstrapComponent, FontsComponent];
