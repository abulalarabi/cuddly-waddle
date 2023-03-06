var url = 'https://github.com/abulalarabi/cuddly-waddle/raw/main/raster/turtlejs.png';
var turtle = new Raster(url);

// If you create a Raster using a url, you can use the onLoad
// handler to do something once it is loaded:
turtle.onLoad = function() {
    console.log('The image has loaded.');
};

var clickedpoint = null;
var path = new Path();
var counter = 0;

function onMouseDown(event)
{
    clickedpoint = event.point; // get the target point
    
    path = new Path();          // new path

    path.add(turtle.position);  // start point
    path.add(clickedpoint);     // end point

    path.strokeWidth = 5;       // makes the path visible
    path.strokeColor = 'black';

    counter = 0;
}


function onFrame(event)
{
    if(path.length>0 && counter<1)
    {
        var offset = counter*path.length;

        var point = path.getPointAt(offset);
        var angle = path.getTangentAt(offset).angle;
        
        turtle.position = point;    // translate position
        turtle.rotation = angle;    // orient with the path

        counter = counter + 0.01;
    }
    else
    {
        path.strokeWidth = 0;   // makes the path invisible
    }
}

