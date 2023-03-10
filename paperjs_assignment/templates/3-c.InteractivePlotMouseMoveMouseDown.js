// random points
var x = [20, 120, 220, 320, 420, 520, 620, 720, 820, 920, 1020, 1120, 1220, 1320];
var y = [483.0, 480.5, 443.0, 464.0, 454.0, 444.0, 447.0, 463.0, 465.0, 457.0, 458.5, 467.0, 472.5, 453.0];

// declare a new path
//*** your code ***//



// stylize: strokeWidth and strokeColor
//*** your code ***//



// add points to the path, use for-loop
//*** your code ***//



// make it smooth and selected
path.smooth({ type: 'continuous' });
path.selected = true;

var segment = null; // selected segment
var hitOptions = {
	segments: true, // will select segments
	stroke: false,  // will not select stroke
	fill: false,	// will not select shape/raster
	tolerance: 10
};

// when we click, we select an item
function onMouseDown(event) {
	segment = null;
	var hitResult = project.hitTest(event.point, hitOptions);
	// if clicked on empty space
	if (!hitResult) return;
	// if clicked on an item
	else segment = hitResult.segment;
}

function onMouseDrag(event) {
    // if a segment is cicked and dragged
	if (segment) {

	    // change the y position of the segment
	    // use segment.point.y
		//*** your code ***//




		path.smooth({ type: 'continuous' });
	} 
}
