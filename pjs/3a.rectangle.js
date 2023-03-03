// rectangle origin and geometry
var origin = new Point(100,100); //top-left corner
var size = new Size(200,300);    //width and height

// create a rectangular path
var path = new Path.Rectangle(origin, size);

// stylize
path.strokeColor = '#000000';
path.strokeWidth = 10;
path.selected = true;

