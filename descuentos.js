
function calcularPrecioConDescuento(precio, descuento, cupon) {
    const porcentajePrecioConDescuento = 100 - (descuento+cupon);
    const precioConDescuento = (precio*porcentajePrecioConDescuento)/100;

    return precioConDescuento
}

// incorporando js a HTML

function onClickButtonPriceDiscount() {
     const coupons = ["blackfriday", "enerocontoda", "taller30",];

    let couponValueDiscount;

    const input1 = document.getElementById("inputPrice");
    const input2 = document.getElementById("inputDiscount");
    const inputCoupon = document.getElementById("inputCoupon");

    const price = parseInt(input1.value);
    const discount = parseInt(input2.value);
    const couponValue = inputCoupon.value;

    switch (couponValue) {
        case coupons[0]:
            couponValueDiscount = 15;
            break;
        case coupons[1]:
            couponValueDiscount = 18;
            break;
        case coupons[2]:
            couponValueDiscount = 30;
            break;
        default:
            couponValueDiscount = 0;
            break;
    }
    const precioConDescuento = calcularPrecioConDescuento(price, discount, couponValueDiscount=0);

    const resultP = document.getElementById("resultP");
    resultP.innerText = `El precio con descuento es de: $${precioConDescuento}.`
}

