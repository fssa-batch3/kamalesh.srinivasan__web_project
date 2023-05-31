function getUploadreq(obj) {
  try {
    let arr = [];

    if (localStorage.getItem("requirements") != null) {
      arr = JSON.parse(localStorage.getItem("requirements"));
    }

    arr.push(obj);

    localStorage.setItem("requirements", JSON.stringify(arr));
  } catch (err) {
    console.error(err);
  }
}

function goRight() {
  try {
    document.querySelector(".rect_jobs").scrollLeft += 786;
  } catch (err) {
    console.error(err);
  }
}

function goLeft() {
  try {
    document.querySelector(".rect_jobs").scrollLeft -= 786;
  } catch (err) {
    console.error(err);
  }
}

function goRightPen() {
  try {
    document.querySelector(".pen_jobs").scrollLeft += 786;
  } catch (err) {
    console.error(err);
  }
}

function goLeftPen() {
  try {
    document.querySelector(".pen_jobs").scrollLeft -= 786;
  } catch (err) {
    console.error(err);
  }
}

function goRightUa() {
  try {
    document.querySelector(".ua_jobs").scrollLeft += 786;
  } catch (err) {
    console.error(err);
  }
}

function goLeftUa() {
  try {
    document.querySelector(".ua_jobs").scrollLeft -= 786;
  } catch (err) {
    console.error(err);
  }
}

function createJobCard(jobs, i, appendTag) {
  try {
    console.log(jobs, i, appendTag);
    let mergedReg;
    let workerReg = JSON.parse(localStorage.getItem("workerRegister"));
    let ownerReg = JSON.parse(localStorage.getItem("register"));
    if (workerReg != undefined && ownerReg != undefined) {
      mergedReg = workerReg.concat(ownerReg);
    } else if (workerReg != null && ownerReg != null) {
      mergedReg = workerReg.concat(ownerReg);
    } else if (workerReg != undefined) {
      mergedReg = workerReg;
    } else if (ownerReg != undefined) {
      mergedReg = ownerReg;
    }

    console.log(jobs[i]);
    // let bio = JSON.parse(localStorage.getItem("BIO"));

    // let rect_cards = document.createElement("div");
    // rect_cards.setAttribute("class", "rect_cards");

    // let ED = document.createElement("div");
    // ED.setAttribute("class", "ED");

    // let editA = document.createElement("a");
    // editA.setAttribute("href", `EditYourJob.html?id= ${jobs[i]["id"]}`);
    // ED.append(editA);

    // let editImg = document.createElement("img");
    // editImg.setAttribute("class", "editImg");
    // editImg.setAttribute("alt", "Image");
    // editImg.setAttribute("src", "../assets/Images/edit.svg");
    // editA.append(editImg);

    // let jobId = document.createElement("p");
    // jobId.innerText = `${jobs[i]["id"]}`;
    // ED.append(jobId);

    // let deleteImg = document.createElement("img");
    // deleteImg.setAttribute("src", "../assets/Images/delete.svg");
    // deleteImg.setAttribute("alt", "Image");
    // deleteImg.setAttribute("id", "btn");
    // ED.append(deleteImg);
    // rect_cards.append(ED);

    // let secondCard = document.createElement("div");
    // secondCard.setAttribute("class", "secondCard");

    // let profileData = profileImg(jobs[i]["FN"], jobs[i]["LN"]);
    // let profileImg1 = document.createElement("img");
    // profileImg1.setAttribute("src", profileData);
    // profileImg1.setAttribute("alt", "Profile");
    // secondCard.append(profileImg1);

    // //  Get the job created owner name

    // let cntOwner = mergedReg.find((F) => F.id == jobs[i]["ownerId"]);
    // let cntOwnerBio = bio.find((F) => F.Email == cntOwner.Email);
    // console.log(cntOwner);

    // let Prof_name = document.createElement("p");
    // Prof_name.innerText = cntOwnerBio["FN"] + cntOwnerBio["LN"];
    // Prof_name.setAttribute("class", "Prof_name");
    // secondCard.append(Prof_name);

    // let TypeP = document.createElement("p");
    // TypeP.setAttribute("class", "Type");
    // TypeP.innerText = `${jobs[i]["title"]}`;

    // let TypeSpan = document.createElement("span");
    // TypeSpan.innerText = "Title :";
    // TypeP.prepend(TypeSpan);

    // secondCard.append(TypeP);

    // let LocationP = document.createElement("p");
    // LocationP.setAttribute("class", "NOE");
    // LocationP.innerText = `${jobs[i]["location"]}`;

    // let LocationSpan = document.createElement("span");
    // LocationSpan.innerText = "Location :";
    // LocationP.prepend(LocationSpan);

    // secondCard.append(LocationP);

    // let uploaded_dateP = document.createElement("p");
    // uploaded_dateP.setAttribute("class", "uploaded_date");
    // uploaded_dateP.innerText = `${jobs[i]["Salary"]}`;

    // let uploaded_dateSpan = document.createElement("span");
    // uploaded_dateSpan.innerText = "Salary :";
    // uploaded_dateP.prepend(uploaded_dateSpan);

    // secondCard.append(uploaded_dateP);

    // let rectButtons = document.createElement("div");
    // rectButtons.setAttribute("class", "rect-buttons");
    // secondCard.append(rectButtons);

    // let mac = document.createElement("button");
    // mac.setAttribute("id", "MAC");
    // mac.setAttribute("onclick", `marckAsDelete(${jobs[i]["id"]})`);
    // mac.setAttribute("class", "ck_work");
    // mac.innerHTML = "Mark as completed";
    // rectButtons.append(mac);

    // rect_cards.append(secondCard);

    // appendTag.append(rect_cards);

    // new card
    // document.querySelector(".cards").innerHTML = null;

    let card = document.createElement("div");
    card.setAttribute("class", "card");

    let top = document.createElement("div");
    top.setAttribute("class", "top");
    card.append(top);

    let topLeft = document.createElement("div");
    topLeft.setAttribute("class", "topLeft");
    topLeft.setAttribute("onclick", `marckAsDelete(${jobs[i]["id"]})`);
    top.append(topLeft);

    let circle = document.createElement("div");
    circle.setAttribute("class", "circle");
    circle.innerHTML = `<i class="fa fa-check" style="color: black;"></i> <div class="tooltiptext">Merk as completed</div>`;
    topLeft.append(circle);

    let profileImge = profileImg(jobs[i]["FN"], jobs[i]["LN"]);

    let topRight = document.createElement("div");
    topRight.setAttribute("class", "topRight");
    topRight.innerHTML = `<img src=${profileImge} alt="imge"><div class="name">${
      jobs[i]["FN"] + " " + jobs[i]["LN"]
    }</div>`;
    top.append(topRight);

    let middle = document.createElement("div");
    middle.setAttribute("class", "middle");
    middle.innerHTML = `<div class="jobTitle">
    ${jobs[i]["title"]}
</div>
<div class="description"> ${jobs[i]["disc"]}</div>`;
    card.append(middle);

    let bottom = document.createElement("div");
    bottom.setAttribute("class", "bottom");
    card.append(bottom);

    let buttons = document.createElement("div");
    buttons.setAttribute("class", "buttons");
    bottom.append(buttons);

    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "delete");
    deleteBtn.innerHTML = `<i class="fa fa-trash" style="color: black;"></i> <div class="tooltiptext">Delete</div>`;
    buttons.append(deleteBtn);

    let edit = document.createElement("button");
    edit.setAttribute("class", "edit");
    edit.setAttribute("onclick", `editojob(${jobs[i]["id"]})`);
    edit.innerHTML = `<i class="fa fa-edit" style="color: black;"></i> <div class="tooltiptext">Edit</div>`;
    buttons.append(edit);

    let amount = document.createElement("div");
    amount.setAttribute("class", "amount");
    amount.innerHTML = `RS.${jobs[i]["Salary"]}`;
    bottom.append(amount);

    // To to add a addEventlistener in the delete button

    deleteBtn.addEventListener("click", () => {
      let text = "Are you sure to delete this job";
      if (confirm(text) == true) {
        const indexOfThis = jobs.indexOf(jobs[i]);

        jobs[indexOfThis]["isActive"] = false;
        localStorage.setItem("requirements", JSON.stringify(jobs));
        toastr.success("Job deleted Successfully");
        let timeOut = new Promise((r) => setTimeout(r, 3000));

        timeOut.then(() => {
          location.reload();
        });
      }
    });

    document.querySelector(".cards").append(card);
  } catch (err) {
    console.error(err);
  }
}

function marckAsDelete(id) {
  try {
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
    // location.reload();
  } catch (err) {
    console.error(err);
  }
}

function OWnotification() {
  try {
    location.href = "ownerNotification.html?from=logIn&&type=owner&filter=all";
  } catch (err) {
    console.error(err);
  }
}

function urlData() {
  try {
    location.href = "profile.html" + url;
  } catch (err) {
    console.error(err);
  }
}

function rdToPayment() {
  try {
    location.href = `payment.html${location.search}`;
  } catch (err) {
    console.error(err);
  }
}

function chatRD() {
  try {
    location.href = "Worker_Chat.html" + location.search;
  } catch (err) {
    console.error(err);
  }
}

function editojob(id) {
  location.href = `EditYourJob.html?id=${id}`;
}

function openCreateJob() {
  document.querySelector(".form").style.display = "flex";
}

function closeCreateJob() {
  document.querySelector(".form").style.display = "none";
}
