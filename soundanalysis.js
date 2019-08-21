//from coding train 
// https://www.youtube.com/watch?v=IKB1hWWedMk
// lightly adapted to p5.js from processing

var cols,rows;
var scaleMap = 10 ;
var terrain;
var moveforward = 0;
var widthwindow = window.innerWidth;

function setup() { 
    var canvas = createCanvas(500, 500, WEBGL);

    // Move the canvas so it’s inside our <div id="sketch-holder">.

    // canvas.parent('sketch-holder');

    canvas.parent("sketch-div");
    background(32);



    var h = 450;
    var w = 500;
    cols = Math.floor(widthwindow / scaleMap);
    rows = h / scaleMap;
  // create the 2D array in js
    terrain = new Array(cols);
    for (let index = 0; index < cols; index++) {
        terrain[index] = new Array (rows);
    }
  } 
  
function draw() { 

        var yoff = moveforward;
        for (let y = 0; y < cols-1; y++) {
            var xoff = 0;
            for (let x = 0; x < rows-1; x++) {
                terrain[y][x]=map(noise(xoff,yoff), 0, 1, -50, 50);
                xoff += 0.1;
        }
        yoff += 0.1;    
    }
    moveforward -= 0.08;


    background(140,45,255);
    stroke (255);
    noFill();
    translate(-widthwindow/8,-height/3);

    rotateX(PI/3);
    for (let y = 0; y < cols-1; y++) {
        beginShape(TRIANGLE_STRIP);
        for (let x = 0; x < rows-1; x++) {
            vertex(x*scaleMap,y*scaleMap, terrain[y][x]);
            vertex(x*scaleMap,(y+1)*scaleMap, terrain[y+1][x]);       
        }   
        endShape();      
    }
}