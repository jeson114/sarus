import {Component ,OnInit} from '@angular/core';
import {Article} from '../shared/models/article'
import {ArticleService} from './article.service'

@Component({
    selector: 'article-list',
    templateUrl: 'app/articles/article-list.component.html'
})
export class ArticleListComponent implements OnInit {
    articles: Article[];
    constructor(private service: ArticleService) {}

    ngOnInit() {
        this.service.getArticles()
            .subscribe(
                articles => {
                    this.articles = articles
                },
                err => {
                    console.log('err');
                }
            );
    }
}