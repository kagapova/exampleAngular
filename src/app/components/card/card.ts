import {Component} from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./card.scss']
})
export class CardComponent {}
