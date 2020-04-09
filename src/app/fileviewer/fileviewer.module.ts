import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularFileViewerModule } from '@taldor-ltd/angular-file-viewer';


import { IonicModule } from '@ionic/angular';


import { FileviewerPageRoutingModule } from './fileviewer-routing.module';

import { FileviewerPage } from './fileviewer.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngularFileViewerModule,
    FileviewerPageRoutingModule
  ],
  declarations: [FileviewerPage]
})
export class FileviewerPageModule {}
