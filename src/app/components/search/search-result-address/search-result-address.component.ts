import {Component, Input, OnInit} from '@angular/core';
import {Address} from '../../../models/address';

@Component({
    selector: 'app-search-result-address',
    templateUrl: './search-result-address.component.html',
    styleUrls: ['./search-result-address.component.scss']
})
export class SearchResultAddressComponent implements OnInit {
    @Input() result: Address;

    constructor() {
    }

    ngOnInit() {
    }

}
