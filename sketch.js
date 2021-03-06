var ball;


var database, position;



function setup(){
    
    database=firebase.database();
    
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    //we are refrencing position thing in database
    //refencing means pointing
    var ballPosition = database.ref("ball/position");

    //on() listens to the database
    //on() is used to read information from database
    ballPosition.on("value", readPosition, showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    
    //set() is used to write inside the database
    database.ref("ball/position").set({
            x: position.x + x,
            y: position.y + y
    
            
        })
        console.log("hi")
}


function readPosition(data){
    
    //val() take out the values in JSON format
    position = data.val();
    
    ball.x=position.x;
    ball.y=position.y;

    


}

function showError(){

    console.log("Show Error")
}
