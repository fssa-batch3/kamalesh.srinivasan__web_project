//  Detailed View

function detailView(currentData) {
  try {
    console.log(currentData);
    localStorage.setItem("currentDataPayDetail", JSON.stringify(currentData));
    let completed = JSON.parse(localStorage.getItem("completedJobs"));
    let finded = completed.find((F) => F.aplliedJobId == currentData);
    let detailSec = document.querySelector(".detailSec");

    console.log(finded);
    if (document.querySelector(".detailView") != null) {
      document.querySelector(".detailView").remove();
    }
    let detailView = document.createElement("div");
    detailView.setAttribute("class", "detailView");
    detailView.style.display = "block";
    detailView.innerHTML = `<div class="detailProfile">
                  <img src="../assets/Images/avatar (4).svg" alt="image" />
                  <div>
                      <div class="detailsworkerName">${finded["title"]}</div>
                      <div class="Jid">${finded["jobID"]}</div>
                  </div>
              </div>
  
              <div class="bar">
  
              </div>
  
              <div class="jobdetails">
                  <div class="workStatus">
                      <p> Work Completed</p>
                      <div>(${finded["WorkCompleted"]})</div>
                  </div>
  
                  <div class="amountChanged">
                      <p>Amount Changed</p>
                      <div>(${finded["amountChanges"]})</div>
                  </div>
  
                  <div class="AmtChangeDetails">
                      <p>Details For amount changed</p>
                      <div>${finded["reason"]}</div>
  
                  </div>
  
                  <div class="paymentStatus">
                      <p>Payment Status</p>
                      <div>${finded["paid"]}</div>
                  </div>
  
                  <div class="PaymentDetailsButtons">
                      <button id="cancel" onclick="copyUPI()">Cancel</button>
                      <button id="pay" onclick="payPopup()">Pay</button>
                  </div>`;
    console.log(detailView);
    console.log(detailSec);
    detailSec.append(detailView);
  } catch (err) {
    console.error(err);
  }
}

function payPopup() {
  try {
    let bg = document.querySelector(".listView");
    let bgd = document.querySelector(".detailView");
    console.log(bg);
    bg.style.filter = "blur(8px)";
    bgd.style.filter = "blur(8px)";
    let popUp = document.createElement("div");
    popUp.setAttribute("class", "popUp");

    let message = document.createElement("div");
    message.innerHTML =
      "If you want to pay for this work Copy the UPI and send the amount using Gpay,Paytm or Phonepe ";
    popUp.append(message);
    message.setAttribute("class", "message");

    let buttons = document.createElement("div");
    buttons.setAttribute("class", "popUpBtn");
    popUp.append(buttons);

    // get the current worker's upi id
    let cntAppliedJobId = JSON.parse(
      localStorage.getItem("currentDataPayDetail")
    );
    let applyJob = JSON.parse(localStorage.getItem("apllyJob"));
    let cntApplyJob = applyJob.find((F) => F.aplliedJobId == cntAppliedJobId);
    let workerReg = JSON.parse(localStorage.getItem("workerRegister"));
    let cntworkerReg = workerReg.find((F) => F.id == cntApplyJob.applierId);
    let bio = JSON.parse(localStorage.getItem("BIO"));
    let cntBio = bio.find((F) => F.Email == cntworkerReg.Email);

    //
    let copyUPI = document.createElement("button");
    copyUPI.setAttribute("value", cntBio["upi"]);
    copyUPI.innerHTML = "Copy UPI";
    copyUPI.setAttribute("id", "CopyURL");
    copyUPI.setAttribute("onclick", "copyUPI()");
    buttons.append(copyUPI);

    let payCash = document.createElement("button");
    payCash.innerHTML = "Cash";
    payCash.setAttribute("class", "paycash");
    payCash.setAttribute("onclick", "payCash()");
    buttons.append(payCash);

    let paid = document.createElement("button");
    paid.innerHTML = "Paid";
    paid.setAttribute("class", "paid");
    paid.setAttribute("onclick", "paid()");
    buttons.append(paid);

    let cancel = document.createElement("button");
    cancel.innerHTML = "Cancel";
    cancel.setAttribute("class", "cancel");
    cancel.setAttribute("onclick", "cancel()");
    buttons.append(cancel);
    document.querySelector("body").append(popUp);
  } catch (err) {
    console.error(err);
  }
}

function copyUPI() {
  try {
    let copyText = document.getElementById("CopyURL");
    console.log(copyText);
    navigator.clipboard.writeText(copyText.value);
    copyText.innerHTML = "Coppied";
  } catch (err) {
    console.error(err);
  }
}

function cancel() {
  try {
    let bg = document.querySelector(".listView");
    let bgd = document.querySelector(".detailView");
    console.log(bg);
    bg.style.filter = "none";
    bgd.style.filter = "none";
    let popUp = document.querySelector(".popUp");
    popUp.remove();
  } catch (err) {
    console.error(err);
  }
}

function payCash() {
  try {
    if (document.querySelector(".cashCard") != undefined) {
      document.querySelector(".cashCard").remove();
    }

    if (document.querySelector("#paidFrom") != undefined) {
      document.querySelector("#paidFrom").remove();
    }
    let cashCard = document.createElement("div");
    cashCard.setAttribute("class", "cashCard");
    let popUp = document.querySelector(".popUp");
    popUp.append(cashCard);

    let form = document.createElement("form");
    form.setAttribute("id", "caseForm");

    let amounttext = document.createElement("div");
    amounttext.innerHTML = "Amount: ";
    form.append(amounttext);

    let amountbox = document.createElement("input");
    amountbox.setAttribute("id", "amountbox");
    amountbox.setAttribute("Required", "");
    form.append(amountbox);

    let uploadPhoto = document.createElement("div");
    uploadPhoto.setAttribute("id", "uploadPhoto");
    uploadPhoto.innerHTML = "Take photo like paying to the worker";
    form.append(uploadPhoto);

    let uploadPhotobox = document.createElement("input");
    uploadPhotobox.setAttribute("id", "uploadPhotobox");
    uploadPhotobox.setAttribute("type", "file");
    uploadPhotobox.setAttribute("Required", "");
    form.append(uploadPhotobox);

    let br = document.createElement("br");
    form.append(br);

    let cashSubmit = document.createElement("button");
    cashSubmit.setAttribute("type", "submit");
    cashSubmit.innerHTML = "Piad";
    cashSubmit.setAttribute("onclick", "cashSubmit()");
    form.append(cashSubmit);

    let cashCancel = document.createElement("button");
    cashCancel.setAttribute("type", "reset");
    cashCancel.innerHTML = "Cancel";
    cashCancel.setAttribute("onclick", "cancelCashform()");
    form.append(cashCancel);
    cashCard.append(form);
  } catch (err) {
    console.error(err);
  }
}

function cancelCashform() {
  try {
    event.preventDefault();
    let cashCard = document.querySelector(".cashCard");
    cashCard.remove();
  } catch (err) {
    console.error(err);
  }
}

function cashSubmit() {
  try {
    event.preventDefault();
    let paymentJob = JSON.parse(localStorage.getItem("currentDataPayDetail"));
    let completedJobs = JSON.parse(localStorage.getItem("completedJobs"));
    let paidAmount = document.getElementById("amountbox").value;
    let refImage = document.getElementById("uploadPhotobox").value;

    let currentPaymentJob = completedJobs.find(
      (F) => F.aplliedJobId == paymentJob
    );
    console.log(currentPaymentJob);
    if (currentPaymentJob["paid"] != "Paid") {
      //    add payment datas in completed jobs
      currentPaymentJob["paid"] = "Paid";
      currentPaymentJob["paidAmount"] = paidAmount;
      currentPaymentJob["refImage"] = refImage;

      //    add payment datas in apllyJob
      let applyJobs = JSON.parse(localStorage.getItem("apllyJob"));
      let cntApplyJob = applyJobs.find(
        (F) => F.aplliedJobId == currentPaymentJob.aplliedJobId
      );
      let cntApplyJobIndex = applyJobs.indexOf(cntApplyJob);

      cntApplyJob["paid"] = "Paid";
      cntApplyJob["paidAmount"] = paidAmount;
      cntApplyJob["refImage"] = refImage;

      applyJobs[cntApplyJobIndex] = cntApplyJob;
      localStorage.setItem("apllyJob", JSON.stringify(applyJobs));

      // place a completed job

      console.log(currentPaymentJob);
      let index = completedJobs.indexOf(currentPaymentJob);
      completedJobs[index] = currentPaymentJob;
      localStorage.setItem("completedJobs", JSON.stringify(completedJobs));
      console.log(currentPaymentJob);
      cancelCashform();
      return toastr.success("You paid to " + currentPaymentJob["applierName"]);
    } else {
      return toastr.error(
        "You already paid to " +
          currentPaymentJob["applierName"] +
          " for this job"
      );
    }
  } catch (err) {
    console.error(err);
  }
}

function paid() {
  try {
    if (document.querySelector(".cashCard") != undefined) {
      document.querySelector(".cashCard").remove();
    }

    if (document.querySelector("#paidFrom") != undefined) {
      document.querySelector("#paidFrom").remove();
    }
    let form = document.createElement("form");
    form.setAttribute("id", "paidFrom");

    let inputAmount = document.createElement("input");
    inputAmount.setAttribute("id", "amountboxUPI");
    inputAmount.setAttribute("required", "");
    inputAmount.setAttribute("placeholder", "Enter the paid amount");
    form.append(inputAmount);

    let inputAmountimglabel = document.createElement("label");
    inputAmountimglabel.innerHTML = "Upload the payment screnshot";
    form.append(inputAmountimglabel);

    let inputAmountimg = document.createElement("input");
    inputAmountimg.setAttribute("id", "uploadPhotoboxUPI");
    inputAmountimg.setAttribute("required", "");
    inputAmountimg.setAttribute("type", "file");
    form.append(inputAmountimg);

    let submitButton = document.createElement("button");
    submitButton.setAttribute("id", "subbtn");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("onclick", "paidDetails()");
    submitButton.innerHTML = "Submit";
    form.append(submitButton);

    let cancelButton = document.createElement("button");
    cancelButton.setAttribute("id", "cancelButton");
    cancelButton.setAttribute("type", "reset");
    cancelButton.setAttribute("onclick", "cancelPaid()");
    cancelButton.innerHTML = "Cancel";
    form.append(cancelButton);

    document.querySelector(".message").append(form);
  } catch (err) {
    console.error(err);
  }
}

function cancelPaid() {
  try {
    document.getElementById("paidFrom").remove();
  } catch (err) {
    console.error(err);
  }
}

function reqList() {
  try {
    location.href = "Ownerhome.html" + location.search;
  } catch (err) {
    console.error(err);
  }
}

function paidDetails() {
  try {
    event.preventDefault();
    let paymentJob = JSON.parse(localStorage.getItem("currentDataPayDetail"));
    let completedJobs = JSON.parse(localStorage.getItem("completedJobs"));
    let paidAmount = document.getElementById("amountboxUPI").value;
    let refImage = document.getElementById("uploadPhotoboxUPI").value;

    let currentPaymentJob = completedJobs.find(
      (F) => F.aplliedJobId == paymentJob
    );

    if (currentPaymentJob["paid"] != "Paid") {
      //    add payment datas in completed jobs
      currentPaymentJob["paid"] = "Paid";
      currentPaymentJob["paidAmount"] = paidAmount;
      currentPaymentJob["refImage"] = refImage;

      //    add payment datas in apllyJob
      let applyJobs = JSON.parse(localStorage.getItem("apllyJob"));
      let cntApplyJob = applyJobs.find(
        (F) => F.aplliedJobId == currentPaymentJob.aplliedJobId
      );
      let cntApplyJobIndex = applyJobs.indexOf(cntApplyJob);

      cntApplyJob["paid"] = "Paid";
      cntApplyJob["paidAmount"] = paidAmount;
      cntApplyJob["refImage"] = refImage;

      applyJobs[cntApplyJobIndex] = cntApplyJob;
      localStorage.setItem("apllyJob", JSON.stringify(applyJobs));

      // place a completed job

      console.log(currentPaymentJob);
      let index = completedJobs.indexOf(currentPaymentJob);
      completedJobs[index] = currentPaymentJob;
      localStorage.setItem("completedJobs", JSON.stringify(completedJobs));
      console.log(currentPaymentJob);
      cancelPaid();
      return toastr.success("You paid to " + currentPaymentJob["applierName"]);
    } else {
      return toastr.error(
        "You already paid to " +
          currentPaymentJob["applierName"] +
          " for this job"
      );
    }
  } catch (err) {
    console.error(err);
  }
}

function notification() {
  try {
    location.href = "ownerNotification.html" + location.search;
  } catch (err) {
    console.error(err);
  }
}

function profile() {
  try {
    location.href = "profile.html" + location.search;
  } catch (err) {
    console.error(err);
  }
}

function allJobs() {
  try {
    if (paymentfilter == null) {
      location.href = location + "&&paymentfilter=all";
    } else {
      urlParams.set("paymentfilter", "all");
      location.href = "payment.html?" + urlParams;
    }
  } catch (err) {
    console.error(err);
  }
}

function Fpaid() {
  try {
    if (paymentfilter == null) {
      location.href = location + "&&paymentfilter=paid";
    } else {
      urlParams.set("paymentfilter", "paid");
      location.href = "payment.html?" + urlParams;
    }
  } catch (err) {
    console.error(err);
  }
}

function unPaid() {
  try {
    if (paymentfilter == null) {
      location.href = location + "&&paymentfilter=unpaid";
    } else {
      urlParams.set("paymentfilter", "unpaid");
      location.href = "payment.html?" + urlParams;
    }
  } catch (err) {
    console.error(err);
  }
}
