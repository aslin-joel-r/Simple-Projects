
let board=document.querySelector("#board");
let context=board.getContext("2d");

let button=document.getElementById("reset");
let score=document.querySelector("#score");

let board_height=board.height;
let board_width=board.width;
let board_background="black";

let snake_color="red";
let snake_border="white";

let food_color="gold";
let unit_size=20;
let food_x;
let food_y;

let running=false;
let x_side=unit_size;
let y_side=0;

let scores=0;

let snake=[
    {x:unit_size * 4 , y:0},
    {x:unit_size * 3 , y:0},
    {x:unit_size * 2 , y:0},
    {x:unit_size , y:0},
    {x:0 , y:0},
    
]

window.addEventListener("keydown",directions);
button.addEventListener("click",resetGame);

gamestart();

function gamestart(){
    running=true;
    score.textContent=scores;
    createFood();
    drawFood();
    nextTick();
}
function nextTick(){
    if(running){
        setTimeout(()=>{
            clearBoard();
            drawFood();
            moveSnake();
            drawSnake();
            checkGameOver();
            nextTick();
        },100);
    }
    else{
        displayGameOver();
    }
}

function clearBoard(){
    context.fillStyle=board_background;
    context.fillRect(0,0,board_width,board_height)
}
function createFood(){
    function randomFood(min, max){
        const randNum = Math.round((Math.random() * (max - min) + min) / unit_size) * unit_size;
        return randNum;
    }
    food_x = randomFood(0, board_width - unit_size);
    food_y = randomFood(0, board_width - unit_size);
};
    
function drawFood(){
    context.fillStyle = food_color;
    context.fillRect(food_x, food_y, unit_size, unit_size);
};

function moveSnake(){
    const head = {x: snake[0].x + x_side,
        y: snake[0].y + y_side};

snake.unshift(head);
if(snake[0].x==food_x && snake[0].y==food_y){
    scores+=1;
    score.textContent=scores;
    createFood();
}
else{
    snake.pop()
}            
}
function drawSnake(){
    context.fillStyle=snake_color;
    context.strokeStyle=snake_border;
    snake.forEach(snakepart=>{
        context.fillRect(snakepart.x,
            snakepart.y,unit_size,unit_size);
        context.strokeRect(snakepart.x,
            snakepart.y,unit_size,unit_size);
        })
}
function directions(event){
    let keypress=event.keyCode;
    console.log(keypress)
    let LEFT=37;
    let UP=38;
    let RIGHT=39;
    let  DOWN=40;

    let goingUp=(y_side==-unit_size);
    let goingDown=(y_side==unit_size);
    let goingRight=(x_side==unit_size);
    let goingLeft=(x_side==-unit_size);

    switch(true){
        case(keypress== LEFT && !goingRight):
            x_side=-unit_size;
            y_side=0;
            break;
        case(keypress== UP && !goingDown):
            x_side=0;
            y_side=-unit_size;
            break;
        case(keypress== RIGHT && !goingLeft):
            x_side=unit_size;
            y_side=0;
            break;
        case(keypress== DOWN && !goingUp):
            x_side=0;
            y_side=unit_size;
            break;
    
    }

}
function checkGameOver(){
    switch(true){
        case(snake[0].x < 0):
            running=false;
            break;
        case(snake[0].x >= board_width):
            running=false;
            break;
        case(snake[0].y < 0):
            running=false;
            break;
        case(snake[0].y >= board_width):
            running=false;
            break;    
    }

    for(let i=1;i< snake.length;i+=1){
        if(snake[i].x==snake[0].x &&
             snake[i].y==snake[0].y){
                running=false;

        }
    }


}
function displayGameOver(){
    context.font="50px Monospace";
    context.fillStyle="red";
    context.textAlign="center";
    context.fillText("Game Over",board_width/2,board_height/2);
    running=false;
    
}
function resetGame(){
    scores=0;
    x_side=unit_size;
    y_side=0;
    snake=[
        {x:unit_size * 4 , y:0},
        {x:unit_size * 3 , y:0},
        {x:unit_size * 2 , y:0},
        {x:unit_size , y:0},
        {x:0 , y:0},
        
    ]
    gamestart();
}

















































