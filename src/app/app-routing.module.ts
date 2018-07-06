import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/';
import {SearchComponent} from './components/search/';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'search', component: SearchComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
