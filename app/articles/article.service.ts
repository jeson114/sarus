import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Article } from '../shared/models/article'

@Injectable()
export class ArticleService {
    constructor(private http: Http) {}
    // private _resource = 'https://jsonplaceholder.typicode.com/posts'; 
    private _resource = 'http://localhost:4000/posts';


    getArticles(): Observable < Article[] > {
        return this.http.get(this._resource)
            .map(res => {
                return res.json();
            })
            .catch(this.handleError);
    }

    getArticle(id): Observable < Article > {
        return this.http.get(this._resource + '/' + id)
            .map(res => {
                return res.json();
            })
            .catch(this.handleError);
    }

    private handleError(err) {
        let errMessage: string;
        if (err instanceof Response) {
            let body = err.json() || '';
            let error = body.error || JSON.stringify(body);
            errMessage = `${err.status} - ${err.statusText} || ''} ${error}`;
        } else {
            errMessage = err.message ? err.message : err.toString();
        }
        return Observable.throw(errMessage);
    }
}
