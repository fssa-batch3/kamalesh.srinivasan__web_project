function filterAll() {
  try {
    location.href = "ownerNotification.html?from=logIn&&type=owner&filter=all";
  } catch (err) {
    console.error(err);
  }
}

function filterRead() {
  try {
    location.href =
      "ownerNotification.html?from=logIn&&type=owner&filter=readed";
  } catch (err) {
    console.error(err);
  }
}

function filterUnread() {
  try {
    location.href =
      "ownerNotification.html?from=logIn&&type=owner&filter=unreaded";
  } catch (err) {
    console.error(err);
  }
}

function urlNotif() {
  try {
    location.href = "ownerHome.html?from=logIn&&type=owner&filter=all";
  } catch (err) {
    console.error(err);
  }
}

function oncDetails() {
  try {
    event.preventDefault();
    let detail = document.querySelector(".secS");
    detail.style.display = "block";

    let notificationEntire = document.querySelector(".notificationEntire");
    notificationEntire.style.marginLeft = "30%";
  } catch (err) {
    console.error(err);
  }
}

function closeDetail() {
  try {
    let detail = document.querySelector(".secS");
    detail.style.display = "none";

    let notificationEntire = document.querySelector(".notificationEntire");
    notificationEntire.style.marginLeft = "100%";
  } catch (err) {
    console.error(err);
  }
}

function aprove(aplliedJobId) {
  try {
    let findedObject = applyJob.find((A) => A.aplliedJobId == aplliedJobId);
    findedObject.notificationAction = "Approved";
    let index = applyJob.indexOf(aplliedJobId);
    applyJob[index] = findedObject;
    localStorage.setItem("apllyJob", JSON.stringify(applyJob));
    location.reload();
  } catch (err) {
    console.error(err);
  }
}

function reject(aplliedJobId) {
  try {
    let findedObject = applyJob.find((A) => A.aplliedJobId == aplliedJobId);
    findedObject.notificationAction = "Rejected";
    let index = applyJob.indexOf(aplliedJobId);
    applyJob[index] = findedObject;
    localStorage.setItem("apllyJob", JSON.stringify(applyJob));
    location.reload();
  } catch (err) {
    console.error(err);
  }
}

function urlData() {
  try {
    location.href = "profile.html?from=logIn&&type=owner&filter=all";
  } catch (err) {
    console.error(err);
  }
}

function payment() {
  try {
    location.href = "payment.html" + location.search;
  } catch (err) {
    console.error(err);
  }
}

function readed() {
  try {
    let CurrentNotificationId = JSON.parse(
      localStorage.getItem("CurrentNotificationId")
    );
    let appliedJobs = JSON.parse(localStorage.getItem("apllyJob"));
    let findexObject = appliedJobs.find(
      (f) => f.aplliedJobId == CurrentNotificationId
    );
    let index = appliedJobs.indexOf(findexObject);
    console.log(findexObject);
    let readed = {
      readed: true,
    };

    console.log(readed);
    let AddedfindexObject = Object.assign(findexObject, readed);
    console.log(AddedfindexObject, "AddedfindexObject");
    console.log(index);
    appliedJobs[index] = AddedfindexObject;
    localStorage.setItem("apllyJob", JSON.stringify(appliedJobs));
    location.reload();
  } catch (err) {
    console.error(err);
  }
}

function setCurrentNotificationId(id) {
  try {
    localStorage.setItem("CurrentNotificationId", JSON.stringify(id));
    let CurrentId = JSON.parse(localStorage.getItem("CurrentNotificationId"));
    console.log(CurrentId);
    let currentJob = applyJob.find((A) => A["aplliedJobId"] == CurrentId);
    createDetails(currentJob);
  } catch (err) {
    console.error(err);
  }
}

// To create the deatail View of the clicked job
function createDetails(currentJob) {
  try {
    let initial = document.querySelector(".details");
    if (initial != null) {
      document.querySelector(".details").remove();
    }

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
  } catch (err) {
    console.error(err);
  }
}
