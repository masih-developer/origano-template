// assigning document value to dollarsign
const $ = document;
// header info section
const headerInfoListWrapper = $.querySelectorAll(".header-info__list-wrapper");
const headerInfoListSubject = $.querySelectorAll(".header-info__list__subject");
// header account section
const headerAccountWrapper = $.querySelector(".header-account");
const headerSecoundSearchIcon = $.querySelector(".header-account-secound__search-btn");
const headerSearchbarWrapper = $.querySelector(".header__searchbar-wrapper");
const navbarFormSearch = $.querySelector(".header__searchbar");
// header cart sidebar section
const headerCartSidebar = $.querySelector(".cart-sidebar");
const activeSidebar = "cart-sidebar--active";
const cartSidebarOpenBtn = $.querySelector(".header__user-basket-btn");
const cartSidebarCloseBtn = $.querySelector(".cart-sidebar__close-btn");
const appCartSidebarProductWrapper = $.querySelector(".cart-sidebar__list");
const countOfProductInCartSidebar = $.querySelectorAll("[data-count-basket]");
const cartSidebarTitleValue = $.querySelector(".cart-sidebar__title > span");
const cartSidebarTotalPricesValue = $.querySelector(".cart-payment__total__prices > span");
// header navbar sidebar section
const navbarSidebar = $.querySelector(".navbar-sidebar");
const navbarSidebarActive = "navbar-sidebar--active";
const navSidebarLinks = $.querySelectorAll(".navbar-sidebar__link");
const navbarSidebarBtn = $.querySelector(".navbar-sidebar-header__btn");
const navbarBottomCategoryBtn = $.querySelector(".navbar-bottom__btn--category-btn");
const navbarBottomCartBtn = $.querySelector(".navbar-bottom__btn--cart-btn");
// app page loader
const appPageLoader = $.querySelector(".page-loader");
// app bg overlay dom element
const appBgOveraly = $.querySelector(".app-bg__overaly");
const activeBgOveraly = "app-bg__overaly--active";
// cart alert dom element
const addToCartAlert = $.querySelector(".add-to-cart__alert");
const addToCartAlertListWrapper = $.querySelector(".add-to-cart__alert-list-wrapper");
const addToCartAlertText = $.querySelector(".add-to-cart__alert__text > span");
// product view modal element
const appViewProductModal = $.querySelector(".product-view-modal");
const viewProductModalTitle = $.querySelector(".product-view__title");
const viewProductModalRankPoint = $.querySelector(".product-view__rate__point > span");
const viewProductModalRateStar = $.querySelector(".product-view__innerlist");
const viewProductModalCurrentPrice = $.querySelector(".product-view-prices__currentprice > span");
const viewProductModalOldPrice = $.querySelector(".product-view-prices__oldprice > span");
const viewProductModalImg = $.querySelector(".product-view__img");
const viewProductModalNumBtn = $.querySelector(".product-view-product__number-btn");
const viewProductModalBuyBtn = $.querySelector(".product-view__addtocart-btn");
const viewProductModalCloseBtn = $.querySelector(".product-view-modal__close-btn");
const appViewProductModalActivation = "product-view-modal--active";
// go to up page sticky button
const goToUpPgageStickyBtn = $.querySelector(".app__gotoupbtn");

// slide toggle element app =>
function slideToggleElem(domElem, toggledElem) {
    domElem.forEach(function (item) {
        item.addEventListener("click", function () {
            let arrayListItems = Array.from(domElem);
            let findActiveItem = arrayListItems.find(function (item) {
                return item.parentElement.classList.contains(toggledElem);
            });

            if (findActiveItem) {
                findActiveItem.parentElement.classList.remove(toggledElem);
                if (findActiveItem != item) {
                    item.parentElement.classList.add(toggledElem);
                } else {
                    item.parentElement.classList.remove(toggledElem);
                }
            } else {
                item.parentElement.classList.add(toggledElem);
            }
        });
    });
}

slideToggleElem(navSidebarLinks, "navbar-sidebar__item--show");
slideToggleElem(headerInfoListSubject, "header-info__list-wrapper--active");

function headerFixedTopHandler() {
    if (this.window.scrollY > headerAccountWrapper.offsetTop) {
        headerAccountWrapper.classList.add("header-account__scroll--active");
        navbarFormSearch.classList.add("header__searchbar--active");
    } else {
        headerAccountWrapper.classList.remove("header-account__scroll--active");
        navbarFormSearch.classList.remove("header__searchbar--active");
    }
}

// remove background overaly functions
function openSidebarsFunction(openBtn, Elem1, class1) {
    openBtn.addEventListener("click", function () {
        openAppSidebares(Elem1, class1);
    });
}

function closeSidebarsFunction(closeBtn, Elem1, class1) {
    closeBtn.addEventListener("click", function () {
        closeAppSidebares(Elem1, class1);
    });
}

function openAppSidebares(elem1, class1) {
    elem1.classList.add(class1);
    appBgOveraly.classList.add("app-bg__overaly--active");
    $.body.style.overflow = "hidden";
}

function closeAppSidebares(elem1, class1) {
    elem1.classList.remove(class1);
    appBgOveraly.classList.remove("app-bg__overaly--active");
    $.body.style.overflow = "auto";
}

openSidebarsFunction(cartSidebarOpenBtn, headerCartSidebar, activeSidebar);
closeSidebarsFunction(cartSidebarCloseBtn, headerCartSidebar, activeSidebar);

openSidebarsFunction(navbarBottomCartBtn, headerCartSidebar, activeSidebar);
closeSidebarsFunction(cartSidebarCloseBtn, headerCartSidebar, activeSidebar);

openSidebarsFunction(navbarBottomCategoryBtn, navbarSidebar, navbarSidebarActive);
closeSidebarsFunction(navbarSidebarBtn, navbarSidebar, navbarSidebarActive);



function bgOveralyRemove(elem1, class1) {
    $.addEventListener("click", function (event) {
        if (event.target.classList.contains("app-bg__overaly")) {
            closeAppSidebares(elem1, class1);
        }
    });
}

bgOveralyRemove(headerCartSidebar, activeSidebar);
bgOveralyRemove(headerCartSidebar, activeSidebar);
bgOveralyRemove(navbarSidebar, navbarSidebarActive);
bgOveralyRemove(appViewProductModal, appViewProductModalActivation);


headerSecoundSearchIcon.addEventListener("click", function () {
    headerSearchbarWrapper.classList.toggle("header__searchbar-wrapper--show");
});

// show and hide go to up button=>
function goTOUpBtnPage() {
    if (window.scrollY > window.innerHeight) {
        goToUpPgageStickyBtn.classList.add("app__gotoupbtn--active");
    } else {
        goToUpPgageStickyBtn.classList.remove("app__gotoupbtn--active");
    }
}

goToUpPgageStickyBtn.addEventListener("click", function () {
    window.scrollTo(0, 0);
})

// when window scrolled code =>
window.addEventListener("scroll", function () {
    headerFixedTopHandler();
    goTOUpBtnPage();
});

// separate prices numbers with comma =>
function SeparateNumberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


// find background color of tag item from tag value =>
function setbgColorTagItem(tagItem) {
    if (tagItem === "new") {
        return "<p class=\"product-card__tag__text\">جدید</p>";
    } else if (tagItem === "sell") {
        return "<p class=\"product-card__tag__text\" style=\"background-color: var(--orange-color)\">فروش</p>";
    }
}

// calc of star rate =>
function calcOfStarsRate(itemRate) {
    let totalStars = 5;
    let precentageItemRate = (itemRate / totalStars) * 100;
    let starprecentageRounded = ((precentageItemRate / 10) * 10).toFixed(2);
    return starprecentageRounded;
}

// calculation of price discounts =>
function calcOfPriceDiscount(newprice, oldprice) {
    return 100 - (Math.round((newprice / oldprice) * 100));

}

function createNewProduct(productDb, wrapper) {
    productDb.forEach(function (item) {
        wrapper.insertAdjacentHTML("beforeend", '<div class="product-card"><div class= "product-card__tags">' + setbgColorTagItem(item.tag) + '<button class="app-btn product-card__like-btn"><i class="fa-regular fa-heart"></i></button></div ><div class="product-card__img-wrapper"><a href="product-details.html?id=' + item.id + '" class="product-card__img__link"><img src="' + item.src + '" alt="" class="product-card__img"></a><div class="product-card__review"><a href="#" class="app-btn product-card__review-btn product-card__review__video-btn"><i class="fa-regular fa-play"></i></a><a href="javascript:void(0)" class="app-btn product-card__review-btn product-card__review__overview-btn" onclick="showProductViewModal(event, ' + item.id + ')"><i class="fa-regular fa-eye"></i></a><a href="#" class="app-btn product-card__review-btn product-card__review__compare-btn"><i class="fa-regular fa-arrow-right-arrow-left"></i></a></div></div><div class="product-card__content"><h4 class="product-card__title">' + item.name + '</h4><div class="product-card__rate-wrapper"><div class="product-card__rate__outerlist"><div class="product-card__rate__innerlist" style="width: ' + calcOfStarsRate(item.rate) + '%"></div></div><a href="#" class="product-card__rate__link__text">(' + item.rate + ')</a></div><div class="product-card__buying-wrapper"><div class="product-card__prices-wrapper"><p class="product-card__offerprice"><span>' + SeparateNumberWithCommas(item.offerprice) + '</span>تومان</p><p class="product-card__oldprice"><del>' + SeparateNumberWithCommas(item.oldprice) + '</del>تومان</p><p class="product-card__discountprice">' + calcOfPriceDiscount(item.offerprice, item.oldprice) + '%</p></div><button class="app-btn product-card__cart-btn" id="' + item.id + '" onclick="addToCartNewProduct(' + item.id + ')">افزودن به سبد خرید</button></div></div></div>');
    });
}

// add new product to cartsidebar =>
function addProductToCartSidebar(productList) {
    appCartSidebarProductWrapper.innerHTML = "";
    productList.forEach(function (item) {
        appCartSidebarProductWrapper.insertAdjacentHTML("beforeend", '<li class="cart-sidebar__item"><button class="app-btn cart-sidebar__item__close-btn" onclick="removeProductItemFromCartSidebar(' + item.id + ')"><i class="fa-regular fa-xmark"></i></button><div class="cart-sidebar__item-wrapper"><img src="' + item.src + '" alt=""class="cart-sidebar__item__img"><div class="cart-sidebar-info"><h4 class="cart-sidebar-info__title">' + item.name + '</h4><p class="cart-sidebar-info__price">قیمت - <span>' + SeparateNumberWithCommas(item.offerprice) + '</span> تومان</p><div class="cart-sidebar-details"><div class="cart-sidebar-count"><button class="app-btn cart-sidebar-count__minus-btn" onclick="minusNumCountCartProduct(' + item.id + ')"><i class="fa-regular fa-minus"></i></button><span class="cart-sidebar__text">' + item.count + '</span><button class="app-btn cart-sidebar-count__plus-btn" onclick="plusNumCountCartProduct(' + item.id + ')" ><i class="fa-regular fa-plus"></i></button></div><div class="cart-sidebar-details__price"><span>' + SeparateNumberWithCommas((item.count * item.offerprice)) + '</span> تومان</div></div></div></div></li>');
    });
    calcAllPricesInCartsidebar();
}

// remove product item from cartsideber =>
function removeProductItemFromCartSidebar(itemId) {
    let findItem = appCartSidebar.find(function (item) {
        return item.id === itemId;
    });
    findItem.count = 1;
    appCartSidebar.splice(findItem, 1);
    addProductToCartSidebar(appCartSidebar);
    calcOfCountProductInCart();
    saveInLocalStorage(appCartSidebar);
}

// calc of count of product in cartsidebar =>
function calcOfCountProductInCart() {
    countOfProductInCartSidebar.forEach(function (each) {
        each.dataset.countBasket = appCartSidebar.length;
        cartSidebarTitleValue.innerHTML = appCartSidebar.length;
    })
}

// create add product alert
function addProductToCartAlert(name) {

    let newAlertItem = $.createElement("li");
    newAlertItem.className = "add-to-cart__alert__item";
    newAlertItem.insertAdjacentHTML("beforeend", '<div class="add-to-cart__alert__check-wrapper"><i class="fa-solid fa-check"></i></div><p class="add-to-cart__alert__text">محصول <span>' + name + '</span> به سبد خرید اضافه شد.</p>');

    addToCartAlertListWrapper.append(newAlertItem);

    setTimeout(function () {
        newAlertItem.classList.add("add-to-cart__alert__item--show");
    }, 1);

    setTimeout(function () {
        newAlertItem.style.visibility = "hidden";
        newAlertItem.style.opacity = "0";
        setTimeout(function () {
            newAlertItem.remove();
        }, 300);
    }, 2100);

}

// add new product in cartsidebar =>
function addToCartNewProduct(btnId) {
    let findProductItem = allProducts.find(function (item) {
        return item.id === btnId;
    });


    let isExistProduct = appCartSidebar.some(function (item) {
        return item.id === btnId;
    });

    if (!isExistProduct) {
        appCartSidebar.push(findProductItem);
        saveInLocalStorage(appCartSidebar);
        addProductToCartSidebar(appCartSidebar);
        calcOfCountProductInCart();
        addProductToCartAlert(findProductItem.name);
    }
}

// save products in localstorage=>
function saveInLocalStorage(productList) {
    localStorage.setItem("products", JSON.stringify(productList));
}

// return saved products in localstorage when window is loaded
function returnSeavedProductsInDom() {
    let localStorageValueItem = JSON.parse(localStorage.getItem("products"));
    if (localStorageValueItem) {
        appCartSidebar = localStorageValueItem;
        addProductToCartSidebar(appCartSidebar);
        calcOfCountProductInCart();
    } else {
        appCartSidebar = [];
    }
}

// calc item price in cartsidebar =>
function plusNumCountCartProduct(itemId) {
    let findItem = appCartSidebar.find(function (item) {
        return item.id === itemId;
    });
    findItem.count += 1;
    addProductToCartSidebar(appCartSidebar);
    calcAllPricesInCartsidebar();
    saveInLocalStorage(appCartSidebar);
}

function minusNumCountCartProduct(itemId) {
    let findItem = appCartSidebar.find(function (item) {
        return item.id === itemId;
    });

    if (findItem.count > 1) {
        findItem.count -= 1;
        addProductToCartSidebar(appCartSidebar);
    }
    calcAllPricesInCartsidebar();
    saveInLocalStorage(appCartSidebar);
}

// clac of all prices products in cartsidebar =>
function calcAllPricesInCartsidebar() {
    let totalPricesInCartsidebar = 0;
    appCartSidebar.map(function (product) {
        totalPricesInCartsidebar += product.count * product.offerprice;
    });
    cartSidebarTotalPricesValue.innerHTML = SeparateNumberWithCommas(totalPricesInCartsidebar);
}

// show product view modal =>
function showProductViewModal(event, itemId) {
    let findItem = allProducts.find(function (item) {
        return item.id === itemId;
    });

    viewProductModalTitle.innerHTML = findItem.name;
    viewProductModalRateStar.style.width = calcOfStarsRate(findItem.rate) + "%";
    viewProductModalRankPoint.innerHTML = findItem.rate;
    viewProductModalCurrentPrice.innerHTML = findItem.offerprice;
    viewProductModalOldPrice.innerHTML = findItem.oldprice;
    viewProductModalImg.src = findItem.src;
    viewProductModalNumBtn.innerHTML = findItem.count;
    viewProductModalBuyBtn.id = itemId;

    appViewProductModal.classList.add(appViewProductModalActivation);
    appBgOveraly.classList.add("app-bg__overaly--active");

}

viewProductModalBuyBtn.addEventListener("click", function () {
    addToCartNewProduct(+this.id);
});

viewProductModalCloseBtn.addEventListener("click", function () {
    appViewProductModal.classList.remove(appViewProductModalActivation);
    appBgOveraly.classList.remove("app-bg__overaly--active");
})

function removePageLoader() {
    appPageLoader.classList.remove("page-loader--active");
}

window.addEventListener("load", function () {
    returnSeavedProductsInDom();
    // this.setTimeout(function () {
    //     removePageLoader();
    // }, 1000);
});