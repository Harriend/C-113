function preload(){
}

function setup(){
    canvas = createCanvas(300, 250);
    canvas.position(110, 290);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw(){
    image(video, 0, 0, 300, 250);
    tint(tint_color);
}

function take_snapshot(){
    save('student_name.png');
}

function filter_tint(){
tint_color = document.getElementById("tint_color").value;
}