export default function PreLoadImg({ img}) {
    console.log(img);

    

//   const loadingStart = () => {
//     img.innerHTML = "";
//     const loading = document.createElement("div");
//     loading.innerText = "Loading....";
//     img.append(loading);
//   };



//   const preloadImage = (src) =>
//   new Promise((resolve) => {
//     img.addEventListener("load", () => {
//       resolve();
//     });

//     console.log(img)
//   });

// const loadingEnd = () => {
//   cats.innerHTML = "";
// };

// const fetchCat = async () => {
//   const res = await fetch(url);
//   const cats = await res.json();
//   const cat = cats[0];

//   await preloadImage(cat.url);
//   return cat;
// };

// const displayCatFromApi = () => {
//   loadingStart();

//   fetchCat().then((cat) => {
//     loadingEnd();
//     drawCat(cat);
//   });
// };

// const drawCat = (cat) => {
//   cats.innerHTML = "";
//   const img = document.createElement("img");
//   img.src = cat.url;
//   cats.append(img);
// };

// displayCatFromApi();

// cats.addEventListener("click", () => {
//   displayCatFromApi();
// });

}
