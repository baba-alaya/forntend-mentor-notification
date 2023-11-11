const active = document.querySelectorAll(".active");
const activeNo = document.querySelector(".no");
const cards = document.querySelectorAll(".card");
const markAll = document.querySelector(".anchor");

let totalActiveNo = active.length;
activeNo.textContent = totalActiveNo;
let isAllClicked = false

cards.forEach((card) => {
  let isclicked = true;
  card.addEventListener("click", (e) => {
    if(!isclicked || isAllClicked ) return
    const icon = card.querySelector(".fa-solid");
    const message = card.querySelector(".message");
    icon?.classList.add("hidden");
    message?.classList.remove("hidden");
    card.classList.remove("active");
    totalActiveNo--;
    activeNo.textContent = totalActiveNo;
    isclicked = false;
  });
});

markAll.addEventListener("click", () => {
  if (isAllClicked) return;
  cards.forEach((card) => {
    const icon = card.querySelector(".fa-solid");
    const message = card.querySelector(".message");
    icon?.classList.add("hidden");
    message?.classList.remove("hidden");
    card.classList.remove("active");
    totalActiveNo--;
    activeNo.textContent = 0
  });
  isAllClicked= true
});
