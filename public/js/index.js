const d = document;

const slider = () => {
  const $nextBtn = d.querySelector(".slider-btns .btn-next"),
    $prevBtn = d.querySelector(".slider-btns .btn-prev"),
    $slidesImgs = d.querySelectorAll(".slider-slide-img"),
    $slidesInfo = d.querySelectorAll(".slider-slide-info");

  let i = 0;

  d.addEventListener("click", (e) => {
    if (e.target === $prevBtn || e.target === $prevBtn.firstElementChild) {
      $slidesImgs[i].classList.remove("active");
      $slidesInfo[i].classList.remove("active");
      i--;
      if (i < 0) {
        i = $slidesImgs.length - 1;
      }
      $slidesImgs[i].classList.add("active");
      $slidesInfo[i].classList.add("active");
    }
    if (e.target === $nextBtn || e.target === $nextBtn.firstElementChild) {
      $slidesImgs[i].classList.remove("active");
      $slidesInfo[i].classList.remove("active");
      i++;
      if (i >= $slidesImgs.length) {
        i = 0;
      }
      $slidesImgs[i].classList.add("active");
      $slidesInfo[i].classList.add("active");
    }
  });
};

slider();
