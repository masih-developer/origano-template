// popular product section element
const popularProductWrapper = $.querySelector(".popular-product__product-wrapper");
// discount timer details dom element
const discountTimerTitle = $.querySelectorAll(".discount-timer__time__title");
const discountTimerDay = $.querySelector(".discount-timer__day");
const discountTimerHour = $.querySelector(".discount-timer__hour");
const discountTimerMinute = $.querySelector(".discount-timer__minute");
const discountTimerSecound = $.querySelector(".discount-timer__secound");

// filter function on desired feature =>
let topRateProduct = allProducts.filter(function (item) {
    return item.rate >= 4.5;
});

topRateProduct = topRateProduct.sort(function (a, b) {
    return +b.rate - +a.rate;
})

createNewProduct(topRateProduct, popularProductWrapper);

// product discount timer=>
function timerDiscountProduct() {
    let countdownDate = new Date("Dec 30, 2024 20:10:00").getTime();

    let intervalTimeFunc = setInterval(function () {

        let currentDate = new Date().getTime();
        let resultDate = countdownDate - currentDate;

        let timerDayValue = Math.floor(resultDate / (24 * 60 * 60 * 1000));
        let timerHourValue = Math.floor(resultDate % (24 * 60 * 60 * 1000) / (60 * 60 * 1000));
        let timerMinuteValue = Math.floor(resultDate % (60 * 60 * 1000) / (60 * 1000));
        let timerSecoundValue = Math.floor(resultDate % (60 * 1000) / (1000));

        discountTimerDay.innerHTML = timerDayValue;
        discountTimerHour.innerHTML = timerHourValue;
        discountTimerMinute.innerHTML = timerMinuteValue;
        discountTimerSecound.innerHTML = timerSecoundValue;

        discountTimerTitle.forEach(function (item) {
            if (item.innerHTML.length === 1) {
                item.innerHTML = "0" + item.innerHTML;
            }
        });

        if (resultDate < 0) {
            clearInterval(intervalTimeFunc);
            discountTimerDay.innerHTML = "اتمام";
            discountTimerHour.innerHTML = "اتمام";
            discountTimerMinute.innerHTML = "اتمام";
            discountTimerSecound.innerHTML = "اتمام";
        }

    }, 1000);
}

window.addEventListener("load", function () {
    timerDiscountProduct();
});