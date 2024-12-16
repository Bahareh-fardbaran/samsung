const createpicones = (item, picone) => {
    const col = document.createElement('div');
    col.classList.add('col-sm-6', 'col-lg-3')
    col.innerHTML = `
    <div class="card border-0">
  <img src=${item.image} class="card-img-top" alt="...">
  <div class="card-body text-center">
    <h5 class="card-title">${item.pName}</h5>
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

        { id: 1, pName: 'Some quick', image: './assets/images/a1.webp' },
        { id: 1, pName: 'Some quick', image: './assets/images/a2.webp' },
        { id: 1, pName: 'Some quick', image: './assets/images/a3.webp' },
        { id: 1, pName: 'Some quick', image: './assets/images/a4.webp' },

    ]
    renderpione(picone)

})()