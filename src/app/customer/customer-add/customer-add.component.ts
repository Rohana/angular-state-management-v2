import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Customer} from '../../models/customer';
import {addCustomer} from '../store/action/customer.actions';
import {CustomerState} from '../store/reducer/customer.reducer';


@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})

export class CustomerAddComponent {

  constructor(private store: Store<CustomerState>) {
  }

  addCustomer(customerName: string): void {
    const customer = new Customer();
    customer.name = customerName;
    this.store.dispatch(addCustomer(customer));
  }
}
