# Tasks

## 0: See README.md and preform the installation.

## 1: Inspect element

### Manipulate html
Right click on an html element and change the text.

Use the shotrtcut buttons in the style tab to add temporary "states" and classes
to the button.


## 2: Sources editor
Use the "sources" editor to edit the source files of this project directly in
chrome. Right click and use "Add folder to workspace", then "Map to file system
resource".


## 3: CSS
### Device mode
Open device mode and turn on media queries. Change the resolution to more and less
than 400px and see the difference.

Troubleshoot the media query that sets the margin to 20px when the width is less
than 800 px.

### CSS variables
Look at the css variables used in the HTML class, find a nice color theme using the
color picker.


## 4: Network

### Copy as curl
Look in the network tab for the XHR request for a list of all the workshops. Look
at timings, size and try the "copy as curl" command.


## 5: Perfomance

### Memory and DOM elements leak
In the timeline tab select "memory" and start to capture the memory usage while
pressing the button.

### JS profile
Run the prime number script and do a JS profile. Look for unoptimized code and try
to fix it. Re-run the JS profile to check for improvements.

### Rendering order
Look at the rendering order on heavy sites like vg.no. Remember to turn off adblock!


## 6: Node debugging
Make sure you have `node -v` `6.3.0` or higher

Run `node --inspect server`. Copy and paste the chrome-devtools:// URL to a tab,
open `localhost:3000` in a different tab.


## 7: Progressive Web Apps
