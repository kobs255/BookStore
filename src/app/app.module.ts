import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './components/app/app.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ItempageComponent } from './components/itempage/itempage/itempage.component';
import { ItemService } from './services/item.service';
import { ItemComponent } from './components/item/item.component';
import { CartComponent } from './components/cart/cart.component';
import { SummaryPipe } from './pipes/summary.pipe';
import { QtybtnComponent } from './components/qtybtn/qtybtn.component';
import { CheckoutComponent } from './components/checkout/checkout.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItempageComponent,
    ItemComponent,
    CartComponent,
    SummaryPipe,
    QtybtnComponent,
    CheckoutComponent,
  ],
  exports: [

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: ItempageComponent },
      { path: 'cart/checkout', component: CheckoutComponent },
      { path: 'cart', component: CartComponent },
    ])
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
