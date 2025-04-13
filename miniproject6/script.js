function Guvi(name, email, adhar, type) {
    this.name = name;
    this.email = email;
    this.adhar = adhar;
    this.type = type;
  }
  
  function Display() {}
  
  Display.prototype.validate = function (guvi) {
    if (
      guvi.name.length < 4 ||
      guvi.email.length < 6 ||
      guvi.adhar.length !== 12
    ) {
      return false;
    }
    return true;
  };
  
  Display.prototype.clear = function () {
    let guviForm = document.getElementById("registerform");
    guviForm.reset();
  };
  
  Display.prototype.add = function (guvi) {
    let tableBody = document.getElementById("tableBody");
    let uilist = `<tr>
        <td>${guvi.name}</td>
        <td>${guvi.email}</td>
        <td>${guvi.adhar}</td>
        <td>${guvi.type}</td>
      </tr>`;
    tableBody.innerHTML += uilist;
  };
  
  Display.prototype.show = function (type, displayMessage) {
    let message = document.getElementById("showmessage");
    message.innerHTML = `<div class="alert alert-${type}" role="alert">
      ${displayMessage}
    </div>`;
    setTimeout(() => {
      message.innerHTML = "";
    }, 3000);
  };
  
  document.getElementById("registerform").addEventListener("submit", guviFormSubmit);
  
  function guviFormSubmit(e) {
    e.preventDefault();
  
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let adhar = document.getElementById("adhar").value;
    let male = document.getElementById("male");
    let female = document.getElementById("female");
  
    let type = male.checked ? "Male" : female.checked ? "Female" : "";
  
    let data = new Guvi(name, email, adhar, type);
    let display = new Display();
  
    if (display.validate(data)) {
      display.add(data);
      display.clear();
      display.show("success", "Registration is successful!");
    } else {
      display.show("danger", "Registration failed. Please fill valid details.");
    }
  }
  
