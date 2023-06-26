statuscoco = "";

function preload(){
    badmintonimage = loadImage("badmintonracketimg.jpg");
    bedimage = loadImage("bedimg.jpg");
    bookshelfimage = loadImage("bookshelfimg.jpg");
    chessimage = loadImage("chesssetimg.jpg");
    paintingimage = loadImage("vangoghpaintingimg.jpg")
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
    statuscoco = true;
    console.log("Model Loaded! :D");
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);

}

