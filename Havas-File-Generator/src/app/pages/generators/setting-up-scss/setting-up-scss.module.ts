import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPickerModule } from 'ngx-color-picker';

import {
  SettingUpScssRoutingModule,
  routingComponents,
} from './setting-up-scss-routing.module';

import { SettingUpScssComponent } from './setting-up-scss.component';
import { FormsModule } from '@angular/forms';
import { ColorsComponent } from './bootstrap/colors/colors.component';
import { SelectModule } from 'src/app/shared/components/select/select.module';
import { TextModule } from 'src/app/shared/components/text/text.module';

@NgModule({
  declarations: [SettingUpScssComponent, routingComponents, ColorsComponent],
  imports: [CommonModule, SettingUpScssRoutingModule, FormsModule, ColorPickerModule, SelectModule, TextModule],
})

export class SettingUpScssModule {}
