// first lets create a new 
var origin = new Point(100,100);
var radius = 50;
var circle = new Path.Circle(origin,radius);

// stylize
circle.fillColor = new Color(1, 0, 0.5); //(r,g,b)
circle.strokeWidth = 5;

// for annotation
var textItem = new PointText({
	content: 'Move your mouse',
	point: new Point(100, 100),
	fillColor: 'black',
});

// we will add an event on mouse down
function onMouseMove(event) {

	// reposition items to current mouse position
	circle.position = event.point;
	textItem.point = event.point;
	
	// update coordinates
	textItem.content = event.point+'';
	
	// change color
	var r = event.point.x/view.size.width;
	var b = event.point.y/view.size.height;
	circle.fillColor = new Color(r, b, 0.5); //(r,g,b)
}

