let x = 300
let y = 300
let speed = 10
let score = 0

const text = {
    win: "You win!",
    lose: "You lose!",
    draw: "It's a draw",
    back: "Hey come back!"
}

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const game = () => {
    drawField()
    drawPlayer()
    drawText()
    drawScore()
    // x += 5

}

// Drawing the field
const drawField = () => {
    ctx.fillStyle = 'green'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
}
// Drawing the player
const drawPlayer = () => {
    ctx.fillStyle = 'white'
    ctx.fillRect(x, y, 15, 40)
}

const drawText = () => {
    ctx.font = "60px Impact";
    ctx.fillStyle = "White";
    ctx.textAlign = "center";
    if(x > canvas.width || y > canvas.height || x < 0 || y < 0) {
        ctx.fillText(text.back, canvas.width/2, canvas.height/3);
    }

    if(score > 200) {
        ctx.fillText(text.win, canvas.width/2, canvas.height/3);
    }

}
// Drawing a score
const drawScore = () => {
    ctx.font = "30px Arial"
    ctx.fillStyle = "white"
    ctx.textAlign = "center"
    ctx.fillText(score, 50, 50)
}


setInterval(game, 1000/24)

window.addEventListener("keydown", e => {
    if(e.key == "ArrowUp") {
        console.log("Up arrow is pressed");
        y -= speed
    }

    if(e.key == "ArrowDown") {
        console.log("Down arrow is pressed");
        y += speed
    }

    if(e.key == "ArrowLeft") {
        console.log("Down arrow is pressed");
        x -= speed
    }

    if(e.key == "ArrowRight") {
        console.log("Down arrow is pressed");
        x += speed
    }

    score += 1


    // console.log(e)
})
