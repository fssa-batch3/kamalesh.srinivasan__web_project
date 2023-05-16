// To set the clicked job id in the localstorage
function yourJobsClick(index) {
  try {
    event.preventDefault();
    document.querySelector(".cards").style.display = "block";
    let cards = document.querySelectorAll(".card");
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.marginBottom = "2rem";
    }

    let localAll = JSON.parse(localStorage.getItem("requirements"));
    let isActive = localAll.filter((F) => F.isActive == true);
    let isCompleted = isActive.filter((F) => F.isCompleted == false);
    let isApplied = isCompleted.filter((F) => F.isCompleted == false);
    let started = isApplied.filter((F) => F.started == false);
    let jobs = started;
    // let  = JSON.parse(localStorage.getItem("requirements"));
    let yourJobsCardP = document.getElementsByClassName("desc");
    let yourJobs_card = document.getElementsByClassName("yourJobs_card");
    console.log(yourJobs_card);
    for (let i = 0; i < yourJobs_card.length; i++) {
      console.log("for");
      yourJobs_card[i].style.width = "30rem";
      yourJobs_card[i].style.height = "16rem";
      yourJobsCardP[i].style.maxWidth = "20rem";
      yourJobsCardP[i].style.textOverflow = "ellipsis";
      yourJobsCardP[i].style.overflow = "hidden";
      yourJobsCardP[i].style.whiteSpace = "nowrap";
    }

    let Deatils = document.querySelector(".Deatils");
    Deatils.style.display = "block";

    let cross = document.querySelector(".cross");
    cross.style.display = "block";
    console.log(index);
    localStorage.setItem("moreDetails", JSON.stringify(jobs[index]["id"]));
    // return detailData;
    console.log(jobs);
    console.log(jobs[index]["id"]);
    changeDatas();
  } catch (err) {
    console.error(err);
  }
}

// To change the clicked jobs data in the deatil view

function changeDatas() {
  try {
    let register = JSON.parse(localStorage.getItem("requirements"));
    console.log(register);
    let id = JSON.parse(localStorage.getItem("moreDetails"));
    let moreData = register.find((R) => R["id"] == id);
    console.log(moreData);
    let title = document.querySelector("div.title");
    title.innerHTML = `${moreData["title"]}`;

    let location = document.querySelector("div.location_deta");
    location.innerHTML = `${moreData["location"]}`;

    let jobTitle = document.querySelector("div.jobTitle");
    jobTitle.innerHTML = `<b>Job Title :</b>${moreData["title"]} `;
    // console.log(moreData["title"]);

    let jobLocation = document.querySelector("div.jobLocation");
    jobLocation.innerHTML = `<b>Location :</b> ${moreData["location"]}`;

    // split the summary by dot"."
    let splitedSummary = "";
    splitedSummary = moreData["summary"].split(".");
    jobSummaryUL.innerHTML = "";
    for (let i = 0; i < splitedSummary.length - 1; i++) {
      let summmaryLi = document.createElement("li");
      summmaryLi.innerHTML = splitedSummary[i];
      jobSummaryUL.append(summmaryLi);
    }

    let splitedQualification = "";
    splitedQualification = moreData["Qualifications"].split(".");
    QualificationsUL.innerHTML = "";
    for (let i = 0; i < splitedQualification.length - 1; i++) {
      let QualificationsLi = document.createElement("li");
      QualificationsLi.innerHTML = splitedQualification[i];
      QualificationsUL.append(QualificationsLi);
    }
    let splitedResponsibilities = "";
    splitedResponsibilities = moreData["Responsibilities"].split(".");
    ResponsibilitiesUL.innerHTML = "";
    for (let i = 0; i < splitedResponsibilities.length - 1; i++) {
      let ResponsibilitiesLi = document.createElement("li");
      ResponsibilitiesLi.innerHTML = splitedResponsibilities[i];

      ResponsibilitiesUL.append(ResponsibilitiesLi);
    }

    console.log("data");
  } catch (err) {
    console.error(err);
  }
}

function closeDetail() {
  try {
    document.querySelector(".cards").style.display = "grid";
    let cards = document.querySelectorAll(".card");
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.marginBottom = "0rem";
    }
    console.log("text");
    let yourJobs_card = document.getElementsByClassName("yourJobs_card");
    for (let i = 0; i < yourJobs_card.length; i++) {
      console.log("for");
      yourJobs_card[i].style.width = "50rem";
      yourJobs_card[i].style.height = "20rem";
      location.reload();
    }

    let Deatils = document.querySelector(".Deatils");
    Deatils.style.display = "none";

    let cross = document.querySelector(".cross");
    cross.style.display = "none";
  } catch (err) {
    console.error(err);
  }
}

function getLocalreq(data) {
  try {
    let localAll = JSON.parse(localStorage.getItem("requirements"));
    let isActive = localAll.filter((F) => F.isActive == true);
    let isCompleted = isActive.filter((F) => F.isCompleted == false);
    let isApplied = isCompleted.filter((F) => F.isCompleted == false);
    let started = isApplied.filter((F) => F.started == false);
    let getLocal = started;

    console.log(getLocal);

    return getLocal;
  } catch (err) {
    console.error(err);
  }
}

//  Apply Button

function applyJob() {
  try {
    let jobID = JSON.parse(localStorage.getItem("moreDetails"));
    let loggedIn = JSON.parse(localStorage.getItem("Login"));
    let requirements = JSON.parse(localStorage.getItem("requirements"));
    let workers = JSON.parse(localStorage.getItem("workerRegister"));
    let Bio = JSON.parse(localStorage.getItem("BIO"));

    let applier = workers.find((W) => W.id == loggedIn.id);
    let applierBio = Bio.find((F) => F.Email == loggedIn.Email);

    console.log(applier);

    let owner = requirements.find((R) => R.id == jobID);
    console.log(owner);

    let arr = [];
    if (localStorage.getItem("apllyJob") != null) {
      arr = JSON.parse(localStorage.getItem("apllyJob"));
    }

    let apply = {
      jobID,
      applierId: applier.id,
      applierName: applierBio["FN"] + " " + applierBio["LN"],
      aplliedJobId: Date.now(),
      readed: false,
      notificationAction: "NotActioned",
      start: false,
    };

    if (owner != undefined) {
      apply = Object.assign(apply, owner);
    }

    arr.push(apply);

    // insert applied id in requirements
    for (let i = 0; i < requirements.length; i++) {
      if (jobID == requirements[i]["id"]) {
        console.log(requirements[i]["Applied"]);
        let id;

        if (requirements[i]["Applied"] == undefined) {
          let obj = requirements[i];
          obj = { Applied: [applier.id] };
          let cObj = requirements[i];
          let newObj = Object.assign(cObj, obj);
          console.log(newObj);
          requirements[i] = newObj;
        } else {
          for (let j = 0; j < requirements[i]["Applied"].length; j++) {
            if (requirements[i]["Applied"][j] == applier.id) {
              id = "applied";
            }
          }
        }

        if (id != "applied") {
          if (requirements[i]["Applied"] == undefined) {
            let obj = requirements[i];
            obj = { Applied: [applier.id] };
            let cObj = requirements[i];
            let newObj = Object.assign(cObj, obj);
            console.log(newObj);
            requirements[i] = newObj;
          } else {
            requirements[i]["Applied"].push(applier.id);
          }
        } else {
          return alert("Already applied");
        }
      }
    }
    localStorage.setItem("apllyJob", JSON.stringify(arr));

    localStorage.setItem("requirements", JSON.stringify(requirements));
    toastr.success("Job Applied successfully");
  } catch (err) {
    console.error(err);
  }
}

function chat() {
  location.href = "Worker_Chat.html" + location.search;
}

function jobSearch() {
  let yourJobs = getLocalreq();
  let searchedValue = document.getElementById("jobSearch").value;
  console.log(searchedValue);
  if (searchedValue != "") {
    let searchedJob = [];
    for (let i = 0; i < yourJobs.length; i++) {
      if (yourJobs[i]["FN"].includes(searchedValue)) {
        searchedJob.push(yourJobs[i]);
      } else if (yourJobs[i]["LN"].includes(searchedValue)) {
        searchedJob.push(yourJobs[i]);
      } else if (yourJobs[i]["Qualifications"].includes(searchedValue)) {
        searchedJob.push(yourJobs[i]);
      } else if (yourJobs[i]["location"].includes(searchedValue)) {
        searchedJob.push(yourJobs[i]);
      } else if (yourJobs[i]["Responsibilities"].includes(searchedValue)) {
        searchedJob.push(yourJobs[i]);
      } else if (yourJobs[i]["Salary"].includes(searchedValue)) {
        searchedJob.push(yourJobs[i]);
      } else if (yourJobs[i]["disc"].includes(searchedValue)) {
        searchedJob.push(yourJobs[i]);
      } else if (yourJobs[i]["summary"].includes(searchedValue)) {
        searchedJob.push(yourJobs[i]);
      } else if (yourJobs[i]["title"].includes(searchedValue)) {
        searchedJob.push(yourJobs[i]);
      }
    }
    createJob(searchedJob);
  }
}

function createJob(yourJobs) {
  document.querySelector(".cards").innerHTML = null;
  for (let i = 0; i < yourJobs.length; i++) {
    console.log(yourJobs[i]);
    let yourJobs_card = document.createElement("div");
    yourJobs_card.setAttribute("class", "yourJobs_card");

    //  get and split a applier Name
    let profileImage = profileImg(yourJobs[i]["FN"], yourJobs[i]["LN"]);
    console.log(from);
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.innerHTML = `   <div class="userName"> <img src="${profileImage}" alt="image"> ${
      yourJobs[i]["FN"] + yourJobs[i]["LN"]
    }</div>
                <div class="title">
                    ${yourJobs[i]["title"]}
                </div>

                <div class="description">
                    ${yourJobs[i]["disc"]}
                </div>

                <div class="cardLast">
                    <div class="location">${yourJobs[i]["location"]}</div>
                    <div class="salary">${yourJobs[i]["Salary"]}</div>
                    <div class="viewMore" onclick="yourJobsClick(${i})"> <img src="../assets/Images/rightArrow.svg" alt="image"></div>
                </div>`;
    document.querySelector(".cards").append(card);
  }
}
