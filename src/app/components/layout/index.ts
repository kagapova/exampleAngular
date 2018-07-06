import {Component} from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <ng-content select=".layout__main"></ng-content>
    <ng-content select=".layout__sidebar"></ng-content>
  `,
})
export class LayoutComponent {}
