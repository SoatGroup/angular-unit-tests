import { Injectable } from '@angular/core';
import { DataService } from './data.service';

 @Injectable()
 export class MapperService {
     public monResultat;
     public val = false;

     constructor( private dataService: DataService ) {}

     public getData = (param) => {
         this.dataService.getInfo(param).subscribe(resultat => {
             this.monResultat = resultat.toUpperCase();
         });
     }


    public getValueAfterTimer = () => {
        setTimeout(() => {
            this.val = true;
        }, 50);
    }
 }
