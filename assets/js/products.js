// array of all product in app =>
const allProducts = [
    { id: 1, src: "assets/images/products/apple.png", tag: "new", name: "سیب اُرگانیک", rate: 5, oldprice: 10000, offerprice: 5000, status: "available", count: 1 },
    { id: 2, src: "assets/images/products/apricot.png", tag: "sell", name: "زردآلو شیرین", rate: 4.6, oldprice: 30000, offerprice: 5000, status: "available", count: 1 },
    { id: 3, src: "assets/images/products/avocado.png", tag: "sell", name: "آووکادو تازه", rate: 4, oldprice: 50000, offerprice: 25000, status: "available", count: 1 },
    { id: 4, src: "assets/images/products/banana.png", tag: "sell", name: "موز اُرگانیک", rate: 3.75, oldprice: 48700, offerprice: 23500, status: "unavailable", count: 1 },
    { id: 5, src: "assets/images/products/broccoli.png", tag: "sell", name: "کلم بروکلی", rate: 4, oldprice: 75000, offerprice: 50000, status: "available", count: 1 },
    { id: 6, src: "assets/images/products/cantaloupe.png", tag: "new", name: "طالبی رسیده", rate: 4.2, oldprice: 15000, offerprice: 7500, status: "available", count: 1 },
    { id: 7, src: "assets/images/products/coconut.png", tag: "new", name: "نارگیل آبدار", rate: 5, oldprice: 31000, offerprice: 26000, status: "available", count: 1 },
    { id: 8, src: "assets/images/products/cucumber.png", tag: "sell", name: "خیار درختی", rate: 5, oldprice: 82000, offerprice: 68000, status: "unavailable", count: 1 },
    { id: 9, src: "assets/images/products/eggplant.png", tag: "sell", name: "بادمجان", rate: 2.8, oldprice: 24000, offerprice: 15000, status: "available", count: 1 },
    { id: 10, src: "assets/images/products/grape.png", tag: "sell", name: "انگور شانی", rate: 4.5, oldprice: 14000, offerprice: 13000, status: "available", count: 1 },
    { id: 11, src: "assets/images/products/lemon.png", tag: "sell", name: "لیموی تازه", rate: 5, oldprice: 71000, offerprice: 55000, status: "unavailable", count: 1 },
    { id: 12, src: "assets/images/products/mango.png", tag: "sell", name: "انبه رسیده", rate: 4.5, oldprice: 54000, offerprice: 36000, status: "available", count: 1 },
    { id: 13, src: "assets/images/products/mulberry.png", tag: "new", name: "توت سیاه", rate: 3.3, oldprice: 25000, offerprice: 18500, status: "available", count: 1 },
    { id: 14, src: "assets/images/products/orange.png", tag: "sell", name: "پرتقال آبدار", rate: 5, oldprice: 80000, offerprice: 49000, status: "available", count: 1 },
    { id: 15, src: "assets/images/products/peach.png", tag: "sell", name: "هلو رسیده", rate: 5, oldprice: 64000, offerprice: 58000, status: "available", count: 1 },
    { id: 16, src: "assets/images/products/pear.png", tag: "sell", name: "گلابی شیرین", rate: 4.7, oldprice: 19000, offerprice: 10000, status: "available", count: 1 },
    { id: 17, src: "assets/images/products/pineapple.png", tag: "sell", name: "آناناس تازه", rate: 4.9, oldprice: 48000, offerprice: 27000, status: "unavailable", count: 1 },
    { id: 18, src: "assets/images/products/strawberry.png", tag: "new", name: "توت فرنگی اُرگانیک", rate: 4, oldprice: 16000, offerprice: 12000, status: "available", count: 1 },
    { id: 19, src: "assets/images/products/tomato.png", tag: "new", name: "گوجه رسیده", rate: 4.5, oldprice: 38000, offerprice: 30000, status: "unavailable", count: 1 },
    { id: 20, src: "assets/images/products/watermelon.png", tag: "sell", name: "هندوانه شیرین", rate: 5, oldprice: 72000, offerprice: 59000, status: "available", count: 1 }
];

// app cart =>

let appCartSidebar = [];