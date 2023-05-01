function moneyFormate(num) {
    const parts = num.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
}



window.onload = function() {


    const unitPrice = 1080

    let cardImage = document.querySelector("#cartImage")
    let cartName = document.querySelector("#cartName")
    
    cardImage.src = localStorage.getItem("imageSource")
    cartName.innerHTML = localStorage.getItem("orderName") + "旅遊套票"

    // OrderNumber implementation
    let order = document.querySelector("#cartNum")
    let subTotal = document.querySelector("#subTotal")
    let orderSubtotal = document.querySelector("#orderSubtotal")
    let orderTotal = document.querySelector("#orderTotal")
    
    let addBtn = document.querySelector("#button-addon2")
    let delBtn = document.querySelector("#button-addon1")
    let checkoutBtn = document.querySelector("#button-checkout")

    addBtn.onclick = function() {
        let num = Number(order.value)
        num += 1
        order.value = num
        let totalAmount = Number(order.value) * unitPrice
        subTotal.innerHTML = "NT$" + moneyFormate(totalAmount)
        orderSubtotal.innerHTML = "NT$" + moneyFormate(totalAmount)
        orderTotal.innerHTML = "NT$" + moneyFormate(totalAmount)
        
    }

    delBtn.onclick = function() {
        let num = Number(order.value)
        if (num >= 1) num -= 1
        else num = 0 
        order.value = num
        let totalAmount = Number(order.value) * unitPrice
        subTotal.innerHTML = "NT$" + moneyFormate(totalAmount)
    }

    
    checkoutBtn.onclick = function() {
        localStorage.setItem('orderNum', order.value)
        location.href="./checkout.html"        
    }

    
}