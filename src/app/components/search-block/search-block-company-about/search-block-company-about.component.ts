import {Component, Input, OnInit} from '@angular/core';
import {Company} from '../../../models/company';

@Component({
    selector: 'app-search-block-company-about',
    templateUrl: './search-block-company-about.component.html',
    styleUrls: ['./search-block-company-about.component.scss']
})
export class SearchBlockCompanyAboutComponent implements OnInit {
    @Input() company: Company;

    constructor() {
    }

    ngOnInit() {
    }
}
