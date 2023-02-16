// chocolate handler
document.getElementById("kitkat-buy-btn").addEventListener("click", function () {

    // set product total price
    setProductPrice("chocolate", "kitkat-quantity", "kitkat-price");
    getAllProductPrice();
});

// rose handler
document.getElementById("rose-buy-btn").addEventListener("click", function () {

    setProductPrice("rose", "rose-quantity", "rose-price");
    getAllProductPrice();
});

// diary handler
document.getElementById("diary-buy-btn").addEventListener("click", function () {

    setProductPrice("diary", "diary-quantity", "diary-price");
    getAllProductPrice();
});