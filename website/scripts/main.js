const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = currentYear;
const lastModified = document.lastModified;

document.getElementById("lastModified").textContent = `Website Modifying Date: ${lastModified}`;


function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = "flex"
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = "none"

}

const organization = {
  name: "Cocoa Child Organization",
  mission: "Helping kids and families grow through love, care, and education. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed fuga officiis eaque asperiores corporis, animi doloribus rem vero! Hic, placeat consequuntur! Tempora esse provident neque nulla fugiat minus officia odio?",
  contactEmail: "info@cocoachild.org"
};

const missionElement = document.getElementById("orgMission");
if (missionElement) {
  missionElement.textContent = organization.mission;
}

const donationOptions = [10, 25, 50, 100];
const donationMessage = donationOptions.map(amount => `Donate $${amount}`).join(" | ");
console.log(`Available options: ${donationMessage}`);

const donateElement = document.querySelector("#donation-message");
if (donateElement) {
  donateElement.textContent = `💖 ${organization.name} appreciates your support! ${donationMessage}`;
}

function checkDonation(amount) {
  let message;
  if (amount < 20) {
    message = "Every small donation counts!";
  } else if (amount <= 50) {
    message = "You're making a meaningful impact!";
  } else {
    message = "Your generosity is changing lives!";
  }
  alert(message);
}

const contactForm = document.querySelector("#contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    localStorage.setItem("contactName", name);
    localStorage.setItem("contactEmail", email);
    localStorage.setItem("contactMessage", message);

    const confirmText = `Thanks ${name}! Your message has been sent. We'll reach out to you at email: ${email} soon.`;
    document.querySelector("#formFeedback").textContent = confirmText;
    contactForm.reset();
  });
}



