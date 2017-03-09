import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'services',
    templateUrl: './products.component.html',
    directives: []
})
export class ProductsComponent {
    this.data: Object;
  constructor(private http: Http) {
    http.get('products.json')
      .map(res => res.json())
      .subscribe(data => this.data = data,
                  err => console.log(err),
                  () => console.log('Completed'));
}
