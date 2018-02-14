import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AsyncService {
    public monResultat = new BehaviorSubject('');

    constructor( private dataService: DataService ) {}

    public getData = (param) => {
        this.dataService.getInfo(param).subscribe(resultat => {
            this.monResultat.next(resultat.toUpperCase());
        });
    }

}
