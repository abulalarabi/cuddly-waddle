// first lets create a new path
var path = new Path();

// now lets a stroke color
path.strokeColor = 'black';
path.strokeWidth = 5;

// we will add an event on mouse down
function onMouseDown(event) {
	
	// everytime the mouse is down, i.e., left-clicked,
	// we will add a new point to the path
	// the new point will be current pointer location
	// remeber: event has a property called point
	path.add(event.point);
	
	// uncomment the following and check the outcome
	//path.selected = true;
	//path.smooth({ type: 'continuous' });
}

