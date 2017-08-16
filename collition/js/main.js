// Circle
var canvas = document.getElementById("circleColition");
var ctx = canvas.getContext("2d");
var ballRadius = 30;
var x1 = canvas.width/2;
var y1 = canvas.height-30;
var x2 = canvas.width/2;
var y2 = canvas.height-60;
var dx1 = 2;
var dy1 = -2;
var dx2 = -2;
var dy2 = 2;

function drawBall1() {
    ctx.beginPath();
    ctx.arc(x1, y1, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#00953D";
    ctx.fill();
    ctx.closePath();
}

function drawBall2() {
    ctx.beginPath();
    ctx.arc(x2, y2, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#000";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall1();
    drawBall2();

    var distance = calcDistance(x1, y1, x2, y2);

    // Calculate the distance
    function calcDistance(x1, y1, x2, y2) {
        var dx = x1 - x2;
        var dy = y1 - y2;
        var distance = Math.round(Math.sqrt(dx*dx + dy*dy));
        return distance;
    };

    // Border Colition of the ball 1
    if(x1 + dx1 > canvas.width-ballRadius || x1 + dx1 < ballRadius) {
        dx1 = -dx1;
    }
    if(y1 + dy1 > canvas.height-ballRadius || y1 + dy1 < ballRadius) {
        dy1 = -dy1;
    }
    
    // Border Colition of the ball 2
    if(x2 + dx2 > canvas.width-ballRadius || x2 + dx2 < ballRadius) {
        dx2 = -dx2;
    }
    if(y2 + dy2 > canvas.height-ballRadius || y2 + dy2 < ballRadius) {
        dy2 = -dy2;
    }

    if(distance == (ballRadius + ballRadius)) {
        dx1 *= -1;
        dx2 *= -1;
    }

    x1 += dx1;
    y1 += dy1;
    x2 += dx2;
    y2 += dy2;
}

setInterval(draw, 5);