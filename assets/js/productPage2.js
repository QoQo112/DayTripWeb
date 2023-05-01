const cardNum = 8; 

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
                cardSubtitle[i].innerHTML = title[i + cardNum * 2];
                cardImage[i].src = pic[i + cardNum * 2];

                // store ID in localStorage for rendering detail.html
                cardSubtitle[i].addEventListener("click", function(){
                    localStorage.setItem('myCat', i + cardNum * 2)
                })
            }
            
    })
}

render()
