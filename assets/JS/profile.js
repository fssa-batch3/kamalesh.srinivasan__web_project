function back() {
    try {
        if (type == "owner") {
          if (from == "logIn") {
            location.href = "OwnerHome.html?from=logIn&&type=owner";
          } else {
            location.href = "OwnerHome.html?from=register&&type=owner";
          }
        }
        if (type == "worker") {
          if (from == "logIn") {
            location.href = "workerHome.html?from=logIn&&type=worker";
          } else {
            location.href = "workerHome.html?from=register&&type=worker";
          }
        }
    }
    catch(err) {
                console.error(err);
    }
}

function navEdit() {
    try {
        location.href =
          "editProfile.html" + location.search + "&&email=" + userBio["Email"];
    }
    catch(err) {
                console.error(err);
    }
}

function deleteUser() {]
    try {
        let email = prompt("Enter your email");
      
        let password = prompt("Enter your password");
        let register;
        let BIO = JSON.parse(localStorage.getItem("BIO"));
        if (type == "owner") {
          register = JSON.parse(localStorage.getItem("register"));
        } else {
          register = JSON.parse(localStorage.getItem("workerRegister"));
        }
        let login = JSON.parse(localStorage.getItem("Login"));
        let allEmail = JSON.parse(localStorage.getItem("allEmail"));
      
        if (localStorage.getItem("BIO") != null) {
          console.log(email);
          let FindedEmail = BIO.find((B) => B["Email"] == email);
      
          if (FindedEmail == undefined) {
            return alert("User credentials not match");
          }
      
          let bioIndex = BIO.indexOf(FindedEmail);
          console.log(bioIndex);
          BIO.splice(bioIndex, 1);
          localStorage.setItem("BIO", JSON.stringify(BIO));
        }
      
        if (localStorage.getItem("allEmail") != null) {
          console.log(email);
          let FindedallEmail = allEmail.find((B) => B["Email"] == email);
      
          if (allEmail == undefined) {
            return alert("User credentials not match");
          }
      
          let allEmailIndex = allEmail.indexOf(FindedallEmail);
          console.log(allEmailIndex);
          allEmail.splice(allEmailIndex, 1);
          localStorage.setItem("allEmail", JSON.stringify(allEmail));
        }
      
        if (localStorage.getItem("Login") != null) {
          console.log("test");
          // let FindedEmail = login.find(L => L["Email"] == email);
          // let loginIndex = login.indexOf(FindedEmail);
          // console.log(loginIndex)
          // login.splice(loginIndex, 1);
          localStorage.setItem("Login", "");
        }
      
        if (localStorage.getItem("register") != null) {
          let FindReg = register.find((R) => R["Email"] == email);
          let registerIndex = register.indexOf(FindReg);
          console.log(registerIndex);
          register.splice(registerIndex, 1);
          localStorage.setItem("register", JSON.stringify(register));
          location.href = "../index.html";
        } else {
          return alert("User credentials not match");
        }
    }
    catch(err) {
                console.error(err);
    }
}
