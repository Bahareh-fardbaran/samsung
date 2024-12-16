const cart = [];
const createItems = (item, products) => {
    const col = document.createElement('div');
    col.classList.add('col-sm-6', 'col-lg-3')
    col.innerHTML = `
    <div class="card border-0">
  <img src=${item.image} class="card-img-top" alt="...">
  <div class="card-body text-center">
    <h3 class="card-title">${item.pName}</h3>
    <p class="card-text">${item.Text}</p>
    <a href="#" class="btn text-decoration-underline fw-bold add"  data-id=${item.id}>${item.botton}</a>
  </div>
</div>
    `
    return col;
}
const renderItems = (products) => {
    const productsContainer = document.getElementById('products');
    products.map(item => {
        const col = createItems(item, products)
        productsContainer.appendChild(col)
    })

    const buttons = document.querySelectorAll('.add');
    buttons.forEach(item => {
        item.addEventListener('click', (e) => {
            const id = e.target.getAttribute('data-id')
            const currentItem = products.filter(item => item.id === +id)
            cart.push(currentItem);
            const cartCount = document.getElementById('cart-count');
            cartCount.classList.remove('d-none');
            cartCount.innerText = cart.length;
        })
    })
}
(function main() {
    const products = [

        {
            id: 1, pName: 'Enjoy employee discounts', Text: ' Enjoy special benefits as a Samsung VIP. Get early access to holiday deals new products, and premium support. Auto-renews annually.3', botton: 'Learn more',
            image: './assets/images/b1.png'
        },
        { id: 2, pName: 'Trade in old gear for holiday cheer', Text: 'Trade in your old devices for credit towards the latest Samsungproducts.θ,5', image: './assets/images/b2.avif', botton: 'Learn more' },
        { id: 3, pName: 'Shop Samsung App. Save Big.', Text: 'With the Samsung Shop app, you can enjoy exclusive holiday deals, easy browsing, and a personalized shopping experience..', image: './assets/images/b3.webp', botton: 'Learn more' },
        { id: 4, pName: 'Exclusive perks for VIPs', Text: 'Enjoy special benefits as a Samsung VIP. Get early access to holiday deals, new products, and premium support. Auto-renews annually.3', image: './assets/images/b4.webp', botton: 'Learn more' },
    ]
    renderItems(products)

})()





