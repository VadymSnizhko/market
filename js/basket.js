const container = document.querySelector('.js-list');
const clear = document.querySelector('.js-clear');
const totalPrice = document.querySelector('.js-total-price');
const tableProduct = document.querySelector('.js-tab');
const buttonDel = document.querySelector('.js-tab');

const LS_KEY = 'basket';

const products = JSON.parse(localStorage.getItem(LS_KEY)) || [];

totalCostCalc();

function totalCostCalc() {
  let totalCost = 0;

  if (products.length) {
    clear.hidden = false;
    totalCost = products.reduce(
      (acc, { price, qty }) => (acc += qty * price),
      0
    );
  }

  totalPrice.textContent = totalCost
    ? `Total cost ${totalCost} грн.`
    : 'Basket empty';
}

const titleTable =
  '<tr><th>Name</th><th>Price</th><th>Quantity</th><th>Summ</th><th>Delete</th></tr>';

tableProduct.insertAdjacentHTML(
  'beforeend',
  titleTable + createTable(products)
);

//container.insertAdjacentHTML('beforeend', createMarkup(products));

function createTable(arr) {
  return arr
    .map(
      ({ id, name, qty, price }) => `
    <tr>
        <td>${name}</td>
        <td>${price},00 грн.</td>
        <td>${qty}</td>
        <td>${qty * price},00 грн.</td>
        <td><button class="button-del" data-id="${id}">X</button></td>
    </tr>
    `
    )
    .join('');
}

function createMarkup(arr) {
  return arr
    .map(
      ({ id, img, name, price, qty }) => `
    <li class="cart-item">
        <img class="product-img" src="${img}" alt="${name}"/>
        <h2>${name}</h2>
        <p>Quantity: ${qty}</p>
        <p>Total price: ${qty * price} грн.</p>
    </li>
  `
    )
    .join('');
}

buttonDel.addEventListener('click', delPosition);

function delPosition(event) {
  if (event.target.nodeName === 'BUTTON') {
    const delId = event.target.dataset.id;
    console.log(delId);
    const index = products.findIndex(item => item.id == delId);
    console.log(index);
    if (index !== -1) {
      products.splice(index, 1);
    }
    /* const newArray = products.filter(item => item.id != delId);
    //products = newArray;
    //console.log(newArray);
    */
    tableProduct.innerHTML = titleTable + createTable(products);
    localStorage.setItem(LS_KEY, JSON.stringify(products));

    totalCostCalc();

    //console.log(event.target.dataset.id);
  } else {
  }
}
