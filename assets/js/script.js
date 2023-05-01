'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
    for (let i = 0; i < elem.length; i++) {
        elem[i].addEventListener("click", function () {
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
        });
    }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

    if (window.scrollY >= 200) {
        header.classList.add("active");
        goTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        goTopBtn.classList.remove("active");
    }

});

const url = "https://padax.github.io/taipei-day-trip-resources/taipei-attractions-assignment.json"
    fetch(url).then( function(response) {
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
            const cardNum = 3; 
            let cardImage = document.querySelectorAll(".card-img img")
            let cardSubtitle = document.querySelectorAll(".card-subtitle a")
            let cardBigTitle = document.querySelectorAll(".h3.card-title a")
            
            for (let i = 0; i < cardNum; i++) {
                cardSubtitle[i].innerHTML = mrtStation[i] + "捷運站";
                cardBigTitle[i].innerHTML = title[i];
                cardImage[i].src = pic[i];
            }
            
    })
