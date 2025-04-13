class Guvi {
    constructor(name, email, adhar, type) {
      this.name = name;
      this.email = email;
      this.adhar = adhar;
      this.type = type;
    }
  }
  
  class Display {
    add(guvi) {
      const tableBody = document.getElementById("tableBody");
      const uilist = `<tr>
        <td>${guvi.name}</td>
        <td>${guvi.email}</td>
        <td>${guvi.adhar}</td>
        <td>${guvi.type}</td>
      </tr>`;
      tableBody.innerHTML += uilist;
    }
  
    clear() {
      document.getElementById("registerform").reset();
    }
  
    validate(guvi) {
      return (
        guvi.name.length >= 4 &&
        guvi.email.length >= 6 &&
        /^\d{12}$/.test(guvi.adhar)
      );
    }
  
    show(type, displayMessage) {
      const message = document.getElementById("showmessage");
      message.innerHTML = `<div class="alert alert-${type}" role="alert">
        ${displayMessage}
      </div>`;
      setTimeout(() => {
        message.innerHTML = "";
      }, 3000);
    }
  }
  
  document.getElementById("registerform").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const adhar = document.getElementById("adhar").value;
    const type = document.querySelector('input[name="gender"]:checked')?.value || "";
  
    const data = new Guvi(name, email, adhar, type);
    const display = new Display();
  
    if (display.validate(data)) {
      display.add(data);
      display.clear();
      display.show("success", "Registration is successful!");
    } else {
      display.show("danger", "Registration failed. Please fill valid details.");
    }
  });
  
  // Search functionality
  document.querySelector('form[role="search"]').addEventListener("submit", function (e) {
    e.preventDefault();
    const searchInput = e.target.querySelector('input[type="search"]').value.toLowerCase();
    const tableRows = document.querySelectorAll("#tableBody tr");
  
    tableRows.forEach((row) => {
      const rowText = row.innerText.toLowerCase();
      if (rowText.includes(searchInput)) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  });
  