function yourJobsClick() {
  console.log("text");

  let yourJobs_card = document.getElementsByClassName("yourJobs_card");
  for (let i = 0; i < yourJobs_card.length; i++) {
    console.log("for");
    yourJobs_card[i].style.width = "30rem";
    yourJobs_card[i].style.height = "25rem";
  }

  let Deatils = document.querySelector(".Deatils");
  Deatils.style.display = "block";

  let cross = document.querySelector(".cross");
  cross.style.display = "block";
}

function closeDetail() {
  console.log("text");
  let yourJobs_card = document.getElementsByClassName("yourJobs_card");
  for (let i = 0; i < yourJobs_card.length; i++) {
    console.log("for");
    yourJobs_card[i].style.width = "50rem";
    yourJobs_card[i].style.height = "20rem";
  }

  let Deatils = document.querySelector(".Deatils");
  Deatils.style.display = "none";

  let cross = document.querySelector(".cross");
  cross.style.display = "none";
}

function getLocalreq(data) {
  let arr = [];
  if (data != null) {
    arr = data;
  }

  let getLocal = JSON.parse(localStorage.getItem("requirements"));
  arr.push(getLocal);
  console.log(arr);

  return getLocal;
}
