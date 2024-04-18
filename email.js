window.onload = function () {
  document
    .getElementById("email-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // these IDs from the previous steps
      emailjs.sendForm("service_gc8ziot", "template_ezh1fr2", this).then(
        () => {
          console.log("SUCCESS!");
          alert("merci pour votre inscription");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
       emailjs.sendForm("service_gc8ziot", "template_8j10c9f", this).then(
         () => {
           console.log("SUCCESS!");
         },
         (error) => {
           console.log("FAILED...", error);
         }
       );
    });
};
