// BURGER
const menuDisplay = document.querySelector("#menuDisplay")
const openBurger = document.querySelector("#burger")
const closeBurger = document.querySelector("#close")

openBurger.addEventListener("click", () => {

    document.querySelector("body").classList.add("overflow");

    menuDisplay.classList.add("open-burger");

})

closeBurger.addEventListener("click", () => {

    menuDisplay.classList.remove("open-burger");

    document.querySelector("body").classList.remove("overflow");

})

// SELECT FEATURES
const selectors = document.querySelectorAll(".selector-feature")
const features = document.querySelectorAll(".feature")

for (let [index,element] of selectors.entries()){
    element.addEventListener("click", () =>{

        if (!element.classList.contains("select")){
            features.forEach(x => x.classList.add("d-none"))
            features[index].classList.remove("d-none");

            selectors.forEach(x => x.classList.remove("select"))
            element.classList.add("select");            
        }
    })
}

// FAQ
const questionBtn = document.querySelectorAll(".section-4__faq__item__question");
const answerDisplay = document.querySelectorAll(".section-4__faq__item__answer");

for (let element of questionBtn){
    element.addEventListener("click", () => {

        element.parentNode.classList.toggle("open")

    })
}

// EMAIL
const inputMail = document.querySelector("#input-mail");
const inputMailWrapper = document.querySelector("#input-mail-wrapper")
const btnMail = document.querySelector("#btn-mail");

btnMail.addEventListener("click", () =>{
    
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(inputMail.value)){
        inputMailWrapper.classList.add("wrong")
        inputMail.style.border = "unset"
    } else {
        inputMailWrapper.classList.remove("wrong")
        inputMail.style.border = "2px solid green"
    }
})

// SCROLL ANIMATION
const ratio = .1

const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const interObserver = function (entries, observer) {
    entries.forEach(function (entry){
        if (entry.intersectionRatio > ratio){
            entry.target.classList.add("visible");
        } else {
            entry.target.classList.remove("visible");
        }

    })
}

const observer = new IntersectionObserver(interObserver,options);
document.querySelectorAll(".hide").forEach(function(x) {

    observer.observe(x)
})

// HEADER ANIMATION
window.addEventListener("scroll", (e) =>{

    const header = document.querySelector(".header");

    const headerPlaceHolder = document.querySelector(".header__place-holder");

    const scrollY = window.scrollY;

    if (scrollY >= 50){
        header.classList.add("headerShadow");
        headerPlaceHolder.classList.remove("d-none")
    } else{
        header.classList.remove("headerShadow");
        headerPlaceHolder.classList.add("d-none")
    }

})



