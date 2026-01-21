    // Add this JavaScript to change navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    // Change background when scrolled more than 50 pixels
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
const productList = document.getElementById("productList");
const searchInput = document.querySelector(".search-box input");

// Product Data
const products = [
  {
    id: 1,
    name: "កូនមាន់ស្រែ",
    qty: "10 ក្បាល",
    price: 30000,
    image: "./image/កូនមាន់.png"
  },
  {
    id: 2,
    name: "ពូជមាន់ជល់",
    qty: "1 kg",
    price: 35000,
    image: "./image/មាន់គក.jpg"
  },
  {
    id: 3,
    name: "មាន់គកខ្មៅ",
    qty: "1 kg",
    price: 40000,
    image: "./image/black chicken.jpg"
  },
  {
    id: 4,
    name: "សាច់គោ",
    qty: "1 kg",
    price: 60000,
    image: "./image/សាច់គោ.png"
  },
  {
    id: 5,
    name: "អង្ករផ្ការំដួល",
    qty: "30kg",
    price: 80000,
    image: "./image/អង្ករ.jpg"
  }, 
  {
    id: 6,
    name: "ស៊ុត",
    qty: "30 pack",
    price: 20000,
    image: "./image/egg.jpg"
  },
    {
    id: 7,
    name: "សាច់មាន់",
    qty: "1kg",
    price: 15000,
    image: "./image/សាច់មាន់.png"
  },
    {
    id: 8,
    name: "សាច់ទា",
    qty: "1kg",
    price: 16000,
    image: "./image/សាច់ទា.jpg"
  }
  ,  {
    id: 9,
    name: "ស្ពៃក្រញ៉ាញ",
    qty: "1kg",
    price: 2000,
    image: "./image/ស្ពៃក្រញ៉ាញ.jpg"
  },
    {
    id: 10,
    name: "ស្ពៃចង្កឺះ",
    qty: "1kg",
    price: 3000,
    image: "./image/ស្ពៃចង្កឺះ.jpg"
  },
    {
    id: 11,
    name: "ស្ពៃតឿ",
    qty: "1kg",
    price: 4000,
    image: "./image/ស្ពៃតឿ.jpg"
  },
    {
    id: 12,
    name: "ឳឡឹក",
    qty: "1kg",
    price: 2000,
    image: "./image/ឡឹក.jpg"
  },
    {
    id: 13,
    name: "ត្រគួន",
    qty: "1pack",
    price: 2000,
    image: "./image/ត្រគួន.jpg"
  },
    {
    id: 14,
    name: "ខ្ទឹមសរ",
    qty: "1kg",
    price: 5000,
    image: "./image/ខ្ទឹមសរ.jpg"
  },
    {
    id: 15,
    name: "ត្រីរ៉ស់",
    qty: "1kg",
    price: 8000,
    image: "./image/ត្រីរ៉ស់.jpg"
  },
  {
    id: 16,
    name: "ត្រីក្រាញ់",
    qty: "1kg",
    price: 3000,
    image: "./image/ត្រីក្រាញ់.jpg"
  },
   {
    id: 17,
    name: "ប៉េងប៉ោះ",
    qty: "1kg",
    price: 8000,
    image: "./image/ប៉េងប៉ោះ.jpg"
  },
   {
    id: 18,
    name: "ប៉េងប៉ោះឈឺរី",
    qty: "1kg",
    price: 9000,
    image: "./image/ប៉េងប៉ោះឈឺរី.jpg"
  }
];

// Render Function
function renderProduct(product) {
  productList.innerHTML += `
    <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
      <div class="card product-card h-100">
        <img src="${product.image}" class="product-img">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${product.name}</h5>
          <p class="text-primary">(${product.qty})</p>
          <p class="price mt-auto">៛${product.price.toLocaleString()}</p>
          <button class="btn btn-primary w-100">ទិញឥឡូវ</button>
        </div>
      </div>
    </div>
  `;
}

// Initial Render
products.forEach(renderProduct);

// Search
searchInput.addEventListener("input", function () {
  const keyword = this.value.toLowerCase();
  productList.innerHTML = "";

  products
    .filter(p => p.name.toLowerCase().includes(keyword))
    .forEach(renderProduct);
});
