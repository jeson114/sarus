import {Component ,OnInit} from '@angular/core';
import {Article} from '../shared/models/article';
import {NextArticle} from '../shared/models/article';
import {RelatedArticle} from '../shared/models/article';
import {ArticleService} from './article.service';

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
    articles: Article[];
    article : Article; 
    
    
    constructor(private service: ArticleService) {

    }

    ngOnInit() {
        this.articles = [];
        this.setFirstArticle();
        
    }
    /**
     * triggered by infinte-scroll directive
     */
    onScroll() {
        console.log('scrolled');
        this.getArticle(this.article.next.id);
    }

    getArticle(id) {
        this.service.getArticle(id)
            .subscribe(
                article => {
                    // console.log(article);
                    this.articles.push(article);
                    // console.log(this.articles);
                },
                err => {
                    console.log('err');
                }
            );
    }

    setFirstArticle(){
        this.article = new Article();
        this.article.next = new NextArticle();
        this.article.related = <RelatedArticle[]> Array();

        this.article.id = 1;
        this.article.author = 'Preston Stroman';
        this.article.title = 'Dolores laborum quis qui consequatur.';
        this.article.body = `Reiciendis aperiam possimus facilis iste. Est dolore dolorum rem est doloremque magnam et. Error in iusto ut tempora et repellendus asperiores. Aperiam sequi impedit.\n \rUt exercitationem aspernatur labore sit molestias. Placeat et iusto cumque expedita fuga accusantium. Quis soluta nobis laudantium aut. Harum eos ut explicabo in. Sit repellendus harum similique est molestiae doloribus. Similique voluptas voluptas maxime.\n \rDolores consequatur cum. In voluptatem aut ab aut quia. Molestias vero eligendi et consectetur ut ipsa quis iure. Alias quaerat blanditiis molestiae autem. Ab amet architecto recusandae quasi mollitia neque perferendis vitae.\n \rOmnis autem in adipisci ea rem ullam. Quisquam adipisci ipsa quia tempore cumque. Sed dolorem suscipit saepe quaerat ab quia magni est voluptatum. Est neque rem. A non sapiente ut doloribus dolores ipsum laudantium et.\n \rEst voluptatem architecto facere et consequatur. Voluptas non qui labore et atque sunt soluta doloribus. Quis molestiae possimus ut. Officia sed eius distinctio ipsam voluptate assumenda qui esse impedit.\n \rRepellendus expedita maiores debitis in. Hic et aut velit ut officiis vel occaecati nihil et. Explicabo minus quos maiores. Aut dolores incidunt non deleniti iure nisi doloribus ex rerum. Soluta quia vel aliquid qui harum. Et quas voluptatem.
        `;
        let temp = new RelatedArticle();
        temp.id = 52;
        temp.title ='Occaecati fugit quo.';
        temp.image = 'http://lorempixel.com/640/480/people';
        this.article.related.push(temp);
        console.log(this.article.related[0]);       
        // this.article.related[0].id = 52;
        // this.article.related[0].title = 'Occaecati fugit quo.'
        // this.article.related[0].image = 'http://lorempixel.com/640/480/people';
        this.article.next.id = 2;
        this.article.next.title = 'Laborum esse at laborum.'
        this.articles.push(this.article);
    }
}