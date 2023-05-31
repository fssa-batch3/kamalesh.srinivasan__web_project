function register(id, FullName, Email, UserName, Password, RPassword) {
  try {
    event.preventDefault();
    let userData = [];
    if (localStorage.getItem("register") != null) {
      userData = JSON.parse(localStorage.getItem("register"));
    }
    let match = false;

    if (Password != RPassword) {
      alert("Password and Repeat password not match");
    } else {
      for (let i = 0; i < userData.length; i++) {
        if (Email == userData[i]["Email"]) {
          match = true;
        }
      }
    }

    if (match == true) {
      alert("Email is already Exist");
    } else {
      let userObj = {
        FullName,
        Email,
        UserName,
        Password,
        RPassword,
        id,
      };
      console.log(userObj);

      userData.push(userObj);
      const str = JSON.stringify(userData);
      localStorage.setItem("register", str);
      console.log(str);
      window.location.href = "Bio.html";
    }
  } catch (err) {
    console.error(err);
  }
}

// }
