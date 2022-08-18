const setImageSource = document.getElementById("product");
const btnHolder = document.getElementById("buttonHolder");
const productName = document.getElementById("productName");
const pp = document.getElementById("pp");
const ProductPrice = document.getElementById("ProductPrice");
const cuppon = document.getElementById("cuppon");

btnHolder.addEventListener("click", function(e) {
    const btn = e.target;
    const id = btn.getAttribute("id");
    if (id === "orange") {
        setImageSource.setAttribute("src", "../images/orange.png");
        pp.style.color = "#ea580c";
        productName.style.color = "#ea580c";
        ProductPrice.innerHTML = "99";
        if (cuppon.value === "Borolok") {
            ProductPrice.innerText =
                parseFloat(ProductPrice.innerText) -
                calculateDiscount(parseFloat(ProductPrice.innerText)).toFixed(2);
        }
        updateValue(99);
    }
    if (id === "green") {
        setImageSource.setAttribute("src", "../images/green.png");
        pp.style.color = "#16a34a";
        productName.style.color = "#16a34a";
        ProductPrice.innerHTML = "129";
        if (cuppon.value === "Borolok") {
            ProductPrice.innerText =
                parseFloat(ProductPrice.innerText) -
                calculateDiscount(parseFloat(ProductPrice.innerText)).toFixed(2);
        }

        updateValue(129);
    }
    if (id === "blue") {
        setImageSource.setAttribute("src", "../images/blue.png");
        pp.style.color = "#2563eb";
        productName.style.color = "#2563eb";
        ProductPrice.innerHTML = "89";
        if (cuppon.value === "Borolok") {
            ProductPrice.innerText =
                parseFloat(ProductPrice.innerText) -
                calculateDiscount(parseFloat(ProductPrice.innerText)).toFixed(2);
        }

        updateValue(89);
    }
});