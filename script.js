class ProductList {
    #goods;
    #allProducts;

    constructor(container = '.products') {
        this.container = container;
        this.#goods = [];
        this.#allProducts = [];
        this.#fetchGoods();
        this.#render();
    }

    #fetchGoods() {
        this.#goods = [
            {id: 1, title: 'mouse', price: 500},
            {id: 2, title: 'monitor', price: 6000},
            {id: 3, title: 'printer', price: 15000},
            {id: 4, title: 'keyboard', price: 1000},
            {id: 5, title: 'mouse-2', price: 800},
            {id: 6, title: 'monitor-2', price: 8000},
            {id: 7, title: 'printer-2', price: 13000},
            {id: 8, title: 'keyboard-2', price: 1500},
        ];
    }

    #render() {
        const block = document.querySelector(this.container);

        for (let product of this.#goods) {
            const productObject = new ProductItem(product);
            console.log(productObject);
            this.#allProducts.push(productObject);
            block.insertAdjacentHTML('beforeend', productObject.render());
        }
    }
}

class ProductItem {
    constructor(product, img='https://placehold.it/200x150') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }

    render() {
        return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.title}</h3>
                  <p>${this.price}</p>
                  <button class="buy-btn">Добавить в корзину</button>
              </div>
          </div>`;
    }
}
const productList = new ProductList();