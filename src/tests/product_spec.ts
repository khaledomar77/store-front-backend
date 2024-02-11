import { ProductStore } from "../models/product"

const product=new ProductStore()

//testing the behaviour of products model.
describe("Product Model", () => {
  it('should have an index method', () => {
    expect(product.index).toBeDefined();
  });

  it('should have a show method', () => {
    expect(product.show).toBeDefined();
  });

  it('should have a create method', () => {
    expect(product.create).toBeDefined();
  });

  it('should have an update method', () => {
    expect(product.update).toBeDefined();
  });

  it('should have a delete method', () => {
    expect(product.delete).toBeDefined();
  });

  it('create method should add a product', async () => {
    const result = await product.create({
      product_name: "product1",
      price: 200,
      description: "this is product1"
    });
    expect(result).toEqual({
      product_id: 1,
      product_name: "product1",
      price: 200,
      description: "this is product1"
    });
  });

  it('index method should return a list of products', async () => {
    const result = await product.index();
    expect(result).toEqual([{
        product_id: 1,
        product_name: "product1",
        price: 200,
        description: "this is product1"
    }]);
  });

  it('show method should return the correct product', async () => {
    const result = await product.show("1");
    expect(result).toEqual({
        product_name: "product1",
        price: 200,
        description: "this is product1"
    });
  });

  it('delete method should remove the product', async () => {
    product.delete("1");
    const result = await product.index()

    expect(result).toEqual([]);
  });
});

