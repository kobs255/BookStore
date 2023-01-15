import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/models/Item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'MoreItemInfo',
  templateUrl: './item-more-info.component.html',
  styleUrls: ['./item-more-info.component.css']
})
export class ItemMoreInfoComponent implements OnInit {
  book?: Item;
  constructor(private route: ActivatedRoute, private bookService: ItemService) {

  }

  ngOnInit() {
    this.route.params
      .subscribe(param => {
        this.book = this.bookService.getBookById(param['id']);
        console.log(this.book);
      })
  }
}
