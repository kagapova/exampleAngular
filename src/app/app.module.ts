import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SearchComponent} from './components/search/search.component';
import {HomeComponent} from './components/home/home.component';
import {SearchFormComponent} from './components/search-form/search-form.component';
import {AppRoutingModule} from "./app-routing.module";
import {SearchService} from "./services/search.service";
import {SearchResultListComponent} from './components/search/search-result-list/search-result-list.component';
import {SearchResultItemComponent} from './components/search/search-result-item/search-result-item.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';
import { SearchResultLinkComponent } from './components/search/search-result-link/search-result-link.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    SearchFormComponent,
    SearchResultListComponent,
    SearchResultItemComponent,
    SearchResultLinkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
