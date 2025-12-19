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
