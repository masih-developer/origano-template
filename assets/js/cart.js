const cartPaymentTable = $.querySelector(".cart-payment_table > tbody");
const cartPaymentAccounting = $.querySelector(".cart-payment__accounting__list");
// ordered product items in main of cart page =>


function orderedItems() {
    let localStorageItems = JSON.parse(localStorage.getItem("products"));
    if (!localStorageItems || localStorageItems.length === 0) {
        cartPaymentTable.innerHTML = "<tr><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>";
    } else {
        cartPaymentTable.innerHTML = "";
        localStorageItems.forEach(function (item) {
            cartPaymentTable.insertAdjacentHTML("beforeend", '<tr> <td> <img src="' + item.src + '" alt=""> </td> <td> <h6>' + item.name + '</h6> </td> <td> <h6> <p>' + SeparateNumberWithCommas(item.offerprice) + '</p> تومان </h6> </td> <td> <div class="cart-payment__product__input-wrapper"> <button class="app-btn cart-payment__product-plus-btn" onclick="plusProductItemInCartPage(' + item.id + ')"> <i class="fa-regular fa-plus"></i> </button> <input type="text" class="app-input cart-payment__product-count" value="' + item.count + '"> <button class="app-btn cart-payment__product-minues-btn" onclick="minusProductItemInCartPage(' + item.id + ')"> <i class="fa-regular fa-minus"></i> </button> </div> </td> <td> <div class="cart-payment__product-actions-wrapper"> <button class="app-btn cart-payment__product-action-btn cart-payment__seemore" onclick="showProductViewModal(event, ' + item.id + ')"> <i class="fa-regular fa-eye"></i> </button> <button class="app-btn cart-payment__product-action-btn cart-payment__remove-item" onclick="removeItemFromCartPage(' + item.id + ')"> <i class="fa-regular fa-xmark"></i> </button> </div> </td> </tr>');
        })
        calcAllUserBought(localStorageItems);
    }
}

function plusProductItemInCartPage(itemId) {
    plusNumCountCartProduct(itemId);
    orderedItems();
}

function minusProductItemInCartPage(itemId) {
    minusNumCountCartProduct(itemId);
    orderedItems();
}

function removeItemFromCartPage(itemId) {
    removeProductItemFromCartSidebar(itemId);
    orderedItems();
    calcAllUserBought(JSON.parse(localStorage.getItem("products")));
}

// remove product item from cartsideber and cart page =>
removeProductItemFromCartSidebar = function(itemId) {
    let findItem = appCartSidebar.find(function (item) {
        return item.id === itemId;
    });
    findItem.count = 1;
    appCartSidebar.splice(findItem, 1);
    addProductToCartSidebar(appCartSidebar);
    calcOfCountProductInCart();
    saveInLocalStorage(appCartSidebar);
    orderedItems();
}

// calc item price in cartsidebar =>
plusNumCountCartProduct = function(itemId) {
    let findItem = appCartSidebar.find(function (item) {
        return item.id === itemId;
    });
    findItem.count += 1;
    addProductToCartSidebar(appCartSidebar);
    calcAllPricesInCartsidebar();
    saveInLocalStorage(appCartSidebar);
    orderedItems();
}

minusNumCountCartProduct = function(itemId) {
    let findItem = appCartSidebar.find(function (item) {
        return item.id === itemId;
    });

    if (findItem.count > 1) {
        findItem.count -= 1;
        addProductToCartSidebar(appCartSidebar);
    }
    calcAllPricesInCartsidebar();
    saveInLocalStorage(appCartSidebar);
    orderedItems();
}


// calculation of all prices that user has bought =>
function calcAllUserBought(productsList) {
    let totalBlowPrice = 0;
    productsList.forEach(function (item) {
        totalBlowPrice += item.count * item.offerprice;
    })
    let allDeliveryFee = 20000;
    let allTexProducts = totalBlowPrice * 10 / 100;
    let allPricesProducts = totalBlowPrice + allDeliveryFee + allTexProducts;

    cartPaymentAccounting.innerHTML = "";
    cartPaymentAccounting.insertAdjacentHTML("beforeend", '<li class="cart-payment__accounting__item"> <h6>زیر کل</h6> <p> <span>' + SeparateNumberWithCommas(totalBlowPrice) + '</span> تومان </p> </li> <li class="cart-payment__accounting__item"> <h6>هزینه تحویل</h6> <p> <span>' + SeparateNumberWithCommas(allDeliveryFee) + '</span> تومان </p> </li> <li class="cart-payment__accounting__item"> <h6>تخفیف</h6> <p> <span>0</span> تومان </p> </li> <li class="cart-payment__accounting__item"> <h6> مالیات <span>10%</span> </h6> <p> <span>' + SeparateNumberWithCommas(allTexProducts) + '</span> تومان </p> </li> <li class="cart-payment__accounting__item"> <h6>کل</h6> <p> <span>' + SeparateNumberWithCommas(allPricesProducts) + '</span> تومان </p> </li>');
}


window.addEventListener("load", orderedItems);