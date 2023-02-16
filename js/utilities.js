// get product quantity and any input value get
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const value = parseInt(inputField.value);
    inputField.value = "";

    return value;
};

// get product price
function getProductPrice(priceId) {
    const priceField = document.getElementById(priceId);
    return parseInt(priceField.innerText);
};

// calculation product total price
function setProductPrice(totalPriceId, inputId, priceId) {
    // product quantity
    const quantity = getInputValue(inputId);
    if (isNaN(quantity) || quantity < 1) {
        alert("please type a number above '0'")
        return;
    }

    // product price
    const price = getProductPrice(priceId);

    const perProductPrice = quantity * price;

    setPrice(totalPriceId, perProductPrice);
};

// set product price
function setPrice(totalPriceId, perProductPrice) {
    const totalPriceField = document.getElementById(totalPriceId);
    totalPriceField.innerText = perProductPrice;
}

// set product total price
function getAllProductPrice() {
    const chocolatePrice = getProductPrice("chocolate");

    const rosePrice = getProductPrice("rose");

    const diaryPrice = getProductPrice("diary");

    const allProductPrice = chocolatePrice + rosePrice + diaryPrice;
    setPrice("total", allProductPrice);

    setPrice("all-total", allProductPrice);

    return allProductPrice;
};

//..................................
// apply promo code and set product total final price
function allCost() {
    const allProductPrice = getAllProductPrice();
    const promoCode = getInputValue("promo-code");

    let allTotal;
    if (promoCode === 101) {
        const savings = allProductPrice * 10 / 100;
        const allProductPriceAfterDiscount = allProductPrice - savings;
        allTotal = allProductPriceAfterDiscount;
    }
    else {
        allTotal = allProductPrice;
    }

    setPrice("all-total", allTotal);
};

//.....................................
// order place
function order() {
    const allTotal = getProductPrice("all-total");

    if (allTotal > 0) {
        document.getElementById("order-success").style.display = "block";
    }
    else {
        document.getElementById("order-success").style.display = "none";
    }
};