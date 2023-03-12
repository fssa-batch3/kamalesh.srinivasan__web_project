function getUploadreq(obj) {
  let arr = [];

  if (localStorage.getItem("requirements") != null) {
    arr = JSON.parse(localStorage.getItem("requirements"));
  }

  arr.push(obj);

  localStorage.setItem("requirements", JSON.stringify(arr));
  // location.reload();
}

function goRight() {
  document.querySelector(".rect_jobs").scrollLeft += 786;
}

function goLeft() {
  document.querySelector(".rect_jobs").scrollLeft -= 786;
}

function goRightPen() {
  document.querySelector(".pen_jobs").scrollLeft += 786;
}

function goLeftPen() {
  document.querySelector(".pen_jobs").scrollLeft -= 786;
}

function goRightUa() {
  document.querySelector(".ua_jobs").scrollLeft += 786;
}

function goLeftUa() {
  document.querySelector(".ua_jobs").scrollLeft -= 786;
}
