import { Component, Input } from '@angular/core';
import { CartItem } from 'src/app/services/item.service';

@Component({
  selector: 'CheckoutItems',
  templateUrl: './checkoutitems.component.html',
  styleUrls: ['./checkoutitems.component.css']
})
export class CheckoutitemsComponent {
  @Input("books") books?: CartItem[];
  @Input("totalCost") totalCost?: number;

}
