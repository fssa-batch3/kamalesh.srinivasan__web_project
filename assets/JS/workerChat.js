function searchOwners() {
  try {
    let searchedData = [];
    let searched = document.getElementById("searchOwners").value;
    let bio = JSON.parse(localStorage.getItem("BIO"));

    for (let i = 0; i < bio.length; i++) {
      console.log(bio[i]);
      let finded = false;
      finded = bio[i]["Expect_in"].includes(searched);
      console.log(finded);
      if (searched == bio[i]["LN"]) {
        finded = true;
      } else if (searched == bio[i]["FN"]) {
        finded = true;
      }

      if (finded == true) {
        searchedData.push(bio[i]);
      }
      console.log(finded);
    }
    if (searchedData[0] != null || undefined) {
      createSearchChatList(searchedData);
    } else {
      // console.log("log");
      console.log(searchedData);
      toastr.error("User Not Found");
    }
  } catch (err) {
    console.error(err);
  }
}

function createSearchChatList(data) {
  try {
    // Get URL Params
    // Create chat list

    document.querySelector(".recentChats").innerHTML = null;

    for (let i = 0; i < data.length; i++) {
      if (cntGmail != data[i].Email) {
        let cntEmail = JSON.stringify(data[i]["Email"]);
        let chatCard = document.createElement("div");
        chatCard.setAttribute("class", "chatCard");
        chatCard.setAttribute("onclick", `deatilChatName(${cntEmail})`);

        let chatCardImg = document.createElement("div");
        chatCardImg.setAttribute("class", "chatCardImg");
        chatCard.append(chatCardImg);

        let workerImage = document.createElement("img");
        workerImage.setAttribute(
          "src",
          profileImg(data[i]["FN"], data[i]["LN"])
        );
        workerImage.setAttribute("alt", "workerImage");
        chatCardImg.append(workerImage);

        let middle = document.createElement("div");
        middle.setAttribute("class", "middle");
        chatCard.append(middle);

        let name = document.createElement("p");
        name.setAttribute("class", "name");
        name.innerHTML = data[i]["FN"] + data[i]["LN"];
        middle.append(name);

        let expertChat = document.createElement("p");
        expertChat.setAttribute("class", "expertChat");
        expertChat.innerHTML = data[i]["Expect_in"];
        middle.append(expertChat);

        document.querySelector(".recentChats").append(chatCard);
      }
    }
  } catch (err) {
    console.error(err);
  }
}

// Name of the DeatilView chat

function deatilChatName(email) {
  try {
    let data = JSON.parse(localStorage.getItem("BIO"));
    let finded = data.find((F) => F.Email == email);
    console.log(finded);
    document.querySelector(".chatDeatilName").innerHTML =
      finded["FN"] + " " + finded["LN"];

    if (document.querySelector(".middleProfileImage") != null) {
      document.querySelector(".middleProfileImage").remove();
    }

    let middleProfileImage = document.createElement("img");
    middleProfileImage.setAttribute(
      "src",
      profileImg(finded["FN"], finded["LN"])
    );
    middleProfileImage.setAttribute("alt", "Image");
    middleProfileImage.setAttribute("class", "middleProfileImage");
    document.querySelector(".chat_profile").prepend(middleProfileImage);

    localStorage.setItem("cuntDVChat", JSON.stringify(email));
    chatProfileDetails(finded);

    searchedChat();
  } catch (err) {
    console.error(err);
  }
}

function chatProfileDetails(finded) {
  try {
    document.querySelector(".rightName").innerHTML =
      finded["FN"] + " " + finded["LN"];

    let chatDetailImg = document.createElement("img");
    chatDetailImg.setAttribute("src", profileImg(finded["FN"], finded["LN"]));
    chatDetailImg.setAttribute("alt", "Image");
    document.querySelector(".rightProfile").innerHTML = null;
    document.querySelector(".rightProfile").append(chatDetailImg);

    document.querySelector(".expert").innerHTML = finded["Expect_in"];

    // Total Amount Paid by owners
    let workerReg = JSON.parse(localStorage.getItem("workerRegister"));
    let ownerReg = JSON.parse(localStorage.getItem("register"));
    let currentChatEmail = JSON.parse(localStorage.getItem("cuntDVChat"));
    let workerRegFinded = workerReg.find((F) => F.Email == currentChatEmail);

    let mergedReg = workerReg.concat(ownerReg);
    console.log(mergedReg);
    let applyJob = JSON.parse(localStorage.getItem("apllyJob"));
    let currentChatID = mergedReg.find((F) => F.Email == currentChatEmail);
    console.log(currentChatID);
    let currentChatIDJobs;
    if (workerRegFinded != undefined || null) {
      currentChatIDJobs = applyJob.filter(
        (F) => F.applierId == currentChatID.id
      );
    } else {
      currentChatIDJobs = applyJob.filter((F) => F.ownerId == currentChatID.id);
    }

    let currentChatIDJPaid = currentChatIDJobs.filter(
      (F) => F["paid"] == "Paid"
    );
    console.log(currentChatIDJPaid);
    let Amounts = [];
    let totalPaidAmount = 0;
    for (let i = 0; i < currentChatIDJPaid.length; i++) {
      Amounts.push(currentChatIDJPaid[i]["paidAmount"]);
      totalPaidAmount += parseInt(currentChatIDJPaid[i]["paidAmount"]);
    }
    if (workerRegFinded != undefined || null) {
      if (totalPaidAmount != 0) {
        document.querySelector(".chatterType").innerText = "Worker";
        document.querySelector(".totalAmountPaid").innerHTML =
          "Total Amount Paid by owners : Rs. " + totalPaidAmount;

        //Highest Amount Paid by owners

        document.querySelector(".highAmount").innerHTML =
          "Highest Amount Paid by owners : Rs. " + Math.max(...Amounts);

        document.querySelector(".lowAmount").innerHTML =
          "Lowset Amount Paid by owners : Rs. " + Math.min(...Amounts);
      } else {
        document.querySelector(".chatterType").innerText = "Worker";
        document.querySelector(".totalAmountPaid").innerHTML =
          "Total Amount Paid by owners : Rs. " + 0;

        //Highest Amount Paid by owners

        document.querySelector(".highAmount").innerHTML =
          "Highest Amount Paid by owners : Rs. " + 0;

        document.querySelector(".lowAmount").innerHTML =
          "Lowset Amount Paid by owners : Rs. " + 0;
      }
    } else {
      if (totalPaidAmount != 0) {
        document.querySelector(".chatterType").innerText = "Owner";

        document.querySelector(".totalAmountPaid").innerHTML =
          "Total Amount Paid to workers : Rs. " + totalPaidAmount;

        //Highest Amount Paid by owners

        document.querySelector(".highAmount").innerHTML =
          "Highest Amount Paid to worker : Rs. " + Math.max(...Amounts);

        document.querySelector(".lowAmount").innerHTML =
          "Lowset Amount Paid to worker : Rs. " + Math.min(...Amounts);
      } else {
        document.querySelector(".chatterType").innerText = "Owner";

        document.querySelector(".totalAmountPaid").innerHTML =
          "Total Amount Paid to workers : Rs. " + 0;

        //Highest Amount Paid by owners

        document.querySelector(".highAmount").innerHTML =
          "Highest Amount Paid to worker : Rs. " + 0;

        document.querySelector(".lowAmount").innerHTML =
          "Lowset Amount Paid to worker : Rs. " + 0;
      }
    }

    //No of jobs completed

    document.querySelector(".noOfJobs").innerHTML =
      "Number of jobs completed : " + currentChatIDJPaid.length + " Jobs";

    // No of pending jobs

    let pendingJobs = currentChatIDJobs.length - currentChatIDJPaid.length;
    document.querySelector(".pendingJobs").innerHTML =
      "Number of pending jobs : " + pendingJobs + " Jobs";
  } catch (err) {
    console.error(err);
  }
}

function searchedChat() {
  try {
    // Get URL Params

    let url = location.search;
    let urlParams = new URLSearchParams(url);
    let type = urlParams.get("type");
    let from = urlParams.get("from");
    console.log(type, from);

    let detailViewChat = JSON.parse(localStorage.getItem("cuntDVChat"));
    let detailViewChatObj = JSON.parse(localStorage.getItem("register")).find(
      (F) => F.Email == detailViewChat
    );
    if (detailViewChatObj == null || detailViewChatObj == undefined) {
      detailViewChatObj = JSON.parse(
        localStorage.getItem("workerRegister")
      ).find((F) => F.Email == detailViewChat);
    }

    // get the id's
    let cntUser;
    if (type == "owner" && from == "register") {
      let ownerReg = JSON.parse(localStorage.getItem("register"));
      cntUser = ownerReg[ownerReg.length - 1].id;
    } else if (type == "worker" && from == "register") {
      let ownerReg = JSON.parse(localStorage.getItem("workerRegister"));
      cntUser = ownerReg[ownerReg.length - 1].id;
    } else if (from == "logIn") {
      let LogIn = JSON.parse(localStorage.getItem("Login"));
      cntUser = LogIn.id;
    }
    let Obj = JSON.parse(localStorage.getItem("chatData"));

    let id = cntUser + "to" + detailViewChatObj.id;
    let chatData = Obj[id];
    if (chatData == undefined) {
      let SplitId = id.split("to");
      console.log(SplitId);
      let reverseArray = SplitId[1] + "to" + SplitId[0];
      chatData = Obj[reverseArray];
      console.log(reverseArray);
    }
    console.log(chatData);
    document.querySelector(".chat").innerHTML = null;
    for (let i = 0; i < chatData.length; i++) {
      // Split the message
      let splitted = chatData[i].split("-");
      // Create left message
      let Chat = document.createElement("p");
      Chat.innerHTML = splitted[0];
      let fullDiv = document.createElement("div");
      if (cntUser == splitted[1]) {
        Chat.setAttribute("class", "rightChat");
        fullDiv.setAttribute("class", "rightChatDiv");
      } else {
        Chat.setAttribute("class", "leftChat");
        fullDiv.setAttribute("class", "leftChatDiv");
      }

      fullDiv.append(Chat);

      document.querySelector(".chat").append(fullDiv);
      document.querySelector(".chat").scrollTo(0, 1000000);
    }
  } catch (err) {
    console.error(err);
  }
}
