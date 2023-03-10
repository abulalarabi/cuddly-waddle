var url = 'https://tinyurl.com/24sd2bux';
var turtle = new Raster(url);

// If you create a Raster using a url, you can use the onLoad
// handler to do something once it is loaded:
turtle.onLoad = function() {
    console.log('The raster has loaded.');
};


var path = new Path();

// stylize: strokeWidth and strokeColor
//*** your code ***//


var counter = 0;
// set movement to false initially
var move = false;

function onMouseDown(event)
{
  
    // add event.point to the path
    //*** your code ***//


    // make the path smooth
    //*** your code ***//

}



function onKeyDown(event) {
	// event.key returns the name of the pressed button on your keyboard
	// check if space is pressed then set move to true
	// also set counter to 0
	//*** your code ***//

}


function onFrame(event)
{
    if(path.length>0 && counter<1 && move)
    {
        var offset = counter*path.length;


        // get the point at the offset
        // use path.getPointAt method
        //*** your code ***//



        // get the tanget angle at the offset
        // use angle property from the path.getTangentAt method
        //*** your code ***//



        // change turtle's position to the obtained point
        //*** your code ***//



        // change turle's rotation to the obtain angle
        // use turtle.rotation property
        //*** your code ***//




        // increament the counter
        counter = counter + 0.01;
    }
    if(counter>=1)
    {
    	// remove the path
        project.activeLayer.removeChildren(1);
    	
    	// set move to false
    	// set counter to 0
    	//*** your code ***//



    	// empty the path by re-declaring it
    	// and stylize: strokeWidth and strokeColor
		//*** your code ***//

    }
}

