const envelope = document.getElementById("envelope");

envelope.addEventListener("click", () => {
    envelope.classList.add("open");

    setTimeout(() => {
        envelope.classList.add("zoom");
    }, 800);

    setTimeout(() => {
        document.getElementById("slide2").scrollIntoView({ behavior: "smooth" });
    }, 1500);
});

document.querySelectorAll(".photo-frame").forEach(frame => {
    frame.style.setProperty('--r', Math.random());
});