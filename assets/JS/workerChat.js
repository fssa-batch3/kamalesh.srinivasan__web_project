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
