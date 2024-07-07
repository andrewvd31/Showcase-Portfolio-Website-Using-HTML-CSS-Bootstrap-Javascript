// imp! Navbar Active Script

let sections = document.querySelectorAll("section");

let navLinks = document.querySelectorAll(".nav-link");

window.onscroll = () => {
  sections.forEach((sec) => {
    if (
      sec.id === "hero-section" ||
      sec.id === "about-section" ||
      sec.id === "services-section" ||
      sec.id === "portfolio" ||
      sec.id === "contact-us"
    ) {
      let top = window.scrollY;
      let offset = sec.offsetTop;
      let height = sec.offsetHeight;
      let sectionId = sec.getAttribute("id");
      if (top >= offset && top < offset + height) {
        navLinks.forEach((links) => {
          links.classList.remove("active");
          document
            .querySelector(`.nav-link[href="#${sectionId}"`)
            .classList.add("active");
        });
      }
    }
  });
};

//imp! Email JS Script

document.getElementById('contact-form').addEventListener('submit',(e)=>{
    e.preventDefault()
    let params = {
        from_name: document.getElementById('full_name').value,
        email_id: document.getElementById('email_id').value,
        message: document.getElementById('message').value
    }
    emailjs.send("service_59chgtn","template_8z6zpql",params).then(()=>{
        document.querySelector('.thank-you-msg').style.display = "block";
        document.getElementById('full_name').value = ""
        document.getElementById('email_id').value = ""
        document.getElementById('message').value = ""
        setTimeout(()=>{
            document.querySelector('.thank-you-msg').style.display = "none";
        },2500)
    })
})