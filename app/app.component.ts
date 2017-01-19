import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <div class="jumbotron">
            <h1>Welcome to our app</h1>
            <button type="button" class="btn btn-primary">Primary</button>
        </div>
`,
    styles: [`
        .jumbotron {
            box-shadow 0 2px 0 0 #ddd;
        }
`]
})
export class AppComponent{}
