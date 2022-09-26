let openBtn = document.querySelector('.bi-list');
let closeBtn = document.querySelector('.bi-x-lg');

openBtn.addEventListener("click",()=>{
  openBtn.classList.toggle("hide");
  closeBtn.classList.toggle("hide");
});

closeBtn.addEventListener("click",()=>{
  openBtn.classList.toggle("hide");
  closeBtn.classList.toggle("hide");
});