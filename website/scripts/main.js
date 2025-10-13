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



// =============== EXTRA FEATURES FOR W06 PROJECT ===================

// 1️⃣ Create an object representing the organization
const organization = {
  name: "Cocoa Child Organization",
  mission: "Helping kids and families grow through love, care, and education.",
  contactEmail: "info@cocoachild.org"
};

// 2️⃣ Create an array of donation options and use an array method
const donationOptions = [10, 25, 50, 100];
const donationMessage = donationOptions.map(amount => `Donate $${amount}`).join(" | ");
console.log(`Available options: ${donationMessage}`);

// 3️⃣ Template literal output to a DOM element if it exists
const donateElement = document.querySelector("#donation-message");
if (donateElement) {
  donateElement.textContent = `💖 ${organization.name} appreciates your support! ${donationMessage}`;
}

// 4️⃣ Example conditional branching for feedback
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

// 5️⃣ DOM interaction and event listener for form submission
const contactForm = document.querySelector("#contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    // Simple validation
    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    // Save to localStorage
    localStorage.setItem("contactName", name);
    localStorage.setItem("contactEmail", email);
    localStorage.setItem("contactMessage", message);

    // Display confirmation using template literal
    const confirmText = `Thanks ${name}! Your message has been sent. We'll reach out to you at email: ${email} soon.`;
    document.querySelector("#formFeedback").textContent = confirmText;
    contactForm.reset();
  });
}



