document.addEventListener("DOMContentLoaded", function () {
    const contrastButton = document.getElementById("toggle-contrast");
    const body = document.body;

    if (localStorage.getItem("high-contrast") === "enabled") {
        body.classList.add("high-contrast");
    }

    contrastButton.addEventListener("click", function () {
        body.classList.toggle("high-contrast");

        if (body.classList.contains("high-contrast")) {
            localStorage.setItem("high-contrast", "enabled");
        } else {
            localStorage.removeItem("high-contrast");
        }
    });
});
