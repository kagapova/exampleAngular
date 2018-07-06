import {Component, Input} from '@angular/core';
import {EthAddress} from '@app/models/address';

@Component({
    selector: 'app-address-eth',
    templateUrl: './address-eth.component.html',
    styleUrls: ['./address-eth.component.scss']
})
export class AddressEthComponent {
    @Input() result: EthAddress;
}
