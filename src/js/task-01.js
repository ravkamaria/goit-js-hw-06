const list = document.querySelector("#categories");
console.log("Number of categories: ", list.children.length);

const listCategories = document.querySelectorAll(".item");
listCategories.forEach(({ firstElementChild, lastElementChild }) => {
  console.log(`Category: ${firstElementChild.textContent}
    Elements: ${lastElementChild.children.length}`);
});
