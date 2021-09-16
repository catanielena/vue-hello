const app = new Vue (
    {
        el: "#root",
        data: {
            message:"Hello World",
            baby: "https://awkwardfamilyphotos.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-11-at-4.53.15-PM.jpg"
        }
    }
)

function setup() {
    sketchWidth = document.getElementById("box").offsetWidth;
    sketchHeight = document.getElementById("box").offsetHeight;
    createCanvas(sketchWidth, sketchHeight);
  }
let value = 255; 
let word = "Hello";
function draw() {
    blendMode(EXCLUSION);
    fill(value);
    textSize(30);
    text(word, mouseX, mouseY);
}

function mousePressed() {
    value = (value===255 ? ('rgb(255,255,0)') : 255);
    word = (word==="Hello" ? "World" : "Hello");
}
  
function windowResized() {
sketchWidth = document.getElementById("box").offsetWidth;
sketchHeight = document.getElementById("box").offsetHeight;
resizeCanvas(sketchWidth, sketchHeight);
}