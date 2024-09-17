const faqDivs = document.querySelectorAll(".faq");
const openBtns = document.querySelectorAll(".btn-open");
const answers = document.querySelectorAll("p");

answers[0].style.display = "block";
openBtns[i].src = "./assets/images/icon-minus.svg";

faqDivs.forEach((faq, i) => {
  faq.addEventListener("click", function (e) {
    if (faq.dataset.active === "false") {
      faq.dataset.active = "true";
      openBtns[i].src = "./assets/images/icon-minus.svg";
      answers[i].style.display = "block";
    }
    else {
      faq.dataset.active = "false";
      openBtns[i].src = "./assets/images/icon-plus.svg";
      answers[i].style.display = "none";
    }
  });
});



