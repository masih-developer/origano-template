const cartPaymentAccounting = $.querySelector(".cart-payment__accounting__list");
const removeChoiceBoxBtn = $.querySelectorAll(".user-choices__delete-btn");
const paymentForm = $.querySelector(".payment-form");
const allBtnsDetails = $.querySelectorAll("[data-form-content]");
// Delivery address section
const deliverySectionContainer = $.querySelector("#location-address > .row");
const addNewAddressTitleInput = $.querySelector("#new-address .payment-form__input");
const addNewAddressCaptionInput = $.querySelector("#new-address .payment-form__textarea");
const addNewAddressSubmitBtn = $.querySelector("#new-address .payment-form__submit-btn");

function paymentCalc() {
    let localStorageItems = JSON.parse(localStorage.getItem("products"));
    if (!localStorageItems || localStorageItems.length === 0) {
        return false;
    } else {
        calcAllUserBought(localStorageItems);
    }
}

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

// add border color to active element =>
function addBorderBoxes(parent) {
    let parentElem = $.querySelectorAll("#" + parent + " .user-choices");
    parentElem.forEach(function (item) {
        item.addEventListener("click", function () {
            if ($.querySelector("#" + parent + " .user-choices--active")) {
                $.querySelector("#" + parent + " .user-choices--active").classList.remove("user-choices--active");
                item.classList.add("user-choices--active");
            }
        })
    })
}

// addBorderBoxes("location-address");
addBorderBoxes("delivery-parents");
// addBorderBoxes("phone-number");
// addBorderBoxes("payment-options");


function removeElemFromBoxes(thisElem) {
    let itemParentElem = thisElem.parentElement.parentElement.parentElement;
    itemParentElem.style.opacity = "0";
    itemParentElem.style.visibility = "hidden";
    setTimeout(function () {
        itemParentElem.remove();
    }, 300);
}



allBtnsDetails.forEach(function (item) {
    item.addEventListener("click", function () {
        appBgOveraly.classList.add("app-bg__overaly--active");
        paymentForm.classList.add("payment-form--active");
        let desiredItem = $.querySelector("#" + item.dataset.formContent);
        desiredItem.classList.add("payment-form-wrapper--active");
        bgOveralyRemove(paymentForm, "payment-form--active");
    });
});

addNewAddressSubmitBtn.addEventListener("click", function () {
    if (addNewAddressTitleInput.value.trim() !== "" && addNewAddressCaptionInput.value.trim() !== "") {
        deliverySectionContainer.insertAdjacentHTML("beforeend", '<div class="col-4"> <div class="user-choices" onclick="addActivateBorder(this)"> <h5 class="user-choices__title">' + addNewAddressTitleInput.value + '</h5> <p class="user-choices__caption">' + addNewAddressCaptionInput.value + '</p> <ul class="user-choices__actions"> <li class="user-choices__actions__item user-choices__edit-btn"> <i class="fa-regular fa-pencil"></i> </li> <li class="user-choices__actions__item user-choices__delete-btn" onclick="remveItemsFromParents(this)"> <i class="fa-regular fa-xmark"></i> </li> </ul> </div> </div>')
        addNewAddressTitleInput.value = "";
        addNewAddressCaptionInput.value = "";
    }
})

function remveItemsFromParents(desiredItem) {
    removeElemFromBoxes(desiredItem);
}

function addActivateBorder(thisParent) {
    addBorderBoxes(thisParent.parentElement.parentElement.parentElement.id);
}

window.addEventListener("load", paymentCalc);