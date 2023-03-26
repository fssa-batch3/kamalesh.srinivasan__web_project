//  Detailed View

function detailView(currentData) {
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
                    <div class="detailsworkerName">TETS</div>
                    <div class="Jid">2345678765432</div>
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
}

function payPopup() {
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

  let copyUPI = document.createElement("button");
  copyUPI.setAttribute("value", "34243y554y4352454");
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
}

function copyUPI() {
  let copyText = document.getElementById("CopyURL");
  console.log(copyText);
  navigator.clipboard.writeText(copyText.value);
}

function cancel() {
  let bg = document.querySelector(".listView");
  let bgd = document.querySelector(".detailView");
  console.log(bg);
  bg.style.filter = "none";
  bgd.style.filter = "none";
  let popUp = document.querySelector(".popUp");
  popUp.remove();
}

function payCash() {
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
  form.append(amountbox);

  let uploadPhoto = document.createElement("div");
  uploadPhoto.setAttribute("id", "uploadPhoto");
  uploadPhoto.innerHTML = "Take photo like paying to the worker";
  form.append(uploadPhoto);

  let uploadPhotobox = document.createElement("input");
  uploadPhotobox.setAttribute("id", "uploadPhotobox");
  uploadPhotobox.setAttribute("type", "file");
  form.append(uploadPhotobox);

  let br = document.createElement("br");
  form.append(br);

  let cashSubmit = document.createElement("button");
  cashSubmit.setAttribute("type", "submit");
  cashSubmit.innerHTML = "Piad";
  //   cashSubmit.setAttribute("id", "cashSubmit");
  cashSubmit.setAttribute("onclick", "cashSubmit()");
  form.append(cashSubmit);

  let cashCancel = document.createElement("button");
  cashCancel.setAttribute("type", "reset");
  cashCancel.innerHTML = "Cancel";
  cashCancel.setAttribute("onclick", "cancelCashform()");
  form.append(cashCancel);
  cashCard.append(form);
}

function cancelCashform() {
  event.preventDefault();
  let cashCard = document.querySelector(".cashCard");
  cashCard.remove();
}

function cashSubmit() {
  event.preventDefault();
  let paymentJob = JSON.parse(localStorage.getItem("currentDataPayDetail"));
  let completedJobs = JSON.parse(localStorage.getItem("completedJobs"));

  let currentPaymentJob = completedJobs.find(
    (F) => F.paymentJob == completedJobs
  );
  console.log(currentPaymentJob);
}
