import { Component, Input } from '@angular/core';
import { Item } from '../models/Item';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {

  currentPage = 1;
  itemsPerPage = 9;
  @Input("bookArray") bookArray: Item[] = [];
  maxPages = Math.ceil(this.bookArray.length / this.itemsPerPage);

  get bookCount(): number {
    return this.bookArray.length;
  }

}
