import { Component } from '@angular/core';
import { Item } from 'src/app/models/Item';
import { CartItem, ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: CartItem[] = [];
  constructor(private itemService: ItemService) {
    this.cartItems = itemService.cartedItems;
  }


  get total() {
    let cost = 0;
    for (let item of this.cartItems) {
      cost += item.item.price * item.qty;
    }
    return cost;
  }

  updateItemCount(qty: number, item: CartItem) {
    let cartItem = this.cartItems.find(s => s.item.id == item.item.id);
    //determines whether to decrement or increment qty based on updated qty value
    qty > cartItem!.qty ? this.itemService.incrementCartCount() : this.itemService.decrementCartCount();
    cartItem!.qty = qty;

    if (cartItem!.qty <= 0) {
      let index = this.cartItems.indexOf(cartItem!);
      this.cartItems.splice(index, 1);
    }
    this.itemService.setCartItems(this.cartItems);
  }
}
