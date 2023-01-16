// declare a new path
var path = new Path();

// stylize
path.strokeColor = 'black';
path.strokeWidth = 10;
path.selected = true;

// add points to the path
var totalPoints = 5;
var initialYposition = view.size.height-100;
for(var i=20; i<view.size.width; i=i+100){
    var x = i;
    var y = initialYposition-Math.random()*100; //randomize
    path.add(new Point(x,y));
}
// make it smooth
path.smooth({ type: 'continuous' });

var segment = null; // selected segment

var hitOptions = {
	segments: true, // will select segments
	stroke: false,  // will not select stroke
	fill: true,
	tolerance: 10
};

// when we click, we select an item
function onMouseDown(event) {
	segment = null;
	var hitResult = project.hitTest(event.point, hitOptions);
	
	// if clicked on empty space
	if (!hitResult)
		return;
	else
	    segment = hitResult.segment;
}

function onMouseDrag(event) {
    // if a segment is dragged
	if (segment) {
	    // we only change the y value
		segment.point.y += event.delta.y;
		path.smooth({ type: 'continuous' });
	} 
}

