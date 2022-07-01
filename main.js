how_you_like_that_song="";
pretty_savage_song="";

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
    how_you_like_that_song = loadSound("music2.mp3");
    pretty_savage_song = loadSound("music.mp3");
}

function draw(){
    image(video,0,0,600,530);
}