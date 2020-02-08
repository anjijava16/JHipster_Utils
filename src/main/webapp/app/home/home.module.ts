import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MmtechsoftjhipsterSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [MmtechsoftjhipsterSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class MmtechsoftjhipsterHomeModule {}
