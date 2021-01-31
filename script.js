'use strict';

const products = [
    {id: 1, title: 'mouse', price: 500},
    {id: 2, title: 'monitor', price: 6000},
    {id: 3, title: 'printer', price: 15000},
    {id: 4, title: 'keyboard', price: 1000},
    {id: 5, title: 'mouse-2', price: 800},
    {id: 6, title: 'monitor-2', price: 8000},
    {id: 7, title: 'printer-2', price: 13000},
    {id: 8, title: 'keyboard-2', price: 1500},
];

const renderProduct = (title, price) => {
    return `<div class="product-item">
    <h3>${title}</h3>
    <p>${price}</p>
    <button class="by-btn">Добавить в корзину</button>
    </div>`;
};

const renderProducts = (list) => {
    const productList = list.map(function (product) {
        return renderProduct(product.title, product.price);
    });
    console.log(productList);
    document.querySelector('.products').innerHTML = productList;
};

renderProducts(products);