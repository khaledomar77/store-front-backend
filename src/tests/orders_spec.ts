import { Order, OrderStore } from '../models/order';

const order=new OrderStore()

//testing the behaviour of orders model.
describe("Order Model", () => {
  it('should have an index method', () => {
    expect(order.index).toBeDefined();
  });

  it('should have a show method', () => {
    expect(order.show).toBeDefined();
  });

  it('should have a create method', () => {
    expect(order.create).toBeDefined();
  });

  it('should have a delete method', () => {
    expect(order.update).toBeDefined();
  });

  it('should have an authentication method', () => {
    expect(order.delete).toBeDefined();
  });

  it('create method should add an order', async () => {
    const result = await order.create({
      order_name: "order1",
      quantity: 2,
      status: "pending",
      user_id: 1
    });
    expect(result).toEqual({
      order_id: 1,
      order_name: "order1",
      quantity: 2,
      status: "pending",
      user_id: 1
    });
  });

  it('index method should return a list of orders', async () => {
    const result = await order.index();
    expect(result).toEqual([{
      order_id: 1,
      order_name: "order1",
      quantity: 2,
      status: "pending",
      user_id: 1
    }]);
  });

  it('show method should return the correct order', async () => {
    const result = await order.show("1");
    expect(result).toEqual({
      order_id: 1,
      order_name: "order1",
      quantity: 2,
      status: "pending",
      user_id: 1
    });
  });

  it('delete method should remove the order', async () => {
    const result=await order.delete("1")

    const deletedOrder:Order={
       order_id: 1,
       order_name: "order1",
       quantity: 2,
       status: "pending",
       user_id: 1
    }
    expect(result).toBe(deletedOrder);
});
 
it('update method should modify the order', async () => {
  const selectedOrder:Order={
    order_name: "order1",
    quantity: 4,
    status: "pending",
    user_id: 1
  }
  const result=await order.update(selectedOrder)

  const deletedOrder:Order={
     order_id: 1,
     order_name: "order1",
     quantity: 4,
     status: "pending",
     user_id: 1
  }
  expect(result).toBe(deletedOrder);
  })
})