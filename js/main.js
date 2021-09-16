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
  
  function draw() {
    blendMode(EXCLUSION);
    textSize(30);
    fill(255, 255, 0);
    text("Hello", mouseX, mouseY);
}

function mouseClicked() {
    textSize(30);
    fill(255, 0, 0);
    text("Hello", mouseX, mouseY);
    // prevent default
    return false;
  }
  
  
  function windowResized() {
    sketchWidth = document.getElementById("box").offsetWidth;
    sketchHeight = document.getElementById("box").offsetHeight;
    resizeCanvas(sketchWidth, sketchHeight);
  }