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

        const img = document.createElement("img");
        img.src = product.image;

        const title = document.createElement("h3");
        title.textContent = product.title;

        const Price = document.createElement("h3");
        Price.textContent = "$" + product.Price;

        const btnGroup = document.createElement("div")
        btnGroup.classList.add("button-group");

        const wishlistBtn = document.createElement("button");
        wishlistBtn.textContent =" Add to wishlis";


        const  cartbtn= document.createElement("buttonone");
        cartbtn.textContent =" Add to Cart";


        btnGroup.append(wishlistBtn,cartbtn);
        parent.append(img);
        parent.append(title);
        parent.append(Price);
        parent.append(btnGroup);
        section.append(parent);





    });
}

