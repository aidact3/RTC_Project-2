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

//! FUNCIÓN CARTAS DE PRODUCTOS -> para que sea más fácil pintarlo en html creamos un bucle que se repite
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
printProducts(PRODUCTS);

//! FUNCIÓN HEADER 
const printHeader = () => {
  const headerSection = document.querySelector('#header')

  //Create elements inside of it:
  //!hamburger:
  const divBurger = document.createElement('div');
  const label = document.createElement('label');
  const inputHam = document.createElement('input');
  const span1 = document.createElement('span');
  const span2 = document.createElement('span');
  const span3 = document.createElement('span');
  //! logo:
  const divLogo = document.createElement('div');
  const  imgLogo = document.createElement('img');
  const h1 = document.createElement( "h1" );


  //Adding others:
  //! hamburger:
  label.classList.add('divBurger');
  label.classList.add('burger');
  label.htmlFor = 'burger';
  inputHam.type = 'checkbox';
  inputHam.id = 'burger';
  //! logo:
  imgLogo.src= "/assets/favicon.png";
  imgLogo.alt="Logo";
  h1.textContent = 'iZone';
  imgLogo.classList.add('logo');
  divLogo.classList.add('logoDiv');

  //Connecting Elements
  //!logo:
  divLogo.appendChild(imgLogo);
  divLogo.appendChild(h1);
  //!hamburger:
  label.appendChild(inputHam);
  label.appendChild(span1);
  label.appendChild(span2);
  label.appendChild(span3);
  divBurger.appendChild(label);


  headerSection.appendChild(divLogo);
  headerSection.appendChild(divBurger);
}
printHeader();

//! FUNCIÓN SIDE SECTION
const printSection = () => {
  const sectionBurger = document.querySelector('#filter');
  //! Create elements
  // Category Filter
  const categorySelect = document.createElement('select');
  const preText = document.createElement('option');
  // Price Range Filter
  const divPrice = document.createElement('div');
  const priceTitle = document.createElement('h4');
  const priceRange = document.createElement('input');
  const divPriceLabel = document.createElement('div');
  const spanPrice1 = document.createElement('span');
  const spanPrice2 = document.createElement('span');
  // Clear Filters Button
  const buttonFilter = document.createElement('button');
  const span = document.createElement('span');

  //! Content of the elements
  // Category Filter
  categorySelect.id = 'category-select';
  preText.textContent = 'Select Category';
  categorySelect.insertBefore(preText, categorySelect.firstChild); // Insert the pre-text option at the beginning of the select element
  const categories = Array.from(new Set(PRODUCTS.map(product => product.category))); // Get all unique categories from the products array
  for (const category of categories) {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categorySelect.appendChild(option);
  } // Create an option element for each category and add it to the select element
  // Price Range Filter
  priceRange.type = 'range';
  priceRange.min = 0;
  priceRange.max = 2000;
  priceRange.value = 0;
  priceRange.id = 'price-range';
  divPrice.id = 'div-price-range';
  divPriceLabel.id = 'price-labels';
  spanPrice1.id = 'min-price';
  spanPrice2.id = 'max-price';
  spanPrice1.textContent = `$${priceRange.min}`;
  spanPrice2.textContent = `$${priceRange.max}`;
  priceTitle.textContent = 'Set the maximum price:'

  // Cleal Filters Button
  span.textContent = 'Clear Filters';

  //Adding Elements into the DOM
  buttonFilter.appendChild(span);
  sectionBurger.appendChild(categorySelect);
  divPrice.appendChild(priceTitle);
  divPrice.appendChild(priceRange);
  divPrice.appendChild(divPriceLabel);
  divPriceLabel.appendChild(spanPrice1);
  divPriceLabel.appendChild(spanPrice2);
  sectionBurger.appendChild(divPrice);
  sectionBurger.appendChild(buttonFilter);

  // Update the labels whenever the user interacts with the range input
priceRange.addEventListener('input', () => {
  spanPrice2.textContent = `$${priceRange.value}`;
});

}
printSection ();




//! FUNCIÓN FILTER CATEGORY
// const filterCategory = (category) => {
//   const productSection = document.querySelector('#products');
//   productSection.innerHTML = ''; // Clear the existing products
//   const filteredProductsCategory = PRODUCTS.filter(product => product.category === category);
//   printProducts(filteredProductsCategory); // Print the filtered products
// };
// //?Event Listener of Filter Category
// categorySelect.addEventListener('change', (event) => {
//   const selectedCategory = event.target.value;
//   filterCategory(selectedCategory);
// });

//! FUNCIÓN FILTER PRICE RANGE
// const filterPriceRange = (minPrice, maxPrice) => {
//   const filteredProductsPriceRange = PRODUCTS.filter(product => product.price >= minPrice && product.price <= maxPrice);
//   const productSection = document.querySelector('#products');
//   productSection.innerHTML = '';
//   printProducts(filteredProductsPriceRange);
// };
// //? Event Listener of Price Range
// const priceRangeInput = document.querySelector('#price-range');
// priceRangeInput.addEventListener('input', (e) => {
//   const minPrice = e.target.min;
//   const maxPrice = e.target.max;
//   const currentValue = e.target.value;
//   filterPriceRange(currentValue, maxPrice);
// });

//! FUNCIÓN CLEAR FILTERS
const clearFilters = () => {
  categorySelect.selectedIndex = 0; // Clear the category select element
  priceRange.value = priceRange.min; // Reset the price range input element
  const productSection = document.querySelector('#products'); // Clear the product section
  productSection.innerHTML = '';
  printProducts(PRODUCTS); // Print all products
};
//? Event listener to the clear filters button
buttonFilter.addEventListener('click', clearFilters);

//! FUNCIÓN DE BÚSQUEDA
const searchProducts = (products, searchTerm) => {
  // Filter the products based on the search term
  const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

  // Clear the existing product cards
  const productSection = document.querySelector('#products');
  productSection.innerHTML = '';

  // Print the filtered products
  if (filteredProducts.length > 0) {
    printProducts(filteredProducts);
  } else {
    // Print a message saying that nothing was found
    const message = document.createElement('p');
    message.textContent = 'Sorry, nothing was found';
    message.classList.add('no-results');
    productSection.appendChild(message);
  }
}
//? Add an event listener to the input field
const inputField = document.querySelector('.input');
inputField.addEventListener('input', (e) => {
  const searchTerm = e.target.value;
  searchProducts(PRODUCTS, searchTerm);
});

