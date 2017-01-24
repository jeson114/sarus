//modules
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http'
import {FormsModule} from '@angular/forms'
import {InfiniteScrollModule} from 'angular2-infinite-scroll';

//components
import {AppComponent} from './app.component';
import {ArticleListComponent} from './articles/article-list.component'

//@Injectables() 
import {ArticleService} from './articles/article.service'

//rxjs operators
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        InfiniteScrollModule
    ],
    declarations: [
        AppComponent,
        ArticleListComponent
    ],
    providers:[ArticleService],
    bootstrap: [AppComponent]
})
export class AppModule {}