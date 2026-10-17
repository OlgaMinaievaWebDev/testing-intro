function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, product, quantity) {
  if (quantity <= 0) throw RangeError('quantity must be more then zero');
  const existingProduct = cart.find((item) => item.id === product.id);
  let newQuantity;
  if (existingProduct) {
    newQuantity = existingProduct.quantity + quantity;
  } else {
    newQuantity = quantity;
  }
  if (newQuantity > product.stock)
    throw RangeError('We have less items in the stock');

  if (existingProduct) {
    return cart.map((item) =>
      item.id === product.id ? { ...item, quantity: newQuantity } : item,
    );
  }

  return [...cart, { ...product, quantity: newQuantity }];
}

function changeQuantity(cart, productId, quantity) {
  const existingProduct = cart.find((item) => item.id === productId);
  if (!existingProduct) return cart;
  if (quantity <= 0) throw RangeError('quantity must be more then zero');
  if (quantity > existingProduct.stock)
    throw RangeError('not enough items in stock');
  return cart.map((item) =>
    item.id === productId ? { ...item, quantity: quantity } : item,
  );
}

function removeFromCart(cart, productId) {
  return cart.filter((item) => item.id !== productId);
}

function calculateCartSubtotal(cart) {
  return cart.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);
}

function calculateOrderTotal(cart, promoCode) {
  const subtotal = calculateCartSubtotal(cart);
  let discount = 0;
  if (promoCode === 'SAVE10' && subtotal >= 20000) {
    discount = subtotal * 0.1;
  }
  let delivery = 0;
  if (subtotal < 50000) {
    delivery = 30000;
  } 
  const total = subtotal - discount + delivery;
  return {
    subtotal,
    discount,
    delivery,
    total

  }
}

const cartApi = {
  addToCart,
  changeQuantity,
  removeFromCart,
  calculateCartSubtotal,
  calculateOrderTotal,
};

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
