import { Component } from '@angular/core';

/* Meta data to provide template data.  needs the @component decorator to be identified as the components metadata*/
@Component({
  selector: 'app-pm-root', // the tag that is used in the template to replace with this component
  templateUrl: './app.component.html',  // the relative path to the html view template for this component
  styleUrls: ['./app.component.css']  // the relative path to the css styles template for this component
})

/*This is the root component class. classes in Typescript use export as the equivalent of the public access */
export class AppComponent {
  title = 'Kurata Beginners Course';
}
