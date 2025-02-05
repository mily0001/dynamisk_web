const category = new URLSearchParams(window.location.search).get("category");

let productCard = document.querySelector("#product_list_container");
fetch(`https://kea-alt-del.dk/t7/api/products?limit=32&category=${category}`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  const markup = products
    .map(
      (data) =>
        `<a href="product.html?id=${data.id}" class="productItem">
      <article class="smallProduct">
    <img src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp" alt="product image" />
    <h3>${data.productdisplayname}</h3>
    <p class="subtle">${data.articletype} | ${data.brandname}</p>
    <p class="price ${data.soldout && "dashed"} ${data.discount && "dashed"}">DKK <span>${data.price}</span>,-</p>
        <p class="discountPrice ${data.discount && "discountActive"}">NOW DKK ${data.discount && Math.floor(data.price * (data.discount / 100))},-</p>
      <div class="soldOutLabel ${data.soldout && "soldOut"}">
            <p><span class="bold">UDSOLGT</span></p>
          </div>
    <div class="saleLabel ${data.discount && "onSale"}">
<p><span class="bold">-${data.discount}%</span></p>
    </div>
    <p><span class="readBottom">Read More</span></p>
  </article> </a>`
    )
    .join("");
  console.log(markup);
  productCard.innerHTML = markup;
}
