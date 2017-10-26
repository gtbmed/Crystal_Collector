![main screen](https://github.com/gtbmed/Crystal_Collector/blob/master/assets/images/fullScreen.PNG "Full Screen View")

# Crystal_Collector

A simple Javascript game using jquery.  When the page loads, the user is given a random number to try to match and 4 crystals with random secret integer values (between 1 and 12) assigned to them.

The images assigned to the crystals are also assigned when the page loads.  An image class is added with the name of the particular image to be used.

```javascript
var crystalValues = [];
//crystalColors allows use add CSS classes
// with individual attributes for each gem color
var crystalColors = ["redGem", "blueGem", "yellowGem", "greenGem"];

//We'll make our game setup be a function so that it can be called again after each win or loss.
function newGame() {
    $("#crystalBoxes").empty();
    for (var i = 0; i < crystalColors.length; i++) {
        crystalValues[i] = 1 + Math.floor(Math.random() * 12);
        console.log(crystalValues);
        var crystals = $("<img>");
        //Do I need a separate class to click on or can I make the object clicked on be an existing one?  
        //I don't know so lets make one
        crystals.addClass("crystalClick");
        crystals.addClass(crystalColors[i]);
        // Can't get crystalBox to add with the crystalColors class possibly because one is a string the other is a call to an array with strings
        crystals.addClass("crystalBox");  
        crystals.attr("data-crystalvalue", crystalValues[i]);
        $("#crystalBoxes").append(crystals);
    }
```

## How to Play
The user tries to match the given number by clicking on one of the 4 crystals.  Each time the user clicks one of the crystals, the secret integer value is added to the user's number.

If the user matches the given number, they are alerted that they have won and their win record increments.

If the user's additions go over the given number, they are alerted that they have lost and their loss record increments.
