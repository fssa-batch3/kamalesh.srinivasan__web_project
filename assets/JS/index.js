function profileImg(Fname, Lname) {
  try {
    return (
      `https://ui-avatars.com/api/?name=` +
      Fname +
      " " +
      Lname +
      `&&background=random&&rounded=true`
    );
  } catch (err) {
    console.error(err);
  }
}

function goRight() {
  try {
    document.querySelector(".scrollmenu").scrollLeft += 786;
  } catch (err) {
    console.error(err);
  }
}

function goLeft() {
  try {
    document.querySelector(".scrollmenu").scrollLeft -= 786;
  } catch (err) {
    console.error(err);
  }
}

function TrendingJobsGoright() {
  try {
    document.querySelector(".scrollmenu_1").scrollLeft += 786;
  } catch (err) {
    console.error(err);
  }
}

function TrendingJobsGoLeft() {
  try {
    document.querySelector(".scrollmenu_1").scrollLeft -= 786;
  } catch (err) {
    console.error(err);
  }
}

function workerLogin() {
  try {
    location.href = "pages/Register.html?type=worker";
  } catch (err) {
    console.error(err);
  }
}

function ownerlogin() {
  try {
    location.href = "pages/Register.html?type=owner";
  } catch (err) {
    console.error(err);
  }
}

// Popup registerType
function registerType() {
  try {
    document.querySelector("main").style.display = "none";

    console.log("registerType");
    let type = document.createElement("div");
    type.className = "registerType";

    let typeBtn = document.createElement("div");
    typeBtn.setAttribute("class", "typeBtn");
    type.append(typeBtn);

    let OwnerType = document.createElement("button");
    OwnerType.setAttribute("value", "Owner");
    OwnerType.setAttribute("id", "owner");
    OwnerType.setAttribute("onclick", "ownerlogin()");
    OwnerType.innerHTML = "Owner";
    typeBtn.append(OwnerType);

    let workerType = document.createElement("button");
    workerType.setAttribute("value", "Worker");
    workerType.setAttribute("onclick", "workerLogin()");
    workerType.setAttribute("id", "worker");
    workerType.innerHTML = "Worker";
    typeBtn.append(workerType);

    let cancel = document.createElement("button");
    cancel.innerHTML = "Cancel";
    cancel.setAttribute("onclick", "cancel()");
    cancel.setAttribute("class", "Cancel");
    cancel.setAttribute("value", "Cancel");
    type.append(cancel);

    document.querySelector("body").append(type);
  } catch (err) {
    console.error(err);
  }
}

function cancel() {
  try {
    document.querySelector("main").style.display = "block";
    document.querySelector(".registerType").remove();
  } catch (err) {
    console.error(err);
  }
}
