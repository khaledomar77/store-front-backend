import {UserModel } from '../models/user';

const user=new UserModel()

//testing the behaviour of users model.
describe("User Model", () => {
  it('should have an index method', () => {
    expect(user.index).toBeDefined();
  });

  it('should have a show method', () => {
    expect(user.show).toBeDefined();
  });

  it('should have a create method', () => {
    expect(user.create).toBeDefined();
  });

  it('should have a delete method', () => {
    expect(user.delete).toBeDefined();
  });

  it('should have an authentication method', () => {
    expect(user.authenticate).toBeDefined();
  });

  it('create method should add an user', async () => {
    const result = await user.create({
      first_name: "khaled",
      last_name: "omar",
      username: "khaled@123",
      password: "password123"
    })
    expect(result).toBeDefined()
  })
  
  it('index method should return a list of users', async () => {
    const result = await user.index();
    expect(result).toEqual([{
      id: 1,
      first_name: "khaled",
      last_name: "omar",
      username: "khaled@123"
    }]);
  });

  it('show method should return the correct user', async () => {
    const result = await user.show("1");
    expect(result).toEqual({
      first_name: "khaled",
      last_name: "omar",
      username: "khaled@123"
    });
  });

  it('delete method should remove the user', async () => {
   const result=await user.delete("1")
    expect(result.first_name).toBe('khaled')
    expect(result.last_name).toBe('omar')
    expect(result.username).toBe('khaled@123')
    expect(result.password?.length).toBeGreaterThanOrEqual(60)
  })
})