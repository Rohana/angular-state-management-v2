import * as fromCustomer from './customer.actions';

describe('loadCustomers', () => {
  it('should return an action', () => {
    expect(fromCustomer.loadCustomers().type).toBe('[Customer] Load Customers');
  });
});
