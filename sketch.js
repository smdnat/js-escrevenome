function setup() {
    createCanvas(400,400);
    background ("purple")
  }
  
  function draw(){
    stroke("pink");
    fill("pink");
    
    
    if (mouseIsPressed){
  rect(mouseX, mouseY, 20, 35);
    }
  }