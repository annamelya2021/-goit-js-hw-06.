const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const galleryRef = document.querySelector(".gallery");
const markup = images
  .map(
    ({ url, alt }) => `<li class="item" >
  <img class="img" src = ${url} alt = ${alt}></li>`
  )
  .join("");
console.log(markup);

galleryRef.insertAdjacentHTML("afterbegin", markup);

galleryRef.style.display = "flex";
galleryRef.style.listStyle = "none";
galleryRef.style.gap = "30px";
galleryRef.style.padding = "0";

const liEl = document.querySelectorAll(".item");
liEl.forEach((el) => {
  el.style.maxWidth = "100%";
});

const imgEl = document.querySelectorAll(".img");
imgEl.forEach((el) => {
  el.style.width = "100%";
  el.style.height = "100%";
});
