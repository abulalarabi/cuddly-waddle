// some random points
var point1 = new Point(20,50);
var point2 = new Point(320,300);
var point3 = new Point(640,50);

// declare a new path
var path = new Path();

// set color and stroke size
path.strokeColor = 'black';
path.strokeWidth = 30;

// add points to the path
path.add(point1);
path.add(point2);
path.add(point3);

// uncomment the following and check the outcome 
//path.selected = true;
//path.smooth({ type: 'continuous' });

