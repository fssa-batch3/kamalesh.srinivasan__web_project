function forgotPwdEmail() {
  try {
    //  Creating a email get div

    document.querySelector("body").innerHTML = null;

    let getEmailDiv = document.createElement("form");
    getEmailDiv.setAttribute("class", "getEmailDiv");

    let title = document.createElement("h2");
    title.innerHTML = "Forgot Password";
    getEmailDiv.append(title);

    let enterEmail = document.createElement("input");
    enterEmail.setAttribute("class", "enterEmail");
    enterEmail.setAttribute("placeholder", "Enter your Email");
    enterEmail.setAttribute("required", "");
    getEmailDiv.append(enterEmail);

    let buttons = document.createElement("div");
    buttons.setAttribute("class", "buttons");

    let cancel = document.createElement("button");
    cancel.setAttribute("class", "cancel");
    cancel.setAttribute("onclick", "cancel()");
    cancel.innerHTML = "Cancel";
    buttons.append(cancel);

    let sendEmail = document.createElement("button");
    sendEmail.setAttribute("class", "sendEmail");
    sendEmail.setAttribute("onclick", "sendMail()");
    sendEmail.setAttribute("type", "submit");
    sendEmail.innerHTML = "Send Email";
    buttons.append(sendEmail);

    getEmailDiv.append(buttons);

    document.querySelector("body").append(getEmailDiv);
  } catch (err) {
    console.error(err);
  }
}

// Send mail for the forgotPassword

function sendMail() {
  event.preventDefault();
  // OTP generation

  localStorage.setItem(
    "forgotEmail",
    JSON.stringify(document.querySelector(".enterEmail").value.toLowerCase())
  );

  let digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < 4; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }

  //   Send mail with user datas
  let params = {
    name: "kamalesh",
    email: document.querySelector(".enterEmail").value.toLowerCase(),
    to_name: "User",
    code: OTP,
  };

  const serviceID = "service_aknvqm8";
  const templateID = "template_svuyx0c";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      console.log(res);
      checkVerificationCode(OTP);
    })
    .catch((err) => alert(err.text));
}

function checkVerificationCode(OTP) {
  try {
    // Create prompt

    let code = prompt(
      "You should recieved a mail with a code, Please type the code here"
    );

    if (code == OTP) {
      location.href = "resetPassword.html";
    } else {
      alert("Your OTP is incorrect");
    }
  } catch (err) {
    console.error(err);
  }
}

function cancel() {
  try {
    document.querySelector("body").innerHTML = null;
    document.querySelector("body").innerHTML = ` <section>
       
    <div class="signin">
        <div>
            <marquee scrollamount="10" behavior="alternate">
                <h1>Welcome Back</h1>
            </marquee>
            <h3>Sign In</h3>
  
  
            <form id="form">
                <label class="tag">Email Id</label><br>
                <input type="text" id="Email" placeholder="Enter Email" /><br>
  
                <label>Password</label><br>
                <input type="text" id="Password" placeholder="Enter Password" /><br>
  
                <a class="ftPwd" onclick="forgotPwdEmail()">Forgot Password?</a>
  
                <button class="btn1" type="submit" >Sign In</button><br>
                <button class="btn2" type="reset" onclick="index()">Cancel</button><br>
            </form>
        </div>
    </div>
  </section>`;
  } catch (err) {
    console.error(err);
  }
}

// Password check

function comparePassword(userInputPassword, saltAndHashedPassword) {
  try {
    // Split the stored salt and hashed password
    const [salt, storedHash] = saltAndHashedPassword.split(" ");

    // Hash the user input password with the stored salt
    const hashedPassword = CryptoJS.SHA256(
      userInputPassword + CryptoJS.enc.Hex.parse(salt)
    );

    // Compare the hashed user input password with the stored hash
    return hashedPassword.toString() === storedHash;
  } catch (error) {
    console.error("Error comparing password:", error);
    throw error;
  }
}

function index() {
  try {
    location.href = "../index.html";
  } catch (err) {
    console.error(err);
  }
}

function displayPassword() {
  document.querySelector(".inputs i").classList.remove("fa-eye");
  document.querySelector(".inputs i").classList.add("fa-eye-slash");
  document.querySelector(".inputs input").setAttribute("type", "text");
  document.querySelector(".inputs i").setAttribute("onclick", "hidePassword()");
}

function hidePassword() {
  document.querySelector(".inputs i").classList.remove("fa-eye-slash");
  document.querySelector(".inputs i").classList.add("fa-eye");
  document.querySelector(".inputs input").setAttribute("type", "password");
  document
    .querySelector(".inputs i")
    .setAttribute("onclick", "displayPassword()");
}
