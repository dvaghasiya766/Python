let timerEl = document.getElementById("timer");
let defuserEl = document.getElementById("defuser");
let countdown = 10;

let countdowns = function () {
    countdown--;
    timerEl.textContent = countdown.toString();
    if (countdown === 0) {
        timerEl.textContent = "BOOM";
        clearInterval(intervalId);
    }
};

let intervalId = setInterval(countdowns, 1000);

defuserEl.addEventListener("keydown", function (event) {
    let bombDefuserText = defuserEl.value.trim().toLowerCase();
    if (event.key === "Enter" && bombDefuserText === "defuse" && countdown > 0) {
        timerEl.textContent = "You did it!";
        clearInterval(intervalId);
    }
});
