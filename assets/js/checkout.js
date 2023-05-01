function moneyFormate(num) {
    const parts = num.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
}





window.onload = function() {
    const unitPrice = 1080
    let orderName = document.querySelector("#checkoutName")
    let orderNum = document.querySelector("#checkoutNumber")
    let subTotal = document.querySelector("#subtotal")
    let Total = document.querySelector("#total")
    let image = document.querySelector(".d-flex img")
    let totalAmount = Number(localStorage.getItem("orderNum")) * unitPrice
    
    image.src = localStorage.getItem("imageSource")
    orderName.innerHTML = localStorage.getItem("orderName") + "套票"
    orderNum.innerHTML = "x" + localStorage.getItem("orderNum")
    subTotal.innerHTML = "NT$" + moneyFormate(totalAmount)
    Total.innerHTML = "NT$" + moneyFormate(totalAmount)
}