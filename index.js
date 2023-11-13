// web site code 

let words = document.querySelectorAll(".word")
words.forEach((word) => {
    let letters = word.textContent.split("")
    word.textContent = "";
    letters.forEach((letter) => {
        let span = document.createElement("span")
        span.textContent = letter;
        span.className = "letter"
        word.append(span)
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });

    nextWord.style.opacity = "1"
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind"
        setTimeout(() => {
            letter.className = "letter in"
        }, 340 + i * 80)
    })
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
}

changeText()
setInterval(changeText, 3000)


// circle skills -----------

const circles = document.querySelectorAll('.circle');
circles.forEach(element => {
    let dots = element.getAttribute("data-dots");
    let marked = element.getAttribute("data-percent");
    let percent = Math.floor(dots * marked / 100);
    let points = ""
    let rotate = 360 / dots;

    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`
    }
    element.innerHTML = points;
    const pointsMarked = element.querySelectorAll('.points')
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked')
    }
})


// mix it up protflio section ---------

var mixer = mixitup('.protfolio-gallery');

// active menu ----------------------

let menuli = document.querySelectorAll("header ul li a")
let section = document.querySelectorAll("section")

function actveMenu() {
    let len = section.length;
    while (--len && window.scrollY + 97 < section[len].offsetTop) { }
    menuli.forEach(sec => sec.classList.remove("active"));
    menuli[len].classList.add("active")
}
actveMenu()
window.addEventListener("scroll", actveMenu)

// sticky nav--------------
const header = document.querySelector("header")
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 50)
})

// toggle icone ---------------------
let menuIcon = document.querySelector("#menu-icon")
let navlist = document.querySelector(".navlist")

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x")
    navlist.classList.toggle("open")
}
window.onscroll = () => {
    menuIcon.classList.remove("bx-x")
    navlist.classList.remove("open")
}


// scroll animation -----------

const observer = new IntersectionObserver((entries) => {
    entries.forEach((enter) => {
        if (enter.isIntersecting) {
            enter.target.classList.add("show-items")
        } else {
            enter.target.classList.remove("show-items")
        }
    })
})

const scrollScal = document.querySelectorAll(".scroll-scale")
scrollScal.forEach((el) => observer.observe(el))

const scrollBottom = document.querySelectorAll(".scroll-bottom")
scrollBottom.forEach((el) => observer.observe(el))

const scrollTop = document.querySelectorAll(".scroll-top")
scrollTop.forEach((el) => observer.observe(el))



// contact from ------------------

const submitButton = document.getElementById("submitButton")


submitButton.addEventListener("click", function () {
    const contactName = document.getElementById("contactName")
    const contactemail = document.getElementById("contactemail")
    const contactmessage = document.getElementById("contactmessage")
    const suceesMail = document.querySelector(".sucees-mail");
    const errorMail = document.querySelector(".error-mail");

    const namevalue = contactName.value;
    const emailvalue = contactemail.value;
    const messagevalue = contactmessage.value;

    const templateParams = {
        namevalue: namevalue,
        emailvalue: emailvalue,
        messagevalue: messagevalue
    };

    if (namevalue && emailvalue && messagevalue) {
        console.log(namevalue, emailvalue, messagevalue);

        emailjs.send("service_17spcy8", "template_hj3nieo", templateParams, "vdWpjsEJJbBs5a582");
        suceesMail.classList.add("sucees-show")
        setTimeout(function () {
            suceesMail.classList.remove("sucees-show")

        }, 4000)
        contactName.value = "";
        contactemail.value = "";
        contactmessage.value = "";
    } else {
        errorMail.classList.add("show-error")
        setTimeout(() => {
            errorMail.classList.remove("show-error")
        }, 4000);
    }
})