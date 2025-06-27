const menuEl = document.querySelector(".menu");
const ulEl = document.querySelector(".social-lists");
const liEl = document.querySelectorAll("li");
const downEl = document.querySelector('#down')

menuEl.addEventListener("click", function () {
  ulEl.classList.remove("hide");
  downEl.classList.add('change')
});

liEl.forEach((item) => item.addEventListener("click", dropDownSelect));

function dropDownSelect(e) {
  const socialMedia = e.target.id;
  console.log(socialMedia)
    ulEl.classList.add('hide')
  downEl.classList.remove('change')

}


