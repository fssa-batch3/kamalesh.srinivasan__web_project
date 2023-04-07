function yourJobsClick(index) {
  event.preventDefault();
  let localAll = JSON.parse(localStorage.getItem("requirements"));
  let isActive = localAll.filter((F) => F.isActive == true);
  let isCompleted = isActive.filter((F) => F.isCompleted == false);
  let isApplied = isCompleted.filter((F) => F.isCompleted == false);
  let jobs = isApplied;
  // let  = JSON.parse(localStorage.getItem("requirements"));
  let yourJobsCardP = document.getElementsByClassName("desc");
  let yourJobs_card = document.getElementsByClassName("yourJobs_card");
  console.log(yourJobs_card);
  for (let i = 0; i < yourJobs_card.length; i++) {
    console.log("for");
    yourJobs_card[i].style.width = "30rem";
    yourJobs_card[i].style.height = "15rem";
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
  // let detailData = jobs[index]["id"];
  // return detailData;
  console.log(jobs);
  console.log(jobs[index]["id"]);
  // let moreData = jobs[index];
  channgeDatas();
}

function channgeDatas() {
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
}

function closeDetail() {
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
}

function getLocalreq(data) {
  // let arr = [];
  // if (data != null) {
  //   arr = data;
  // }

  let localAll = JSON.parse(localStorage.getItem("requirements"));
  let isActive = localAll.filter((F) => F.isActive == true);
  let isCompleted = isActive.filter((F) => F.isCompleted == false);
  let isApplied = isCompleted.filter((F) => F.isCompleted == false);
  let getLocal = isApplied;
  // arr.push(getLocal);
  console.log(getLocal);

  return getLocal;
}

//  Apply Button

function applyJob() {
  let jobID = JSON.parse(localStorage.getItem("moreDetails"));
  let loggedIn = JSON.parse(localStorage.getItem("Login"));
  let requirements = JSON.parse(localStorage.getItem("requirements"));
  let workers = JSON.parse(localStorage.getItem("workerRegister"));

  let applier = workers.find((W) => W.id == loggedIn.id);
  console.log(applier);

  let owner = requirements.find((R) => R.id == jobID);
  // let ownerId = owner.id;
  // let location = owner["location"];
  // let title = owner["title"];
  // let desc = owner["disc"];
  // let summary = owner["summary"];
  // let Qualifications = owner["Qualifications"];
  // let Responsibilities = owner["Responsibilities"];
  console.log(owner);

  let arr = [];
  if (localStorage.getItem("apllyJob") != null) {
    arr = JSON.parse(localStorage.getItem("apllyJob"));
  }

  let apply = {
    jobID,
    applierId: applier.id,
    applierName: applier.FullName,
    aplliedJobId: Date.now(),
    readed: false,
    notificationAction: "NotActioned",
    start: false,
  };

  if (owner != undefined) {
    apply = Object.assign(apply, owner);
  }

  arr.push(apply);
  localStorage.setItem("apllyJob", JSON.stringify(arr));

  // document.querySelector(".apply").disabled = true;

  // insert applied id in requirements
  for (let i = 0; i < requirements.length; i++) {
    if (jobID == requirements[i]["id"]) {
      console.log(requirements[i]["Applied"]);
      let id;
      for (let j = 0; j < requirements[i]["Applied"]; j++) {
        if (requirements[i]["Applied"][j] == applier.id) {
          id = "applied";
        }
      }

      if (id == undefined) {
        if (requirements[i]["Applied"] == undefined) {
          let obj = requirements[i];
          obj = { Applied: [applier.id] };
          let cObj = requirements[i];
          let newObj = Object.assign(cObj, obj);
          console.log(newObj);
          requirements[i] = newObj;
        } else {
          // let obj = requirements[i];
          // obj = { Applied: [applier.id] };
          // let cObj = requirements[i];
          // let newObj = Object.assign(cObj, obj);
          // console.log(newObj);
          // requirements[i] = newObj;
          requirements[i]["Applied"].push(applier.id);
        }
      } else {
        return alert("Already applied");
      }
    }
  }

  localStorage.setItem("requirements", JSON.stringify(requirements));
}
