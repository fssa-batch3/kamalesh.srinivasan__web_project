function searchOwners() {
  let searchedData = [];
  let searched = document.getElementById("searchOwners").value;
  let bio = JSON.parse(localStorage.getItem("BIO"));

  for (let i = 0; i < bio.length; i++) {
    let finded = bio[i].includes(searched);
    if (finded == true) {
      searchedData.push(bio[i]);
    }
  }
}

function createSearchChatList() {
  let chatCard = document.createElement("div");
  chatCard.setAttribute("class", "chatCard");

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
  name.setAttribute("");
}
