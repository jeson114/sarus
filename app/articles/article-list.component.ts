import {Component ,OnInit} from '@angular/core';
import {Article} from '../shared/models/article'
import {ArticleService} from './article.service'

@Component({
    selector: 'article-list',
    templateUrl: 'app/articles/article-list.component.html',
    styles: [`
    .panel-body{
        font-size:18px;
    }
    h1{
        font-size:32px;
    }
    `
    ]
})
export class ArticleListComponent implements OnInit {
    articles : Article[];
    currentArticleId: number = 1;
    constructor(private service: ArticleService) {}
    ngOnInit() {
        this.articles=[];
        this.onScroll();
    }

    onScroll() {
        this.getNextArticle();
        // this.service.getArticles()
        //     .subscribe(
        //         article => {
        //             this.articles.push(article[Math.floor(Math.random()*article.length)]);
        //         },
        //         err => {
        //             console.log('err');
        //         }
        //     );
    }
    getNextArticle() {
        this.service.getArticle(this.currentArticleId++)
            .subscribe(
                article => {
                    console.log(article);
                    this.articles.push(article);
                    console.log(this.articles);
                },
                err => {
                    console.log('err');
                }
            );
    }
}