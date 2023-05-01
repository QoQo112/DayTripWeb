const url = "https://padax.github.io/taipei-day-trip-resources/taipei-attractions-assignment.json"
const str = `<li>
<div class="popular-card">

    <figure class="card-img">
    <img src="" alt="San miguel, italy" loading="lazy" id="card-img01">
    </figure>

    <div class="card-content">

    <div class="card-rating">
        <ion-icon name="star"></ion-icon>
        <ion-icon name="star"></ion-icon>
        <ion-icon name="star"></ion-icon>
        <ion-icon name="star"></ion-icon>
        <ion-icon name="star"></ion-icon>
    </div>

    <p class="card-subtitle">
        <a href="#" id="card_title01"></a>
    </p>

    <h3 class="h3 card-title">
        <a href="./product.html"></a>
    </h3>

    <p class="card-text">
        享譽全球的溫泉勝地，舒適的湯池和療癒的泉質，令人身心放鬆。
    </p>

    </div>

</div>
</li>
`
const cardNum = 3;
var startPage = 3;
var totalLength;
var isLoading = false

/**
 * header sticky & go to top
 */

// const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

    if (window.scrollY >= 200) {
        // header.classList.add("active");
        goTopBtn.classList.add("active");
    } else {
        // header.classList.remove("active");
        goTopBtn.classList.remove("active");
    }

});

function render() {
    fetch(url).then( function(response) {
        return response.json();
        }).then (function(data) {
            
            //variables declaration   
            let dataSet = data.result.results;
            totalLength = dataSet.length; 
            let pic = [];
            let title = [];
            let mrtStation = []; 

            //fetching data 
            for (let i = 0; i < dataSet.length; i++) {
                pic.push(dataSet[i].file.toLowerCase().split("jpg")[0]+"jpg");
                title.push(dataSet[i].stitle);
                mrtStation.push(dataSet[i].MRT)
            }

            let cardImage = document.querySelectorAll(".card-img img")
            let cardSubtitle = document.querySelectorAll(".card-subtitle a")
            let cardBigTitle = document.querySelectorAll(".h3.card-title a")
            
            for (let i = 0; i < cardNum; i++) {
                cardSubtitle[i].innerHTML = mrtStation[i] + "捷運站";
                cardBigTitle[i].innerHTML = title[i];
                cardImage[i].src = pic[i];
            }
            
    })
}

function loadMore() {
    fetch(url).then(function(response) {
        return response.json();
        }).then (function(data) {
            
            let dataSet = data.result.results;
            let pic = [];
            let title = [];
            let mrtStation = []; 
            for (let i = 0; i < dataSet.length; i++) {
                pic.push(dataSet[i].file.toLowerCase().split("jpg")[0]+"jpg");
                title.push(dataSet[i].stitle);
                mrtStation.push(dataSet[i].MRT)
            }
            
            let listItem = document.querySelector(".popular-list")
            
            if ( (startPage + cardNum) < totalLength) {
                for (let i = startPage; i < (startPage + cardNum); i++) {
                    listItem.innerHTML += str;
                    let cardImage = document.querySelectorAll(".card-img img")
                    let cardSubtitle = document.querySelectorAll(".card-subtitle a")
                    let cardBigTitle = document.querySelectorAll(".h3.card-title a")  
                    cardSubtitle[i].innerHTML = mrtStation[i] + "捷運站";
                    cardBigTitle[i].innerHTML = title[i];
                    cardImage[i].src = pic[i];
                }
            } else {
                for (let i = startPage; i < totalLength; i++) {
                    listItem.innerHTML += str;
                    let cardImage = document.querySelectorAll(".card-img img")
                    let cardSubtitle = document.querySelectorAll(".card-subtitle a")
                    let cardBigTitle = document.querySelectorAll(".h3.card-title a")  
                    cardSubtitle[i].innerHTML = mrtStation[i] + "捷運站";
                    cardBigTitle[i].innerHTML = title[i];
                    cardImage[i].src = pic[i];
                }
            }
            startPage += cardNum;
    })
}

render()



//Scroll Event implementation
window.onscroll = function () {
    if(startPage >= totalLength) {
        return 
    }

    
    let viewPort = document.querySelector(".popular-list")
    var listHeight = viewPort.offsetHeight
    var listTop = viewPort.offsetTop
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop

    var windowHeight = document.documentElement.clientHeight

    if (isLoading) return
    if ((listHeight + listTop) - Math.round(windowHeight + scrollTop) < 50) {
        // console.log("到底了")
        isLoading = true

        // Render another page
        setTimeout(function () {
            loadMore()
            isLoading = false
        }, 500)
    }
}


// popular Selection

let popularSelection = document.querySelectorAll(".navbar_list div button"); 
for (let i = 0; i < 3; i++) {
    popularSelection[i].addEventListener("click", function(){
        popularSelection[0].parentNode.parentNode.className = ""
        popularSelection[1].parentNode.parentNode.className = ""
        popularSelection[2].parentNode.parentNode.className = ""
        this.parentNode.parentNode.className = "sortActive"

        
        
        if (this.innerHTML === "北捷套票") {
            let popularCard = document.querySelector(".popular-list")
            popularCard.style.display = "none"
        } else {
            let popularCard = document.querySelector(".popular-list")
            popularCard.style.display = "flex"
        }
        // if (! this.parentNode.parentNode) {
        //     console.log("No match")
        // }
    })
}