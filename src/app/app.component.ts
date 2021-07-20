import { Component } from '@angular/core';
import { Quotes } from './quotes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Famous Quotes';

  quote = [
    new Quotes(1, '`Place of destiny` is our current book. Please vote for us, your vote and comments will helps us improve our standards.', 'Marjorie Oludhe Macgoye', 0,0, 'Paulines Publications Africa', new Date(2021, 7, 18) ),
  ]
}
