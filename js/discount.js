// funcion for calculate disconunt
function calculateDiscount(mainAmount) {
    return (30 / 100) * mainAmount;
}

const productPriceFromDOM = document.getElementById("ProductPrice");

function updateValue(shoePrice) {
    const cuppon = document.getElementById("cuppon");

    cuppon.addEventListener("keyup", function(e) {
        if (e.target.value === "Borolok") {
            const priceAfterDiscount = shoePrice - calculateDiscount(shoePrice);
            ProductPrice.innerText = Math.round(priceAfterDiscount);
        } else {
            productPriceFromDOM.innerText = Math.round(shoePrice);

            console.log(Math.round(shoePrice));
        }
    });
}

updateValue(parseFloat(productPriceFromDOM.innerText)); //Borolok

for (i = 0; i <= 100; i++) {
    console.log("PLease Ekbar bolo " + i);
}