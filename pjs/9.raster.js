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
    clickedpoint = event.point;
    
    path = new Path();

    path.add(turtle.position);
    path.add(clickedpoint);

    counter = 0;
}


function onFrame(event)
{
    if(path.length>0 && counter<1)
    {
        var offset = counter*path.length;

        var point = path.getPointAt(offset);
        var angle = path.getTangentAt(offset).angle;
        
        turtle.position = point;
        turtle.rotation = angle;

        counter = counter + 0.01;
    }
}