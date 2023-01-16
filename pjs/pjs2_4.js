// circle origin and geometry
var origin = new Point(100,100); //origin
var radius = 60;

// create a circular path
var path = new Path.Circle(origin, radius);

// stylize
path.strokeColor = '#000000';
path.strokeWidth = 10;
path.selected = true;

