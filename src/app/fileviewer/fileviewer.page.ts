import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FileService } from '../share/files/file.service';
import { FileMimeType } from '@taldor-ltd/angular-file-viewer';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';
import { FileOpener } from '@ionic-native/file-opener/ngx';


interface file {
  id:number;
  level:string;
  fileName: string;
  year:number;
  url : string;
}

@Component({
  selector: 'app-fileviewer',
  templateUrl: './fileviewer.page.html',
  styleUrls: ['./fileviewer.page.scss'],
})
export class FileviewerPage implements OnInit {

  src = '../../assets/redaction.pdf';
  type = FileMimeType.PDF;

  fileId : number;
  file: any;

  constructor(private router : ActivatedRoute,
     private filesSrv: FileService,
     private popoverControler : PopoverController,
     private fileOpener: FileOpener) {
  
  }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.fileId = parseInt(params.get('id'));
    });

    this.file = this.filesSrv.getFileById(this.fileId);

    console.log(this.file);
    this.openFile();
    
  }

  openFile(){
    this.fileOpener.open('../../assets/redaction.pdf', 'application/pdf')
    .then(() => alert('File is opened'))
    .catch(e => alert('Error opening file '+JSON.stringify(e)));
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverControler.create({
      component: PopoverComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }


}
