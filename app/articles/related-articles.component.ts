import {Component,Input } from '@angular/core';

@Component({
    selector: 'related-articles',
    templateUrl: 'app/articles/related-articles.component.html'
})
export class RelatedArticlesComponent {
    @Input() related;
   
}