// ================= ABOUT TABS =================

const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, element) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }

  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  element.classList.add("active-link");

  document.getElementById(tabname).classList.add("active-tab");
}

// ================= MOBILE MENU =================

const menuBtn = document.querySelector(".menu-btn");

const nav = document.querySelector("nav");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

// Close mobile menu after clicking link

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

// ================= CONTACT FORM =================

const scriptURL =
  "https://script.google.com/macros/s/AKfycbyANsLtfMxJLw1MdlW9v7i_beT-tmnP5G25j1F1OIwpanGTwsglIqzKBMBJX6ffNCss/exec";

const form = document.getElementById("contact-form");

const msg = document.getElementById("msg");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
      name: form.name.value,

      email: form.email.value,

      message: form.message.value,
    };

    try {
      msg.innerHTML = "Sending...";

      await fetch(scriptURL, {
        method: "POST",

        body: JSON.stringify(formData),
      });

      msg.innerHTML = "Message sent successfully!";

      form.reset();

      setTimeout(() => {
        msg.innerHTML = "";
      }, 5000);
    } catch (error) {
      console.log(error);

      msg.innerHTML = "Something went wrong!";
    }
  });
}
