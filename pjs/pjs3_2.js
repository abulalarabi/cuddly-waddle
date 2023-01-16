// total number of segments
var segments = 10;

// height of the wave
var height = 50;

// Create a new path and style it:
var path = new Path();
// stylize the path
path.strokeColor = [0.8]; // 80% alpha
path.strokeWidth = 30;


// add segments
// view.size gives the height and width of the screen
// i/segments gives us a range from 0 to 1
// and when it is multiplied by screen size,
// it expands the vector to cover the screen
for (var i = 0; i <= segments; i++) {
	path.add(new Point(i / segments,0) * view.size);
}

function onFrame(event) {
    // now loop through all the segments
    // and change their y values
	// Loop through the segments of the path:
	for (var i = 0; i <= segments; i++) {
		var currentSegment = path.segments[i];

		// Math.sin gives a cylic value between -1 and 1
		var sinus = Math.sin(event.time + i);
		
		// now multiple -1 to 1 with the height
		// to get the desired height and change the y value
		currentSegment.point.y = sinus * height + 200;
	}
	
	// uncomment the following and check the outcome
	//path.selected = true;
	//path.smooth({ type: 'continuous' });
}

