let sSlider, wSlider, pSlider, hSlider;
let crSlider, cgSlider, cbSlider;

var button1, button2, button3;
var buttoncaps, bottonLower;

var img;

var buttoncolorw ,buttoncolorb;
let input, buttongo;




function setup() {
  // create canvas
   
  createCanvas(window.innerWidth, window.innerHeight);
    
  textSize(15);
  noStroke();
    //img=loadImage('brexit.jpeg');
    
    //background
    fill(100);
    rect(0,0,100,100);
    
    

  // create sliders type
  sSlider = createSlider(100,180);
  sSlider.position(20, 20);
  wSlider = createSlider(1,999);
  wSlider.position(20, 50);
  pSlider = createSlider(window.innerWidth/4,window.innerWidth/2);
  pSlider.position(20, 80);
    hSlider = createSlider(window.innerHeight/28, window.innerHeight/1.5);
  hSlider.position(20, 110);
    
    
    //button
    
    buttoncaps=createButton("upper");
    buttoncaps.mousePressed(changeCaps)
    buttoncaps.position(20,155);
    
    buttonLower=createButton("lower");
    buttonLower.mousePressed(changeLower)
    buttonLower.position(70,155);
    
    button1=createButton("serif");
    button1.mousePressed(changeTypeserif)
    button1.position(20,180);
    
    button2=createButton("sans serif");
    button2.mousePressed(changeTypesans)
    button2.position(65,180);
    
    button3=createButton("blackletter");
    button3.mousePressed(changeTypeblack)
    button3.position(135,180);
    
    
    
    
    
    // create sliders colors
  crSlider = createSlider(0, 255, 100);
  crSlider.position(20, 230);
  cgSlider = createSlider(0, 255, 0);
  cgSlider.position(20, 260);
  cbSlider = createSlider(0, 255, 255);
  cbSlider.position(20, 290);
    
    
    buttoncolorw=createButton("white");
    buttoncolorw.mousePressed(changewhite)
    buttoncolorw.position(20,350);
   
    
     buttoncolorb=createButton("black");
    buttoncolorb.mousePressed(changeblack)
    buttoncolorb.position(70,350);
    

    
    
    input=createInput('');
    input.position(20,400);
    input.changed(drawWord);
    buttongo = createButton("go");
    buttongo.position(160, 400);
    buttongo.mousePressed(drawWord);
    
    
    //p = createP('change');
    
   //var p = input.value(); 
   
   
     p = createP(input.value());
     
    
}



function draw() {

  background(255);
  
  text('size', sSlider.x * 2 + sSlider.width, 35);
  text('weight', wSlider.x * 2 + wSlider.width, 65);
  text('position x', pSlider.x * 2 + pSlider.width, 95);
    text('position y', hSlider.x * 2 + hSlider.width, 125);
    
  push();
    
const r = crSlider.value();
  const g = cgSlider.value();
  const b = cbSlider.value();
    
    fill(r,g,b);
    rect(width/5,0,width,height);
    
    pop();
    
    text('r', sSlider.x * 2 + crSlider.width, 240);
  text('g', wSlider.x * 2 + cgSlider.width, 270);
  text('b', pSlider.x * 2 + cbSlider.width, 305);
    
    //image(img,width/5,0,width,height); 
   
  
   

 p.style('font-size' ,sSlider.value()+'px');
 p.style('font-weight' ,wSlider.value());
p.style('text-align', 'center');
p.position(pSlider.value(),hSlider.value());
     
   
 
    

    
    
    
    
}



function changeTypeserif(){
    p.style('font-family', 'Source Serif');
}

function changeTypesans(){
    p.style('font-family', 'Source Sans'); 
}

function changeTypeblack(){
    p.style('font-family', 'blackletter');
    
}

function changeCaps(){
    p.style('text-transform', 'uppercase');   
}


function changeLower(){
    p.style('text-transform', 'lowercase');
}

function changewhite(){
    
    p.style('color', 'white');
    
}


function changeblack(){
    
    p.style('color', 'black');
    
}


function drawWord (){
    input.remove();
    buttongo.remove();
   p = createP(input.value());
    
    for(var i=0; i < 30; i++) {
    text(p);
        
    }
    

     
}









