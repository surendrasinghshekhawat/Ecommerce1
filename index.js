const section = document.querySelector("section");

async function fetchDataFromURL(url) {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    showData(result.products);
}
fetchDataFromURL('https://fakestoreapi.in/api/products');

function showData(arr) {
    arr.map((product) => {
        const parent = document.createElement("div");
        parent.classList.add("product");

        const anchor = document.createElement("a");
        anchor.href = "single.html?id=" + product.id; 

        const img = document.createElement("img");
        img.src = product.image;
        anchor.append(img);

        const title = document.createElement("h3");
        title.textContent = product.title;

        const Price = document.createElement("p");
        Price.textContent = "$" + product.price; 
        const btnGroup = document.createElement("p");
        btnGroup.classList.add("button-group");

        const wishlistBtn = document.createElement("button");
        wishlistBtn.textContent = "Add to Wishlist";

        const cartbtn = document.createElement("button"); 
        cartbtn.textContent = "Add to Cart";

        btnGroup.append(wishlistBtn, cartbtn);
        parent.append(anchor, title, Price, btnGroup);
        section.append(parent);
        
    });
}
