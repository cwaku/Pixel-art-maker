// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()

/** Now, open up design.js. As you start writing your code, keep these three tasks in mind:

Define your variables by selecting the DOM elements that the user will interact with. This is where your jQuery skills can come into play! For instance, the submit button, the table, and the color picker need to be accessed. The value of the color selected needs to be stored as well, since the clicked cell in the table needs to be set to the selected color.
Add event listeners to the relevant DOM elements, so that user input can be color values and table sizes can be dynamically set by the user.
Set the size of the cross stitch canvas as an N by M grid with the makeGrid() function. Use your knowledge of JavaScript loops to dynamically clear and create the table based on user input. Each cell should have an event listener that sets the background color of the cell to the selected color.
Now test it! When you're done, you should be able to create a canvas of any size, choose a color using the color picker, and click on the canvas's table cells to set their color.
**/


var color, width, height;
//On submission, call makeGrid()
$('#sizePicker').on('submit', function(event){
event.preventDefault();
color = $('#colorPicker').val();
width = $('#inputWeight').val();
height = $('#inputHeight').val();
makeGrid(height, width);
});

function makeGrid(x,y) {
//create table
$('tr').remove();
for (n = 1; n <= x; n++){
   $('#pixelCanvas').append('<tr id=table'+n+'></tr>');

   var m = 1;
   while (m <= y){
       $('tr').filter(':last').append('<td></td>');
       m++;
   }
 }

//Add color
$('td').click(function addColor(){
   color = $('#colorPicker').val();
   if ($(this).attr('style')) {
       $(this).removeAttr('style')
   }
   else {
       $(this).css('background-color',color);
   }
});
}
