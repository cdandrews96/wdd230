const toggleButton = document.querySelector("#toggle");
const main = document.querySelector("main");
const html = document.querySelector("html");
const boxes = document.querySelectorAll(".light");

toggleButton.addEventListener("click", () => {
    if (toggleButton.textContent.includes("🌙")
)   {
    html.style.background = "#0a1128";
    main.style.background = "#0a1128";
    main.style.color = "#fff";
    boxes.forEach(section => {
        section.style.background = "#000";
    })
    toggleButton.textContent = "☀️";
} else {
    html.style.background = "#f3f6f6";
    main.style.background = "#5c9ead0e";
    html.style.color = "#001f54";
    main.style.color = "#001f54";
    boxes.forEach(section => {
        section.style.background = "#fff";
    })
    toggleButton.textContent = "🌙"
}
});