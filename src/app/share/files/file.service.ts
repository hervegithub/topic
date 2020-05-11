import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

interface file {
  id:number;
  level:string;
  fileName: string;
  year:number;
  url : string;
}

@Injectable({
  providedIn: 'root'
})
export class FileService {

  files : file[] = [
    {
      id:1, 
      level:'BEPC',
      year: 2019,
      fileName:'Epreuve de redaction',
      url:'../../assets/redaction-bepc-2019.pdf',
    },
    {
      id:2, 
      level:'BACC',
      year: 2020,
      fileName:'Epreuve de mathématique',
      url:'../../assets/redaction-bepc-2019.pdf',
    },
    {
      id:3, 
      level:'BEPC',
      year: 2020,
      fileName:'Epreuve de Science de la vie et de la terre',
      url:'../../assets/redaction-bepc-2019.pdf',
    },
  ];

  rootRef = firebase.database().ref('/')

  constructor() { 
    
  }

  getFiles(level: string){
    return [...this.files].filter(file =>
      file.level === level
    );
  }

  getFileSortByYear(year: number, fileArray :  file[]){
    return fileArray.filter(file => file.year === year);
  }

  getFileById(id:number){
    return [...this.files].filter(file => file.id == id)
  }

  //CRUD for files 

  saveFilesOnFirebase(file: file, year:number){
    let promise = new Promise((resolve, reject)=>{
      this.rootRef.push(file).then((date)=>{
        resolve(date)
      }).catch(err=>{
        reject(err);
      });
    });
    return promise;
  }

  getAllFileOnFirebase(){
    return this.files;
  }
}
