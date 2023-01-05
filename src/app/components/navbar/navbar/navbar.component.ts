import { Component } from '@angular/core';
import { CartItem, ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  cartCount = 0;
  constructor(private itemService: ItemService) {
    this.itemService.cartCount$.subscribe(res => {
      this.cartCount = res;
    })
  }
}
