// interactive scatter plot

var rain_chance = [88, 6, 10, 24, 18, 21, 49, 31, 20, 24, 36, 18, 43, 58, 38];
var dates = ["Thu 02","Fri 03","Sat 04","Sun 05","Mon 06","Tue 07","Wed 08","Thu 09","Fri 10","Sat 11","Sun 12","Mon 13","Tue 14","Wed 15","Thu 16"];
var totalcount = rain_chance.length;


var height = view.size.height;
var width = view.size.width;
var starty = height*0.5;            //middle of the screen
var startx = width/totalcount;
var inc = width/totalcount-8;


for(var i=0;i<totalcount;i++)
{
    var origin = new Point(startx+inc*i, starty);
    var radius = rain_chance[i];
    var circle = new Path.Circle(origin,radius);
    circle.fillColor = new Color(rain_chance[i]/100,0.2,0.2);
    circle.strokeWidth = 5;

    var offset = new Point(0,150);
    var annotation = new PointText({
        content: dates[i],
        point: origin+offset,
        fillColor: 'black',
        fontWeight: 'bold',
        fontSize: 18
    });
    annotation.rotate(45);
}

var textdisplay = new PointText({
    content:"",
    point:(0,0),
    fillColor: "blue",
    fontWeight: 'bold',
    fontSize: 24,
    aligh: "justify"
});
textdisplay.rotate(-45);

function onMouseMove(event)
{
    if(event.item!=null)
    {
        var itemindex = event.item.index; 
        // since we are adding a circle and then text, all circles have even index
        if(itemindex%2==0)
        {
            textdisplay.content = "Chance of rain "+rain_chance[itemindex/2]+"%";
            var position = event.item.position;
            textdisplay.position = position+ (0,-40); // move it a little bit up
        }
          
    }
    else
    {
        textdisplay.content = "";
    }
}