document.addEventListener("DOMContentLoaded", function () {
    const chessMoveForm = document.getElementById("chessMoveForm");
    const resultMessage = document.getElementById("resultMessage");

    chessMoveForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const bestMove = document.getElementById("bestMove").value.trim();

        if (validateChessMove(bestMove)) {
            resultMessage.textContent = "Dobry Ruch!";
        } else {
            resultMessage.textContent = "Ruch nie jest poprawny :(";
        }
    });

    function validateChessMove(bestMove) {

        return bestMove.toLowerCase() === "ng3";
    }
});
