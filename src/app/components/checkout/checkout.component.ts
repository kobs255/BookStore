import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CartItem, ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  form;
  items: CartItem[];
  totalCost?: number;
  states =
    ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM',
      'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME',
      'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
      'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI',
      'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'];


  constructor(private itemService: ItemService, private fb: FormBuilder) {
    this.items = itemService.cartedItems;
    this.totalCost = itemService.total;
    this.form = fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      address: fb.group({
        city: ['', Validators.required],
        state: ['', Validators.required],
        street: ['', Validators.required],
        zipcode: ['', Validators.required]
      })
    });

  }

  onSubmit() {
    console.log(this.form.value)
  }
  get firstName() {
    return this.form.get("firstName") as FormControl;
  }

  get lastName() {
    return this.form.get("lastName") as FormControl;
  }

  get email() {
    return this.form.get("email") as FormControl;
  }

  get address() {
    return this.form.get("address") as FormGroup;
  }

  get city() {
    return this.address.get('city') as FormControl;
  }

  get state() {
    return this.address.get('state') as FormControl;
  }

  get street() {
    return this.address.get("street") as FormControl;
  }

  get zipcode() {
    return this.address.get("zipcode") as FormControl;
  }
}
