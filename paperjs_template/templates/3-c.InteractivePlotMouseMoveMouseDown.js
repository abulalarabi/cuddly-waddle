// random points
var x = [20, 120, 220, 320, 420, 520, 620, 720, 820, 920, 1020, 1120, 1220, 1320];
var y = [966, 961, 886, 928, 908, 888, 894, 926, 930, 914, 917, 934, 945, 906];

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
