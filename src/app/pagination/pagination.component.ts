import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../models/Item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  currentPage = 1;
  @Input("itemsPerPage") itemsPerPage = 9;
  bookArray: Item[] = [];
  maxPages: Array<number> = [];
  @Output("setPage") setPage = new EventEmitter<number>();

  constructor(bookService: ItemService) {
    this.bookArray = bookService.getItems();
    //Way to allow us to iterate over a "number" using ngFor
    console.log(this.bookArray.length / this.itemsPerPage)
  }

  ngOnInit(): void {
    this.maxPages = Array.from({ length: Math.ceil(this.bookArray.length / this.itemsPerPage) }, (v, k) => k + 1);

  }

  changePage(clickedPage: number) {
    this.currentPage = clickedPage;
    this.setPage.emit(this.currentPage);
  }

  get bookCount(): number {
    return this.bookArray.length;
  }

}
