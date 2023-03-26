function setCurrentNotificationId(id) {
  localStorage.setItem("CurrentNotificationId", JSON.stringify(id));
  let CurrentId = JSON.parse(localStorage.getItem("CurrentNotificationId"));
  console.log(CurrentId);
  // let currentJobIndex = applyJob.indexOf(CurrentId);
  // console.log(applyJob);
  // console.log(applyJob["CurrentId"]);
  // console.log(currentJobIndex);
  let currentJob = applyJob.find((A) => A["aplliedJobId"] == CurrentId);
  createDetails(currentJob);
  // location.href = "ownerNotification.html?from=logIn&&type=owner&filter=readed";
}

// console.log(currentJob)
// Data Details

function createDetails(currentJob) {
  console.log(currentJob);

  let initial = document.querySelector(".details");
  if (initial != null) {
    document.querySelector(".details").remove();
  }

  // let details = null;
  let details = document.createElement("div");
  details.setAttribute("class", "details");

  let jobHead = document.createElement("div");
  jobHead.setAttribute("class", "jobHead");
  details.append(jobHead);

  let p = document.createElement("div");
  p.setAttribute("class", "p");
  jobHead.append(p);

  let Jtitle = document.createElement("p");
  Jtitle.remove();
  Jtitle.innerHTML = `Job Title:   ${currentJob["title"]}`;
  p.append(Jtitle);

  let Jlocation = document.createElement("p");
  Jlocation.remove();
  Jlocation.innerHTML = `Location:${currentJob["location"]} `;
  p.append(Jlocation);

  let JworkerName = document.createElement("p");
  JworkerName.remove();
  JworkerName.innerHTML = `Worker Name: ${currentJob["applierName"]}`;
  p.append(JworkerName);

  let imageDiv = document.createElement("div");
  jobHead.append(imageDiv);

  let image = document.createElement("img");
  image.setAttribute("src", "../assets/Images/close.svg");
  image.setAttribute("alt", "image");
  image.setAttribute("onclick", "closeDetail()");
  imageDiv.append(image);

  if (currentJob["start"] == true) {
    let startWork = document.createElement("div");
    startWork.setAttribute("class", "startWork");
    startWork.setAttribute(
      "onclick",
      `completedWork(${currentJob.aplliedJobId})`
    );
    // console.log(`completedWork(${currentJob["location"]})`);
    startWork.innerHTML = "Completed";
    details.append(startWork);
  } else {
    let startWork = document.createElement("div");
    startWork.setAttribute("class", "startWork");
    startWork.setAttribute("onclick", "addstartWork()");
    startWork.innerHTML = "Start Work";
    details.append(startWork);
  }

  let data = document.createElement("div");
  data.setAttribute("class", "data");
  details.append(data);

  let jobSummary = document.createElement("div");
  jobSummary.setAttribute("class", "jobSummary");
  data.append(jobSummary);

  let title = document.createElement("p");
  title.setAttribute("class", "title");
  title.innerHTML = "Job Summary";
  jobSummary.append(title);

  let jobSummaryUL = document.createElement("ul");
  jobSummaryUL.remove();
  jobSummary.append(jobSummaryUL);

  console.log(currentJob["summary"]);
  let getSummary = currentJob["summary"];

  let currentSummary = getSummary.split(".");

  for (let i = 0; i < currentSummary.length - 1; i++) {
    let jobSummaryLi = document.createElement("li");
    jobSummaryLi.innerHTML = currentSummary[i];
    jobSummaryUL.append(jobSummaryLi);
  }

  let Qualification = document.createElement("div");
  Qualification.setAttribute("class", "Qualification");
  data.append(Qualification);

  let QualificationTitle = document.createElement("p");
  QualificationTitle.setAttribute("class", "title");
  QualificationTitle.innerHTML = "Qualifications";
  Qualification.append(QualificationTitle);

  let QualificationUl = document.createElement("ul");
  QualificationUl.remove();
  Qualification.append(QualificationUl);

  let getQualification = currentJob["Qualifications"];
  let currentQualification = getQualification.split(".");

  for (let i = 0; i < currentQualification.length - 1; i++) {
    let QualificationLi = document.createElement("li");
    QualificationLi.innerHTML = currentQualification[i];
    QualificationUl.append(QualificationLi);
  }

  let Responsibilitie = document.createElement("div");
  Responsibilitie.setAttribute("class", "Responsibilitie");
  data.append(Responsibilitie);

  let ResponsibilitieTitle = document.createElement("p");
  ResponsibilitieTitle.setAttribute("class", "title");
  ResponsibilitieTitle.innerHTML = "Responsibilities";
  Responsibilitie.append(ResponsibilitieTitle);

  let ResponsibilitieUl = document.createElement("ul");
  ResponsibilitieUl.remove();
  Responsibilitie.append(ResponsibilitieUl);

  let getResponsibility = currentJob["Responsibilities"];
  let currentResponsibility = getResponsibility.split(".");

  for (let i = 0; i < currentResponsibility.length - 1; i++) {
    let ResponsibilitieLi = document.createElement("li");
    ResponsibilitieLi.innerHTML = currentResponsibility[i];
    ResponsibilitieUl.append(ResponsibilitieLi);
  }

  document.querySelector(".secS").append(details);

  console.log("JS created");

  oncDetails();
}
function oncDetails() {
  event.preventDefault();
  let detail = document.querySelector(".secS");
  // console.log(detail + "test")
  detail.style.display = "block";

  let notificationEntire = document.querySelector(".notificationEntire");
  notificationEntire.style.marginLeft = "30%";
}

function closeDetail() {
  // event.preventDefault();
  let detail = document.querySelector(".secS");
  // console.log(detail + "test")
  detail.style.display = "none";

  let notificationEntire = document.querySelector(".notificationEntire");
  notificationEntire.style.marginLeft = "100%";
}

function aprove(aplliedJobId) {
  let findedObject = applyJob.find((A) => A.aplliedJobId == aplliedJobId);
  findedObject.notificationAction = "Approved";
  let index = applyJob.indexOf(aplliedJobId);
  applyJob[index] = findedObject;
  localStorage.setItem("apllyJob", JSON.stringify(applyJob));
}

function reject(aplliedJobId) {
  let findedObject = applyJob.find((A) => A.aplliedJobId == aplliedJobId);
  findedObject.notificationAction = "Rejected";
  let index = applyJob.indexOf(aplliedJobId);
  applyJob[index] = findedObject;
  localStorage.setItem("apllyJob", JSON.stringify(applyJob));
}

function filterAll() {
  location.href = "workerNotification.html?filter=All";
  // location.reload();
}

function filterNotActioned() {
  location.href = "workerNotification.html?filter=NotActioned";
  // location.reload();
}

function filterRejected() {
  location.href = "workerNotification.html?filter=Rejected";
  // location.reload();
}

function filterApproved() {
  location.href = "workerNotification.html?filter=Approved";
  // location.reload();
}

function filterStarted() {
  location.href = "workerNotification.html?filter=Started";
  // location.reload();
}

function urlNotif() {
  location.href = "workerHome.html?from=register&&type=worker&&All";
}

function addstartWork() {
  let crntJobId = JSON.parse(localStorage.getItem("CurrentNotificationId"));
  let applyJOb = JSON.parse(localStorage.getItem("apllyJob"));
  let selectedObj = applyJOb.find((F) => F.aplliedJobId == crntJobId);
  let index = applyJOb.indexOf(selectedObj);
  if (selectedObj["start"]) {
    return alert("Job already started");
  }

  selectedObj["start"] = true;
  applyJOb[index] = selectedObj;

  localStorage.setItem("apllyJob", JSON.stringify(applyJOb));
}

function completedWork(job) {
  console.log(job);

  getCompletedDetails.style.display = "block";
  document
    .getElementById("getCompletedDetails")
    .addEventListener("submit", (event) => {
      event.preventDefault();
      let applyJob = JSON.parse(localStorage.getItem("apllyJob"));
      let finded = applyJob.find((F) => F.aplliedJobId == job);
      let getCompletedDetails = document.querySelector(".getCompletedDetails");
      let form = {
        WorkCompleted: document.getElementById("WorkCompleted").value,
        Allrequirements: document.getElementById("Allrequirements").value,
        amountChanges: document.getElementById("amountChanges").value,
        changedAmount: document.getElementById("changedAmount").value,
        reason: document.getElementById("reason").value,
        paid: "Unpaid",
      };

      let arr = [];
      if (localStorage.getItem("completedJobs") != null) {
        arr = JSON.parse(localStorage.getItem("completedJobs"));
      }
      let completedJobs = Object.assign(finded, form);
      for (let i = 0; i < arr.length; i++) {
        if (
          arr[i]["aplliedJobId"] == completedJobs["aplliedJobId"] &&
          arr[i]["applierId"] == completedJobs["applierId"]
        ) {
          return toastr.error("This job is already completed");
        }
      }
      arr.push(completedJobs);
      localStorage.setItem("completedJobs", JSON.stringify(arr));
      toastr.success("Job Completed");
    });
}

let close = document.querySelector("#close");
close.addEventListener("click", (event) => {
  getCompletedDetails.style.display = "none";
});