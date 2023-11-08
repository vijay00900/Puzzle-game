document.addEventListener("DOMContentLoaded", function () {
    const puzzleGrid = document.getElementById("puzzle-grid");
    const startButton = document.getElementById("start-button");

    // Create a simple 3x3 puzzle grid
    for (let i = 1; i <= 9; i++) {
        const puzzlePiece = document.createElement("div");
        puzzlePiece.className = "puzzle-piece";
        puzzlePiece.textContent = i;
        puzzleGrid.appendChild(puzzlePiece);
    }

    // Shuffle the puzzle pieces when the "Start Game" button is clicked
    startButton.addEventListener("click", function () {
        const puzzlePieces = Array.from(document.querySelectorAll(".puzzle-piece"));
        puzzlePieces.sort(() => Math.random() - 0.5);
        puzzlePieces.forEach((piece, index) => {
            piece.textContent = index + 1;
        });
    });
});
