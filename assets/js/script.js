const cart = [];
const createItems = (item) => {
    const col = document.createElement('div');
    col.classList.add('col-lg-3')
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
        const col = createItems(item)
        productsContainer.appendChild(col)
        console.log(productsContainer);

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

const card = [];
const createIt = (It) => {
    const col = document.createElement('div');
    col.classList.add('col-lg-6')
    col.innerHTML = `
    <div class="card shadow-sm  p-1 m-3 bg-body-tertiary rounded border-0 text-center">
  <img src=${It.image} class="card-img-top align-self-center " style="width: 70%;" alt="...">
  <div class="card-body text-center">
    <p class="card-text center-1 black">${It.Text1}</p>
    <p class="card-text center-1 black">${It.Text2}</p>
    <a href=${It.href} class="rounded-4 border-0  px-2 py-1 text-light"
     style="background-color: black;"
    data-id=${It.id}>${It.botton}</a>
  </div>
</div>
    `

    return col;
}

const renderBuy = (buy) => {
    const buyContainer = document.getElementById('buy')
    buy.map(It => {
        const col = createIt(It)
        buyContainer.appendChild(col)
    })
    const buttons = document.querySelectorAll('.add');
    buttons.forEach(item => {
        item.addEventListener('click', (e) => {
            const id = e.target.getAttribute('data-id')
            const currentIt = products.filter(item => item.id === +id)
            cart.push(currentIt);
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
    const buy = [

        { id: 4, Text1: 'Save up to $460+ on', href: './page4/index4.html', Text2: ' Galaxy Watch Ultra', image: './assets/images/4.avif', botton: 'buy Now' },
        { id: 2, Text1: 'Save up to $460+ on', Text2: './page4/index4.html', image: './assets/images/3.avif', botton: 'buy Now' },
        { id: 3, Text1: 'Save up to $975+ on ', Text2: 'Galaxy S24 Ultra', image: './assets/images/1.avif', botton: 'buy Now' },
        { id: 4, Text1: 'Save up to $460+ on', Text2: 'Galaxy Z Flip6', image: './assets/images/2.avif', botton: 'buy Now' },

    ]
    renderItems(products)

    renderBuy(buy)

    const user = JSON.parse(localStorage.getItem('user-name'))
    console.log(user);
    
    const userPlaceholder = document.getElementById('user1')
    userPlaceholder.innerText = user;

})()





