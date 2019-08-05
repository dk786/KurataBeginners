import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

@Component({
  selector: 'app-pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']

})

export class StarComponent implements OnChanges {
  @Input() rating;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  starWidth;

  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
  }

  onClick() {
    this.notify.emit('Clicked!');
    console.log(`The rating ${this.rating} was clicked!`);
    this.notify.emit(`The rating ${this.rating} was clicked!`);
  }
}
