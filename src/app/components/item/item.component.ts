import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/models/Item';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input("itemObj") item: any;
  @Output("addItemEvent") addEvent = new EventEmitter<Item>();

  addToCart(item: Item) {
    this.addEvent.emit(item)
  }

  checkImg(item: Item) {
    //If no image set, display default one.
    item.itemImg = item.itemImg != '' ? item.itemImg : 'https://onebookonevalley.com/wp-content/uploads/2014/12/book-question-mark.jpg';
    return item.itemImg;
  }
}
