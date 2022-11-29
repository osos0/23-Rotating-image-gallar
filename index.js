const containerEl = document.querySelector(".container");
const prevEl = document.querySelector("#prev");
const nextEl = document.querySelector("#next");

containerEl.style.transform = "perspective(1000px) rotateY(0deg)";
num = 0;

function autoSlide() {
  num++;
  console.log(num);
  containerEl.style.transform = `perspective(1000px) rotateY(${num * 45}deg)`;
  setTimeout(() => {
    autoSlide();
  }, 5000);
}
autoSlide();

nextEl.addEventListener("click", () => {
  num++;
  containerEl.style.transform = `perspective(1000px) rotateY(${num * 45}deg)`;
});
prevEl.addEventListener("click", () => {
  num--;
  containerEl.style.transform = `perspective(1000px) rotateY(${num * 45}deg)`;
});
