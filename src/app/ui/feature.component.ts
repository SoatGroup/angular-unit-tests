import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
    selector: 'app-feature',
    template: `
    <article (click)="change('Autre valeur')">{{ message }}</article>
    `
})
export class FeatureComponent implements OnInit {
    public message = 'Valeur';

    constructor( private dataService: DataService) {}

    public change = evt => {
        this.dataService.change(evt);
    }
    ngOnInit() {
        this.dataService.getMessage().subscribe(message => {
            this.message = message;
        });
    }
}
