import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MmtechsoftjhipsterSharedModule } from 'app/shared/shared.module';

import { DocsComponent } from './docs.component';

import { docsRoute } from './docs.route';

@NgModule({
  imports: [MmtechsoftjhipsterSharedModule, RouterModule.forChild([docsRoute])],
  declarations: [DocsComponent]
})
export class DocsModule {}
