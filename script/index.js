const loadProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products")
    const data = await res.json()
    // displayProducts(data)

    //  displayProducts(data, "all-products-container");
    //  displayProducts(data, "trending-products-container", 3);

    if (document.getElementById("all-products-container")) {
        displayProducts(data, "all-products-container");
    }

    if (document.getElementById("trending-products-container")) {
        displayProducts(data, "trending-products-container", 3);
    }
}

const displayProducts = (products, containerId, limit = null) => {

    const productsContainer = document.getElementById(containerId)
    productsContainer.innerHTML = "";

    const showProducts = limit ? products.slice(0, limit) : products;


    showProducts.forEach((product) => {
        console.log(product)
        const card = document.createElement("div")

        card.innerHTML = `
        <div class="card w-72 shadow-md">
          <figure class="bg-gray-200 w-full h-[250px]">
            <img
              src="${product.image}"
              alt="product imagee"
              class="rounded-xl w-[150px] py-6 object-cover"
            />
          </figure>
          <div class="card-body">
            <div class="flex justify-between text-[12px]">
              <span class="bg-blue-200 text-blue-500 rounded-xl px-2">
                ${product.category}
              </span>
              <p class="text-end"><i class="fa-solid fa-star"></i> ${product?.rating?.rate} (${product?.rating?.count})</p>
            </div>
            <h2 class="text-md font-semibold">${product.title.slice(0, 30)}...</h2>
            <h3 class="font-semibold text-lg">$${product.price}</h3>
            <div class="flex gap-4 justify-between">
              <button class="w-1/2 btn btn-soft">
                <i class="fa-regular fa-eye"></i>
                Details
              </button>
              <button class="btn w-1/2 btn-primary">
                <i class="fa-solid fa-cart-shopping"></i>
                Add
              </button>
            </div>
          </div>
        </div>
        `
        productsContainer.appendChild(card)
    })
}

// loadProducts();

document.addEventListener("DOMContentLoaded", () => {
    loadProducts();
});






const loadCategories = () => {
    fetch("https://fakestoreapi.com/products/categories")
        .then(res => res.json())
        .then(json => displayCategories(json))
}

const displayCategories = (categories) => {
    const container = document.getElementById("category-container");
    container.innerHTML = "";

    categories.forEach(cat => {
        const btn = document.createElement("button");

        const capitalized =
            cat.charAt(0).toUpperCase() + cat.slice(1);

        btn.innerText = capitalized;

        btn.className =
            "btn btn-outline btn-sm m-1";

        container.appendChild(btn);
    });
}

loadCategories();














// const loadProducts = () => {
//     fetch("https://fakestoreapi.com/products")
//         .then((res) => res.json())
//         .then((json) => displayProducts(json))
// }

// const displayProducts = (products) => {
//     // get the container and empty
//     const productContainer = document.getElementById("product-container")
//     productContainer.innerHTML = "";

//     // get into every products
//     for (let product of products) {
//         const
//     }
// }

// loadProducts();