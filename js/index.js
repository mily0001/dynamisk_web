let catList = document.querySelector("#category_list_container");
fetch(`https://kea-alt-del.dk/t7/api/categories`)
  .then((response) => response.json())
  .then((data) => getCat(data));

function getCat(categories) {
  const markup = categories
    .map(
      (data) => `
        <a href="productlist.html?category=${data.category}"><li>${data.category}</li></a>
       `
    )
    .join("");
  console.log(markup);
  catList.innerHTML = markup;
}
