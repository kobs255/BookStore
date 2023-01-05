import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'qtybtn',
  templateUrl: './qtybtn.component.html',
  styleUrls: ['./qtybtn.component.css']
})
export class QtybtnComponent {

  @Input("qty") qty: any;

  @Output("qtyChangeEvent") qtyChangeEvent = new EventEmitter<number>();

  incCount() {
    ++this.qty;
    this.qtyChangeEvent.emit(this.qty);
  }
  decCount() {
    --this.qty;
    this.qtyChangeEvent.emit(this.qty);
  }
}
