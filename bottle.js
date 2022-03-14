img = "";
status = "";
objects = [];

function preload() {
    img= loadImage('https://media.istockphoto.com/photos/water-bottle-on-white-background-picture-id1126933760?k=20&m=1126933760&s=612x612&w=0&h=XiYk9aT68Iru-OeENe1JXi0-8BU8wXKKj7dfgkbjy9A=');

}



function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw () {
     image (img, 0, 0, 640, 420);
     for (var i = 0; i < objects.length; i++) {
      document.getElementById("status").innerHTML = "Status : 1 big object detected by cocossd";

      fill(255, 0, 0);
      percent = floor(objects[i].confidence * 100);
      text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
      noFill();
      stroke(255, 0, 0);
      rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
  }

     


function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
  }
  function gotResult(error, results) {
    if (error) {
      console.log(error);
    }
    console.log(results);
    objects = results;
    
  }
    