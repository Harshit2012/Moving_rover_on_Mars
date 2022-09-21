canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

Rover_width=100;
Rover_height=90;

Rover_x=10;
Rover_y=10;

background_image= "mars.jpg";
Rover_image="rover.png";
function add(){
background_imgTag= new Image();
background_imgTag.onload = uploadBackground;
background_imgTag.src = background_image;

rover_imgTag = new Image();
background_imgTag.onload = uploadrover;
rover_imgTag.src = Rover_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imgTag, Rover_x, Rover_y, Rover_width, Rover_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if( keyPressed == '38'){
        up();
        console.log("up");
    }

    if(keyPressed == '40'){
        down();
        console.log("down");
    }

    if(keyPressed == '37'){
        left();
        console.log("left");
    }

    if(keyPressed == '39'){
        right();
        console.log("right");
    }
}

function up(){
    if(Rover_y >= 0){
        Rover_y = Rover_y - 10;
        console.log("When up arrow is pressed = " + Rover_x + " - " + Rover_y);
        uploadBackground();
        uploadrover();
    }
}

function down(){
    if(Rover_y <= 500){
        Rover_y = Rover_y + 10;
        console.log("When down arrow is pressed x = " + Rover_x + " y = " + Rover_y);
        uploadBackground();
        uploadrover();
    }
}

function left(){
    if(Rover_x >= 0){
        Rover_x = Rover_x - 10;
        console.log("When left arrow is pressed, x = " + Rover_x + " y = " + Rover_y);
        uploadBackground();
        uploadrover();
    }
}

function right(){
    if(Rover_x <= 700){
        Rover_x = Rover_x + 10;
        console.log("When right arrow is pressed, x = " + Rover_x + " y = " + Rover_y);
        uploadBackground();
        uploadrover();
    }
}