const section = document.getElementById("product-detail");

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

async function getProductById(id) {
    try {
        const response = await fetch("https://fakestoreapi.in/api/products");
        const data = await response.json();

        const product = data.products.find(item => item.id == id);

        if (!product) {
            section.innerHTML = '<p style="color:red;">Product not found!</p>';
            return;
        }

        showProduct(product);

    } catch (error) {
        section.innerHTML = '<p style="color:red;">Something went wrong!</p>';
    }
}

function showProduct(product) {
    const box = document.createElement("div");
    box.className = "single-product";

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.title;

    const title = document.createElement("h2");
    title.textContent = product.title;

    const desc = document.createElement("p");
    desc.textContent = product.description;

    const price = document.createElement("h3");
    price.textContent = "$" + product.price;

    box.append(img, title, desc, price);
    section.appendChild(box);
}

if (productId) {
    getProductById(productId);
} else {
    section.textContent = "No product ID found in URL!";
}
