import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-results-header',
  templateUrl: './search-results-header.component.html',
  styleUrls: ['./search-results-header.component.scss']
})
export class SearchResultsHeaderComponent {
  @Input() title: string;
  @Input() logo: string;
  @Input() type: string;
}
