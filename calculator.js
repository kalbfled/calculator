// (C) 2019 David J. Kalbfleisch

"use strict";


/* Attach event listeners. */
function init()
{
    document.getElementById("toggle").addEventListener("click", toggleTheme);

    // Assign a listener to all calculator buttons.
    for (let div of document.getElementById("calculator").getElementsByTagName("div"))
    {
        if (div.id === "output")
            // Clicking on the output doesn't do anything.
            continue;

        // Pass the "id" attribute of a clicked button to readInput.
        div.addEventListener("click", function() { readInput(this.id); });
    }
}


/*
Reads the input from the calculator button interactions, and feeds it to the processor.
@param {string} keyId Identifier for the Calculator button
*/
function readInput(keyId)
{
    console.log(keyId);
    // TODO - Set some global value that can be read in showResults.
}


/*
Is called by the processor to render the actual results on UI.
@returns {string} result
*/
function showResults()
{
    console.log(keyId);
    // TODO - Update the inner HTML of the "output" div with some global value.
}


/* Toggle between two available stylesheets (themes). */
function toggleTheme()
{
    var theme = document.getElementById("theme");

    if (theme.href.endsWith("1.css"))
        theme.href = theme.href.replace('1', '2');
    else if (theme.href.endsWith("2.css"))
        theme.href = theme.href.replace('2', '1');
    else
        console.error("Unrecognized style sheet.");
}

