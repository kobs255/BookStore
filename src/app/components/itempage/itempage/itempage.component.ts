import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/Item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-itempage',
  templateUrl: './itempage.component.html',
  styleUrls: ['./itempage.component.css']
})
export class ItempageComponent {

  //stores items grabbed from persistent storage
  items: Item[] = [];
  //Stores filtered items. Wanted to avoid directly manipulating the array above.
  filteredArr: Item[] = [];
  constructor(private itemService: ItemService) {
    this.items = this.itemService.getItems();
  }


  addItem(item: Item) {
    this.itemService.addItem(item);
  }

  filterView(filterVal: HTMLInputElement) {
    let { value } = filterVal;
    value = value.toLowerCase();

    if (value.trim() != "")
      this.filteredArr = this.items.filter(item => item.title.toLowerCase().includes(value));
    else
      this.filteredArr = [];

    this.items = this.itemService.getItems();
  }
}

