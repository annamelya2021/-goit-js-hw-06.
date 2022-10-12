// const liRef = document.querySelectorAll(".item");
const liRef = document.querySelectorAll("li.item");
console.log("Number of categories: ", liRef.length);
for (const category of liRef) {
  //   console.log(category);
  const h2 = category.querySelector("h2");
  //   console.log(h2.textContent);
  console.log("Category: ", h2.textContent);
  const li = category.querySelectorAll("li");
  //   console.log(li);
  console.log("Elements:", li.length);
}

// solution #2
// liRef.forEach((e) => {
//   //   console.log(e);
//   const h2 = e.querySelector("h2");
//   //   console.log(h2.textContent);
//   console.log("Category: ", h2.textContent);
//   const li = e.querySelectorAll("li");
//   //   console.log(li);
//   console.log("Elements:", li.length);
// });
