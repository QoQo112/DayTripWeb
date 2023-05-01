const url = "https://padax.github.io/taipei-day-trip-resources/taipei-attractions-assignment.json"

function render() {
    fetch(url).then( function(response) {
        return response.json();
        }).then (function(data) {
            
            // Data fetch   
            let dataSet = data.result.results;
            let iD = localStorage.getItem('myCat')
            let title = dataSet[iD].stitle
            let MRTStation = dataSet[iD].info.split("‧")
            let content = dataSet[iD].xbody

            // Element getter
            let cardImage = document.querySelectorAll(".carousel-item img")
            let cardBigTitle = document.querySelector(".fw-bold.h1.mb-1")
            let cardText = document.querySelector(".col-md-4 p") 
            // let cardText = document.querySelector(".col-md-3 p")

            // Windows Render
            for (let j = 0; j < 3; j++) cardImage[j].src = dataSet[iD].file.toLowerCase().split("jpg")[j+1]+"jpg";
            cardBigTitle.innerHTML = title
            cardText.innerHTML = content

            // Data Storage for rendering
            localStorage.setItem("imageSource", cardImage[0].src)
            localStorage.setItem("orderName", cardBigTitle.innerHTML)
            
    })
}



window.onload = function() {
    render()

    // OrderNumber implementation
    let order = document.querySelector("#orderNum")

    let addBtn = document.querySelector("#button-addon2")
    let delBtn = document.querySelector("#button-addon1")
    let checkoutBtn = document.querySelector("#button-checkout")

    addBtn.onclick = function() {
        let num = Number(order.value)
        num += 1
        order.value = num
    }

    delBtn.onclick = function() {
        let num = Number(order.value)
        if (num >= 1) num -= 1
        else num = 0 
        order.value = num
    }

    checkoutBtn.onclick = function() {
        localStorage.setItem('orderNum', order.value)
        location.href="./checkout.html"        
    }
}

