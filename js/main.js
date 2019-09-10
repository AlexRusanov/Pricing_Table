const contactBtn = document.getElementById("contact-btn");

contactBtn.addEventListener("click", () => {
    document.cookie = "experiment=novalue; max-age=300";

    let cookies = document.cookie.split("; ");

    if (cookies.includes("new-user=true") || cookies.includes("new-user=false")) {
        document.cookie = "new-user=false";
    } else {
        document.cookie = "new-user=true";
    }
});