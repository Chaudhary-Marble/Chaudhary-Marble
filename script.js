function toggleMenu() {

    const menu = document.querySelector(".nav-links");

    menu.classList.toggle("active");

}


function sendMessage(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const phone =
        document.getElementById("phone").value;

    const message =
        document.getElementById("message").value;


    const whatsappMessage =
        `Hello Chaudhary Marble Basti,

Name: ${name}
Phone: ${phone}

Requirement:
${message}`;


    const whatsappURL =
        "https://wa.me/919236029576?text=" +
        encodeURIComponent(whatsappMessage);


    window.open(whatsappURL, "_blank");

}