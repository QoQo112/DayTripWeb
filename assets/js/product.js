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
        <a href="#"></a>
    </h3>

    <p class="card-text">
        享譽全球的溫泉勝地，舒適的湯池和療癒的泉質，令人身心放鬆。
    </p>

    </div>

</div>
</li>
`
const cardNum = 8;


/**
 * header sticky & go to top
 */
function render() {
    fetch("https://padax.github.io/taipei-day-trip-resources/taipei-attractions-assignment.json").then( function(response) {
        return response.json();
        }).then (function(data) {
            
            //variables declaration   
            let dataSet = data.result.results;
            totalLength = dataSet.length; 
            let pic = [];
            let title = [];

            //fetching data 
            for (let i = 0; i < dataSet.length; i++) {
                pic.push(dataSet[i].file.toLowerCase().split("jpg")[1]+"jpg");
                title.push(dataSet[i].stitle);
            }

            let cardImage = document.querySelectorAll(".card-img-top.rounded-0")
            let cardSubtitle = document.querySelectorAll(".mb-0.mt-3 a")
            for (let i = 0; i < cardNum; i++) {
                cardImage[i].src = pic[i];
                cardSubtitle[i].innerHTML = title[i];

                // store number in localStorage for rendering detail.html
                cardSubtitle[i].addEventListener("click", function(){
                    localStorage.setItem('myCat', i)
                })
                // 
            }
            
    })
}

render()



