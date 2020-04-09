import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FileviewerPage } from './fileviewer.page';

const routes: Routes = [
  {
    path: '',
    component: FileviewerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FileviewerPageRoutingModule {}
