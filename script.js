const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function celebrate() {
    message.style.display = "block";

    let confetti = [];

    for (let i = 0; i < 150; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 4,
            color: `hsl(${Math.random() * 360},100%,50%)`
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        confetti.forEach((c) => {
            ctx.fillStyle = c.color;
            ctx.fillRect(c.x, c.y, c.r, c.r);
            c.y += 3;

            if (c.y > canvas.height) {
                c.y = -10;
            }
        });
    }

    setInterval(draw, 20);
}

yesBtn.addEventListener("click", celebrate);
noBtn.addEventListener("click", celebrate); // No also acts like Yes
