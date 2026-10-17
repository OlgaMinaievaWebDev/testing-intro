const products = require('../../src/data/products');
const { filterByCategory } = require('../../src/catalog');

describe('filterByCategory', () => {
  test("'all' returns every product", () => {
    const result = filterByCategory(products, 'all');
    const ids = result.map((product) => product.id);
    expect(ids).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('undefined returns every product', () => {
    const result = filterByCategory(products, undefined);
    const ids = result.map((product) => product.id);
    expect(ids).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("'' return every product", () => {
    const result = filterByCategory(products, '');
    const ids = result.map((product) => product.id);
    expect(ids).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("'electronics' returns products with ID [1, 2]", () => {
    const result = filterByCategory(products, 'electronics');
    const ids = result.map((product) => product.id);
    expect(ids).toEqual([1, 2]);
  });

  test("'books' returns products with ID [3, 6]", () => {
    const result = filterByCategory(products, 'books');
    const ids = result.map((product) => product.id);
    expect(ids).toEqual([3, 6]);
  });

  test("'home' returns products with ID [4, 5]", () => {
    const result = filterByCategory(products, 'home');
    const ids = result.map((product) => product.id);
    expect(ids).toEqual([4, 5]);
  });

  test("'clothes' returns empty []", () => {
    const result = filterByCategory(products, 'clothes');
    const ids = result.map((product) => product.id);
    expect(ids).toEqual([]);
  });

  test("'toys' returns empty []", () => {
    const result = filterByCategory(products, 'toys');
    const ids = result.map((product) => product.id);
    expect(ids).toEqual([]);
  });

  test("'sports' returns empty []", () =>{
    const result = filterByCategory(products, 'sports');
    const ids = result.map((product) => product.id);
    expect(ids).toEqual([]);
  });
});
