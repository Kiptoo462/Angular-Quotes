import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [

    new Quotes(1, '`Place of destiny` is our current book. Please vote for us, your vote and comments will helps us improve our standards.', 'Marjorie Oludhe Macgoye', 0,0, 'Paulines Publications Africa', new Date(2021, 7, 18) ),

  ];
  deleteQuote(isComplete: any, index: any) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }
  addNewQuote(quote: Quotes) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.date = new Date(quote.date)
    this.quotes.push(quote)

  }

  highlighter(index:any){
    const check = this.quotes[index].upvote;
    if(this.quotes.length > 0) {
      const votes: number[] = [];
     this.quotes.forEach(quote => votes.push(quote.upvote));
     if (check === Math.max(...votes)) {
    }
    }

  }
  constructor() { }

  ngOnInit(): void {
  }

}
