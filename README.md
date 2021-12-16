# Calculator Front End

(C) 2019 David J. Kalbfleisch

This repository implements a front-end for a calculator using vanilla JavaScript, HTML5,
and CSS.  There are no dependencies.

## Technical Discussion

I accomplished the calculator layout entirely in CSS using a grid, and I assigned the same
"click" listener to every calculator button.  The listener passes the elements's "id"
attribute to the provided "readInput" function.  For example, if the user clicks on "=",
there is a call to 'readInput("equals")'.

I implemented toggling between color themes by using JavaScript to change the "href"
attribute of a "link" element for a style sheet.  The grid, and other styles common to
both themes, are in a separate file.  This has the downside of requiring an extra HTTP
request, but it prevents the user from seeing a flicker of the calculator as "div"
elements without a layout.

I did not use any external libraries because I didn't see any need for them.  If this
were part of a larger project already using relevant libraries, such as Bootstrap, I
would incorporate them as applicable to avoid reinventing the wheel.

## Further Work

I did not implement the calculation logic.

I noted that the calculator does not fit in my phone's display when in the horizontal
orientation.  I can zoom in, but it won't let me zoom out.  Zooming works as expected
on my desktop.

On mobile, pressing a calculator button activates the color associated with hovering.
That's appropriate when using a mouse, but it is suboptimal for a touch interface.

