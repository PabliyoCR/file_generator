import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: async () =>
      (await import('./pages/homepage/homepage.module')).HomepageModule,
  },
  {
    path: 'setting-up-scss',
    loadChildren: async () =>
      (
        await import(
          './pages/generators/setting-up-scss/setting-up-scss.module'
        )
      ).SettingUpScssModule,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
