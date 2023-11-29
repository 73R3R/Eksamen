const pathName = window.location.pathname;
const pageName = pathName.split("/").pop();

if(pageName === "index.html"){
    document.querySelector(".home").classList.add("navbar");
}

if(pageName === "products.html"){
    document.querySelector(".products").classList.add("navbar");
}

if(pageName === "about.html"){
    document.querySelector(".about").classList.add("navbar");
}