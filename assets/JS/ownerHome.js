const { promises } = require("fs");
const { resolve } = require("path");

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

function test(jobs, i, appendTag) {
  console.log(jobs, i, appendTag);
  let workerReg = JSON.parse(localStorage.getItem("workerRegister"));
  let ownerReg = JSON.parse(localStorage.getItem("register"));
  let mergedReg = workerReg.concat(ownerReg);
  let bio = JSON.parse(localStorage.getItem("BIO"));

  let rect_cards = document.createElement("div");
  rect_cards.setAttribute("class", "rect_cards");

  let ED = document.createElement("div");
  ED.setAttribute("class", "ED");

  let editA = document.createElement("a");
  editA.setAttribute("href", `EditYourJob.html?id= ${jobs[i]["id"]}`);
  ED.append(editA);

  let editImg = document.createElement("img");
  editImg.setAttribute("class", "editImg");
  editImg.setAttribute("alt", "Image");
  editImg.setAttribute("src", "../assets/Images/edit.svg");
  editA.append(editImg);

  let jobId = document.createElement("p");
  jobId.innerText = `${jobs[i]["id"]}`;
  ED.append(jobId);

  let deleteImg = document.createElement("img");
  deleteImg.setAttribute("src", "../assets/Images/delete.svg");
  // deleteImg.setAttribute("onclick", "deleteJob()");
  deleteImg.setAttribute("alt", "Image");
  deleteImg.setAttribute("id", "btn");
  ED.append(deleteImg);
  rect_cards.append(ED);

  let secondCard = document.createElement("div");
  secondCard.setAttribute("class", "secondCard");

  let profileImg = document.createElement("img");
  profileImg.setAttribute("src", "../assets/Images/profiel1.jpg");
  profileImg.setAttribute("alt", "Profile");
  secondCard.append(profileImg);

  //  Get the job created owner name

  let cntOwner = mergedReg.find((F) => F.id == jobs[i]["ownerId"]);
  let cntOwnerBio = bio.find((F) => F.Email == cntOwner.Email);
  console.log(cntOwner);

  let Prof_name = document.createElement("p");
  Prof_name.innerText = cntOwnerBio["FN"] + cntOwnerBio["LN"];
  Prof_name.setAttribute("class", "Prof_name");
  secondCard.append(Prof_name);

  let TypeP = document.createElement("p");
  TypeP.setAttribute("class", "Type");
  TypeP.innerText = `${jobs[i]["title"]}`;

  let TypeSpan = document.createElement("span");
  TypeSpan.innerText = "Type :";
  TypeP.prepend(TypeSpan);

  secondCard.append(TypeP);

  let LocationP = document.createElement("p");
  LocationP.setAttribute("class", "NOE");
  LocationP.innerText = `${jobs[i]["location"]}`;

  let LocationSpan = document.createElement("span");
  LocationSpan.innerText = "Location :";
  LocationP.prepend(LocationSpan);

  secondCard.append(LocationP);

  let uploaded_dateP = document.createElement("p");
  uploaded_dateP.setAttribute("class", "uploaded_date");
  uploaded_dateP.innerText = `${jobs[i]["Salary"]}`;

  let uploaded_dateSpan = document.createElement("span");
  uploaded_dateSpan.innerText = "Salary :";
  uploaded_dateP.prepend(uploaded_dateSpan);

  secondCard.append(uploaded_dateP);

  let rectButtons = document.createElement("div");
  rectButtons.setAttribute("class", "rect-buttons");
  // rectButtons.innerHTML = `<button class="ck_work" id="MAC">Mark as completed</button>`;
  secondCard.append(rectButtons);

  let mac = document.createElement("button");
  mac.setAttribute("id", "MAC");
  mac.setAttribute("onclick", `marckAsDelete(${jobs[i]["id"]})`);
  mac.setAttribute("class", "ck_work");
  mac.innerHTML = "Mark as completed";
  rectButtons.append(mac);

  rect_cards.append(secondCard);

  appendTag.append(rect_cards);
  // //console.log(jobs[i]["id"])
  let btn = document.getElementById("btn");
  // //console.log(jobs[i]["isActive"]);

  deleteImg.addEventListener("click", () => {
    // //console.log(jobs[i]["id"]);
    // jobs = JSON.parse(localStorage.getItem("requirements"));
    // jobs[i]["isActive"] = false;
    // const findOfThis = jobs.find(e => e.id = jobs[i]["id"])
    const indexOfThis = jobs.indexOf(jobs[i]);
    //console.log(jobs);
    // jobs.splice(indexOfThis, 1)
    jobs[indexOfThis]["isActive"] = false;
    localStorage.setItem("requirements", JSON.stringify(jobs));
    //console.log(jobs);
    toastr.success("Job deleted Successfully");
    let await = new Promise((r) => setTimeout(r, 3000));

    await.then(() => {
      location.reload();
    });
  });

  // if()
}

function marckAsDelete(id) {
  let getLocal = JSON.parse(localStorage.getItem("requirements"));
  console.log(getLocal);
  let finded = getLocal.filter((f) => f.id == id);
  finded[0]["isCompleted"] = true;
  console.log(finded);
  for (let i = 0; i < getLocal.length; i++) {
    if (getLocal[i]["id"] == id) {
      console.log("if" + i);
      getLocal[i] = finded[0];
    }
  }
  localStorage.setItem("requirements", JSON.stringify(getLocal));
  console.log(getLocal);
  location.reload();
}
