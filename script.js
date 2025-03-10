document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.add');
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  function displayer() {
    const cartDiv = document.getElementById('kundvagn');
    cartDiv.innerHTML = '';

    cart.forEach((item, index) => {
      const productElement = document.createElement('div');
      productElement.textContent = `${item.name} - ${item.price}kr`;
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Ta bort';

      removeBtn.addEventListener('click', () => {
        cart.splice(index, 1);
        saveCart();
        displayer();
      });

      productElement.appendChild(removeBtn);
      cartDiv.appendChild(productElement);
    });
  }

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const name = button.getAttribute('data-product');
      const price = button.getAttribute('data-price');
      cart.push({ name, price });
      saveCart();
      displayer();
    });
  });
});
