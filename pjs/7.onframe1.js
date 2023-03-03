// collection of points
var x = [ 0.0, 25.71428571, 51.42857143, 77.14285714,
       102.85714286, 128.57142857, 154.28571429, 180.0,
       205.71428571, 231.42857143, 257.14285714, 282.85714286,
       308.57142857, 334.28571429, 360.0];

var y = [30.0, 34.33883739, 37.81831482, 39.74927912, 39.74927912,
       37.81831482, 34.33883739, 30.0, 25.66116261, 22.18168518,
       20.25072088, 20.25072088, 22.18168518, 25.66116261, 30.0]

// create a new path
var path = new Path();

// stylize the path
path.strokeColor = 'black';
path.strokeWidth = 5;

var i = 0;

// we will use the onFrame event
function onFrame(event){
    // event.count%20==0 slows down the animation
    // only after every 20 frame the path will be updated
    
    if(event.count%20==0 && i<x.length){
        var point = new Point(x[i], y[i]*5);
        path.add(point);
        i++;
        
        // uncomment the following and check the outcome 
        //path.selected = true;
        //path.smooth({ type: 'continuous' });
    }
}

