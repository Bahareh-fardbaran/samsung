const createpicones = (item, picone) => {
    const col = document.createElement('div');
    col.classList.add('col-sm-6', 'col-lg-3')
    col.innerHTML = `
    <div class="card border-0">
  <img src=${item.image} class="card-img-top" alt="...">
  <div class="card-body text-center">
    <h5 class="card-title">${item.pName}</h5>
     <p class="card-text">${item.Text}</p>
    <a href="#" class="btn text-decoration-underline fw-bold add"  data-id=${item.id}>${item.botton}</a>
  </div>
</div>
    `
    return col;
}

const renderpione = (picone) => {
    const piconeContainer = document.getElementById('picone');
    picone.map(item => {
        const col = createpicones(item, picone)
        piconeContainer.appendChild(col)
    })

}
(function main() {
    const picone = [

        { id: 1, pName: 'ProVisual Engine Camera',Text:'Folds most powerful camera system yet.', image: '../assets/images/c1.webp',botton:'Learn More' },
        { id: 1, pName: 'Gaming',Text:'Gaming Powerful performance. Gorgeous graphics.', image: '../assets/images/c2.webp',botton:'Learn More' },
        { id: 1, pName: 'Thin Design',Text:'Zero-gap hinge. 100% sleek.', image: '../assets/images/c3.avif',botton:'Learn More' },
        { id: 1, pName: 'Circle to Search',Text:'Discover more on more screen', image: '../assets/images/c4.webp',botton:'Learn More' },

    ]
    renderpione(picone)

})()