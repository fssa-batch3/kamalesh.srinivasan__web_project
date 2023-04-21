function searchOwners() {
  let searchedData = [];
  let searched = document.getElementById("searchOwners").value;
  let bio = JSON.parse(localStorage.getItem("BIO"));

  for (let i = 0; i < bio.length; i++) {
    console.log(bio[i]);
    // let finded = false;
    // let finded = bio.filter((F) => F.FN == searched);
    let pattern = "/" + searched + "/i";
    // console.log(pattern);
    // console.log(bio[i]["FN"]);
    let finded = false;
    finded = bio[i]["Expect_in"].includes(searched);

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
  createSearchChatList(searchedData);
}

function createSearchChatList(data) {
  // Get URL Params
  let url = location.search;
  let urlParams = new URLSearchParams(url);
  let from = urlParams.get("from");
  console.log(from);

  // Create chat list

  document.querySelector(".recentChats").innerHTML = null;
  for (let i = 0; i < data.length; i++) {
    let cntGmail;
    if (from == "logIn") {
      let Login = JSON.parse(localStorage.getItem("Login"));
      cntGmail = Login.Email;
    } else {
      let register = JSON.parse(localStorage.getItem("register"));
      cntGmail = register[register.length - 1].Email;
    }

    if (cntGmail != data[i].Email) {
      let cntEmail = JSON.stringify(data[i]["Email"]);
      let chatCard = document.createElement("div");
      chatCard.setAttribute("class", "chatCard");
      chatCard.setAttribute("onclick", `deatilChatName(${cntEmail})`);

      let chatCardImg = document.createElement("div");
      chatCardImg.setAttribute("class", "chatCardImg");
      chatCard.append(chatCardImg);

      let workerImage = document.createElement("img");
      workerImage.setAttribute("src", "../assets/Images/avatar (6).svg");
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
}

// Name of the DeatilView chat

function deatilChatName(email) {
  let data = JSON.parse(localStorage.getItem("BIO"));
  let finded = data.find((F) => F.Email == email);

  document.querySelector(".chatDeatilName").innerHTML =
    finded["FN"] + " " + finded["LN"];

  localStorage.setItem("cuntDVChat", JSON.stringify(email));
  searchedChat();
}

function searchedChat() {
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
    detailViewChatObj = JSON.parse(localStorage.getItem("workerRegister")).find(
      (F) => F.Email == detailViewChat
    );
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
  Obj = JSON.parse(localStorage.getItem("chatData"));

  let id = cntUser + "to" + detailViewChatObj.id;
  let chatData = Obj[id];
  if (chatData == undefined) {
    let SplitId = id.split("to");
    let reverseArray = SplitId[1] + "to" + SplitId[0];
    // let JoinReverse = reverseArray.join("");
    chatData = Obj[reverseArray];
    console.log(reverseArray);
  }
  console.log(chatData);
  document.querySelector(".chat").innerHTML = null;
  for (let i = 0; i < chatData.length; i++) {
    let include = chatData[i].includes(id);

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
}
