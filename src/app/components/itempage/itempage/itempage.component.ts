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

  constructor(private itemService: ItemService) {
    this.items = this.itemService.getItems();
  }

  
  addItem(item: Item) {
    this.itemService.addItem(item);
  }
}

