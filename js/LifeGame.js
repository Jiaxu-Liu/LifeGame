var c = document.getElementById('myCanvas');
var cxt = c.getContext('2d');

var cellNumSqrt = 50;
var cellSize = 12;

var cell = new Array();
var i = 0;
var j = 0;

for(i = 0; i < cellNumSqrt; i++){
    cell[i] = new Array();
    for(j = 0; j < cellNumSqrt; j++){
        cell[i][j] = 0;
    }
}

var nextCell = new Array();
for(i = 0; i < cellNumSqrt; i++){
    nextCell[i] = new Array();
    for(j = 0; j < cellNumSqrt; j++){
        nextCell[i][j] = 0;
    }
}


var startX = 0;
var startY = 0;
var initRate = 20;

initRandom(initRate);
for(i = 0; i < cellNumSqrt; i++){
    for(j = 0; j < cellNumSqrt; j++){
        nextCell[i][j] = cell[i][j];
    }
}
draw();
start();

function draw() {
    //»­±³¾°
    cxt.fillStyle = '#EDEDED';
    cxt.fillRect(0, 0, 600, 600);
    //»­Ïß
    cxt.lineWidth = 1;
    cxt.strokeStyle = '#FFFFFF';
    for(i = 0; i <= cellNumSqrt; i++){
        cxt.moveTo(startX, startY + i * cellSize);
        cxt.lineTo(cellNumSqrt * cellSize, startY + i * cellSize);
    }
    for(i = 0; i <= cellNumSqrt; i++){
        cxt.moveTo(startX + i * cellSize, startY);
        cxt.lineTo(startX + i * cellSize, cellNumSqrt * cellSize);
    }
    cxt.stroke();
    //»­»îÏ¸°û
    for(i = 0; i < cellNumSqrt; i++){
        for(j = 0; j < cellNumSqrt; j++){
            if(cell[i][j] === 1){
                cxt.fillStyle = '#000000';
                cxt.fillRect(startX + i * cellSize + 1, startY + j * cellSize + 1, cellSize - 2, cellSize - 2);
            }
        }
    }
}

function initRandom(rate){
    for(i = 0; i < cellNumSqrt; i++){
        for(j = 0; j < cellNumSqrt; j++){
            if(Math.random() * 100 <= rate){
                cell[i][j] = 1;
            }
        }
    }
}

function nextState() {
    for(i = 0; i < cellNumSqrt; i++){
        for(j = 0; j < cellNumSqrt; j++){
            var aroundCellNum = countAroundCellNum(i, j);
            if(aroundCellNum === 3){
                nextCell[i][j] = 1;
            }
            else if(aroundCellNum != 2){
                nextCell[i][j] = 0;
            }
        }
    }
}

function countAroundCellNum(x, y) {
    return cell[realPos(x-1)][realPos(y-1)] + 
            cell[realPos(x-1)][realPos(y)] + 
            cell[realPos(x-1)][realPos(y+1)] + 
            cell[realPos(x)][realPos(y-1)] + 
            cell[realPos(x)][realPos(y+1)] + 
            cell[realPos(x+1)][realPos(y-1)] + 
            cell[realPos(x+1)][realPos(y)] + 
            cell[realPos(x+1)][realPos(y+1)];
}

function realPos(x){
    if(x < 0){
        return (x + cellNumSqrt) % cellNumSqrt;
    }
    else if(x >= cellNumSqrt){
        return x % cellNumSqrt;
    }
    else{
        return x;
    }
}

function refresh(){
    nextState();
    for(i = 0; i < cellNumSqrt; i++){
        for(j = 0; j < cellNumSqrt; j++){
            cell[i][j] = nextCell[i][j];
        }
    }
    for(i = 0; i < cellNumSqrt; i++){
        for(j = 0; j < cellNumSqrt; j++){
            nextCell[i][j] = cell[i][j];
        }
    }
    cxt.clearRect(0, 0, 600, 600);
    draw();
}

function start() {
    setInterval(refresh, 100);
}