function sendMail(OTP) {
  try {
    let params = {
      name: "kamalesh",
      email: document.getElementById("email").value.toLowerCase(),
      to_name: document.getElementById("FullName").value,
      code: OTP,
    };

    const serviceID = "service_aknvqm8";
    const templateID = "template_5iy14s1";

    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        console.log(res);
        alert("Your message sent successfully!!");
      })
      .catch((err) => console.log(err));
  } catch (err) {
    console.error(err);
  }
}

function checkVerificationCode(OTP) {
  try {
    // Create prompt

    let code = prompt(
      "You should recieved a mail with a code, Please type the code here"
    );

    if (code == OTP) {
      return true;
    }
    return false;
  } catch (err) {
    console.error(err);
  }
}

function encryptPassword(password) {
  try {
    // Generate a random salt value
    const salt = CryptoJS.lib.WordArray.random(16);

    // Hash the password using SHA-256 with salt
    const hashedPassword = CryptoJS.SHA256(password + salt);

    // Return the salt and hashed password as a string
    return salt.toString() + " " + hashedPassword.toString();
  } catch (error) {
    console.error("Error encrypting password:", error);
    throw error;
  }
}
