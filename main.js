const PRODUCTS = [
  {
    name: 'iPhone 15 Pro',
    price: 1139,
    stars: 4.8,
    reviews: 500,
    category: 'iPhone',
    image: 'assets/iphone-15-pro.jpeg'
  },
  {
    name: 'iPhone 15',
    price: 849,
    stars: 4.5,
    reviews: 250,
    category: 'iPhone',
    image: 'assets/iphone-15.jpeg'
  },
  {
    name: 'iPhone 14',
    price: 699,
    stars: 3.8,
    reviews: 120,
    category: 'iPhone',
    image: 'assets/iphone-14.jpeg'
  },
  {
    name: 'iPhone SE',
    price: 429,
    stars: 3.5,
    reviews: 150,
    category: 'iPhone',
    image: 'assets/iphone-se.jpeg'
  },
  {
    name: 'iPad Air',
    price: 599,
    stars: 4.4,
    reviews: 200,
    category: 'iPad',
    image: '/assets/ipad-air.jpeg'
  },
  {
    name: 'iPad Pro',
    price: 799,
    stars: 4.8,
    reviews: 500,
    category: 'iPad',
    image: '/assets/ipad-pro.jpeg'
  },
  {
    name: 'Macbook Air',
    price: 999,
    stars: 4.7,
    reviews: 320,
    category: 'Macbook',
    image: '/assets/macbook-air.jpeg'
  },
  {
    name: 'Macbook Pro',
    price: 1599,
    stars: 4.6,
    reviews: 280,
    category: 'Macbook',
    image: '/assets/macbook-pro.jpeg'
  },
  {
    name: 'iMac',
    price: 1299,
    stars: 4.3,
    reviews: 220,
    category: 'Macbook',
    image: '/assets/imac.jpeg'
  },
  {
    name: 'Apple Watch Series 9',
    price: 399,
    stars: 3.3,
    reviews: 400,
    category: 'Watch',
    image: '/assets/watch-series-9.jpeg'
  }
];

//? FUNCIÓN CARTAS DE PRODUCTOS -> para que sea más fácil pintarlo en html creamos un bucle que se repite
const printProducts  = (products) => {
  const productSection = document.querySelector('#products')

  for (const product of products) {
  
    const divProduct = document.createElement("div");
    const imgProduct = document.createElement("img")
    const h2 = document.createElement("h2")
    const priceProduct = document.createElement("p")
    const divReviews = document.createElement("div")
    const starsProduct = document.createElement("div")
    const reviewProduct = document.createElement("p")
    const linkElement = document.createElement('a');
    const spanElement1 = document.createElement('span');
    const spanElement2 = document.createElement('span');
    const spanElement3 = document.createElement('span');
    const spanElement4 = document.createElement('span');

    imgProduct.src = product.image
    imgProduct.alt = product.name
    h2.textContent = product.name
    priceProduct.textContent = `$${product.price}`
    starsProduct.classList.add('stars');
    starsProduct.style.setProperty('--rating', product.stars); //! star
    reviewProduct.textContent = `(${product.reviews})`
    divProduct.classList.add('productCard')
    //!button add to cart:
    linkElement.classList.add('fancy');
    linkElement.href = '#';
    spanElement1.classList.add('top-key');
    spanElement2.classList.add('text');
    spanElement2.textContent = 'ADD TO CART';
    spanElement3.classList.add('bottom-key-1');
    spanElement4.classList.add('bottom-key-2');


    divProduct.appendChild(imgProduct)
    divProduct.appendChild(h2)
    divProduct.appendChild(priceProduct)
    divProduct.appendChild(divReviews)
    divReviews.appendChild(starsProduct)
    divReviews.appendChild(reviewProduct)
    linkElement.appendChild(spanElement1);
    linkElement.appendChild(spanElement2);
    linkElement.appendChild(spanElement3);
    linkElement.appendChild(spanElement4);
    divProduct.appendChild(linkElement);
    productSection.appendChild(divProduct)
   
  }
}

//? llamamos a la función para pintar los productos
printProducts(PRODUCTS); //para conectarla con el array