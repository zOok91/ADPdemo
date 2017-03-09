import {Component} from '@angular/core';
import {ServicesComponent} from './services.component';
import {DescriptionComponent} from './description.component';

@Component({
  selector: 'app-comp',
  templateUrl: './app.component.html'
})
export class AppComponent{
    title = "Home Page";
}
