import { Component } from '@angular/core';
import { FileService } from '../share/files/file.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { PopoverPage } from '../popover/popover.page';

interface file {
  id:number;
  level:string;
  year:number;
  fileName: string;
  url : string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  files : file[] = [];
  segment : string;
  result:any;
  file:file={
    id:1, 
    level:"BEPC",
    year:2016,
    fileName: "Epreuve d'anglais",
    url: "dshqfsdg"
  }

  constructor(private filesSrv : FileService, private router: Router,
    private route : ActivatedRoute, private popoverCtrl: PopoverController) {
    //this.files =  this.filesSrv.getFiles('BEPC');
    this.segment ="liste"
  }

  ngOnInit(){
    /*this.route.paramMap.subscribe(params => {
      this.result = parseInt(params.get('result'));
    });
    console.log(this.result);*/

   //this.saveFile();
    this.getAllFile();
  }

  onSortByYear(){
    this.files = this.filesSrv.getFileSortByYear(2018, this.files)
  }

  onSingleFilePage(id){
    this.router.navigateByUrl('fileviewer/'+id)
  }

  saveFile(){
    this.filesSrv.saveFilesOnFirebase(this.file, this.file.year).then((data)=>{
      console.log(data);
    }).catch((err)=>{
      console.log(err);
    })
  }

  getAllFile(){
   this.files= this.filesSrv.getAllFileOnFirebase();
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverCtrl.create({
      component:PopoverPage,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

}
