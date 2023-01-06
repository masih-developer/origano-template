const productDetailsContent = $.querySelector(".product-details > .container");
const productDetailsTitle = $.querySelector(".product-details__title");
const productDetailsImg = $.querySelector(".product-details__img");
const productDetailsRate = $.querySelector(".product-details__innerlist");
const productDetailsCurrentPrice = $.querySelector(".product-details-prices__currentprice > span");
const productDetailsOldPrice = $.querySelector(".product-details-prices__oldprice > span");
const productDetailsValueCount = $.querySelector(".product-details-product__number-btn");
const productDetailsMinusBtn = $.querySelector(".product-details-product__plus-btn");
const productDetailsPlusBtn = $.querySelector(".product-details-product__plus-btn");
const productDetailsBuyBtn = $.querySelector(".product-details__addtocart-btn");
// info product details 
const productDetailsItemTitle = $.querySelectorAll(".product-informations__item");

function loadProductDetails() {
    let getIdFromUrl = +new URLSearchParams(location.search).get("id");

    if (getIdFromUrl) {

        let findItemFromdb = allProducts.find(function (item) {
            return item.id === getIdFromUrl;
        });

        productDetailsTitle.innerHTML = findItemFromdb.name;
        productDetailsImg.src = findItemFromdb.src;
        productDetailsRate.style.width = calcOfStarsRate(findItemFromdb.rate) + "%";
        productDetailsCurrentPrice.innerHTML = findItemFromdb.offerprice;
        productDetailsOldPrice.innerHTML = findItemFromdb.oldprice;
        productDetailsValueCount.innerHTML = findItemFromdb.count;
        productDetailsBuyBtn.addEventListener("click", function () {
            addToCartNewProduct(findItemFromdb.id);
        });
    } else {
        productDetailsContent.innerHTML = "";
        productDetailsContent.insertAdjacentHTML("beforeend", '<div class="product-details-not-found"><i class="fa-solid fa-face-sad-sweat product-details-not-found__icon"></i><p class="product-details-not-found__caption">محصول مورد نظر شما پیدا نشد!</p><a href="index.html" class="product-details-not-found__btn">بازگشت به خانه</a></div>');
    }
}


productDetailsItemTitle.forEach(function (item) {
    item.addEventListener("click", function () {
        $.querySelector(".product-informations__item--active").classList.remove("product-informations__item--active");
        $.querySelector(".product-informations__content--active").classList.remove("product-informations__content--active");
        $.querySelector("#" + item.dataset.productInfo).classList.add("product-informations__content--active");
        item.classList.add("product-informations__item--active");
    })
})



window.addEventListener("load", function () {
    loadProductDetails();
});